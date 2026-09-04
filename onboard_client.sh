#!/usr/bin/env bash
set -e

if [ -z "$1" ]; then
  echo "Error: Missing client ID."
  echo "Usage: ./onboard_client.sh <client_id> [node_quota]"
  echo "Example: ./onboard_client.sh paloalto 10"
  exit 1
fi

CLIENT_ID=$(echo "$1" | tr '[:upper:]' '[:lower:]' | tr ' -' '__')
NODE_QUOTA=${2:-10}
INGRESS_HOST="ac139f02fa2784f06a6ba9eb3364297d-492546266.us-west-2.elb.amazonaws.com"
ALERT_FILE="client-quota-alerts.yaml"

echo "=================================================="
echo " Onboarding New Client: $CLIENT_ID"
echo " Pilot Node Quota:      $NODE_QUOTA"
echo "=================================================="

echo "[1/3] Generating client auth token..."
if kubectl get deployment auth-service >/dev/null 2>&1; then
  CLIENT_TOKEN=$(kubectl exec deployment/auth-service -- /app/auth-service-cli generate-token --tenant "$CLIENT_ID" --tier "pilot")
else
  CLIENT_TOKEN="aetheris_live_${CLIENT_ID}_$(openssl rand -hex 8)"
fi
echo "      Token: $CLIENT_TOKEN"

echo "[2/3] Updating $ALERT_FILE..."
if [ ! -f "$ALERT_FILE" ]; then
  echo "groups:" > "$ALERT_FILE"
  echo "  - name: client_quotas" >> "$ALERT_FILE"
  echo "    rules:" >> "$ALERT_FILE"
fi

cat << ALERT_BLOCK >> "$ALERT_FILE"
      - alert: ${CLIENT_ID}_PilotQuotaExceeded
        expr: sum(node_active_status{company_id="$CLIENT_ID"}) > $NODE_QUOTA
        for: 1m
        labels:
          severity: warning
          company_id: "$CLIENT_ID"
        annotations:
          summary: "Client $CLIENT_ID exceeded pilot node threshold ($NODE_QUOTA nodes)"
ALERT_BLOCK

if command -v promtool >/dev/null 2>&1; then
  promtool check rules "$ALERT_FILE" >/dev/null && echo "      Alert rule syntax verified."
fi

echo "[3/3] Client onboarding complete!"
echo "=================================================="
echo "Provide the client with this Docker command to start their edge node:"
echo ""
echo "docker run -d \\"
echo "  --name aetheris-edge-node \\"
echo "  -e AETHERIS_TENANT_ID=\"$CLIENT_ID\" \\"
echo "  -e AETHERIS_AUTH_TOKEN=\"$CLIENT_TOKEN\" \\"
echo "  -e AETHERIS_CLOUD_INGRESS=\"http://$INGRESS_HOST\" \\"
echo "  aetheris/edge-node:latest"
echo "=================================================="
