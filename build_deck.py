from pptx import Presentation
from pptx.util import Inches, Pt
from pptx.dml.color import RGBColor
from pptx.enum.text import PP_ALIGN
from pptx.enum.shapes import MSO_SHAPE

# Initialize Presentation
prs = Presentation()
prs.slide_width = Inches(13.333)
prs.slide_height = Inches(7.5)
blank_layout = prs.slide_layouts[6]

# Theme Colors
BG_COLOR = RGBColor(2, 6, 23)        # Slate 950
PANEL_COLOR = RGBColor(15, 23, 42)   # Slate 900
TEXT_WHITE = RGBColor(248, 250, 252) # White
TEXT_MUTED = RGBColor(148, 163, 184) # Slate 400
ACCENT_CYAN = RGBColor(34, 211, 238) # Cyan 400
BORDER_COLOR = RGBColor(30, 41, 59)  # Slate 800

def apply_background(slide):
    bg = slide.shapes.add_shape(MSO_SHAPE.RECTANGLE, 0, 0, Inches(13.333), Inches(7.5))
    bg.fill.solid()
    bg.fill.fore_color.rgb = BG_COLOR
    bg.line.fill.background()

def add_header(slide, title, category="AETHERIS EDGE | PATENT PENDING EXECUTIVE BRIEFING"):
    tb = slide.shapes.add_textbox(Inches(0.8), Inches(0.4), Inches(11.7), Inches(0.8))
    tf = tb.text_frame
    tf.word_wrap = True
    
    p0 = tf.paragraphs[0]
    p0.text = category.upper()
    p0.font.size = Pt(10)
    p0.font.bold = True
    p0.font.color.rgb = ACCENT_CYAN
    
    p1 = tf.add_paragraph()
    p1.text = title
    p1.font.size = Pt(22)
    p1.font.bold = True
    p1.font.color.rgb = TEXT_WHITE

# --- SLIDE 1: TITLE SLIDE ---
s1 = prs.slides.add_slide(blank_layout)
apply_background(s1)
tb1 = s1.shapes.add_textbox(Inches(1.0), Inches(2.2), Inches(11.3), Inches(3.5))
tf1 = tb1.text_frame
p1_0 = tf1.paragraphs[0]
p1_0.text = "PATENT PENDING EXECUTIVE BRIEFING"
p1_0.font.size = Pt(12)
p1_0.font.bold = True
p1_0.font.color.rgb = ACCENT_CYAN

p1_1 = tf1.add_paragraph()
p1_1.text = "Aetheris Edge Platform"
p1_1.font.size = Pt(40)
p1_1.font.bold = True
p1_1.font.color.rgb = TEXT_WHITE

p1_2 = tf1.add_paragraph()
p1_2.text = "A Secure, Workload-Aware Edge Data Plane for Constrained Networks"
p1_2.font.size = Pt(18)
p1_2.font.color.rgb = TEXT_MUTED

# --- SLIDE 2: THE EDGE DATA-PLANE LANDSCAPE (COMPETITIVE MATRIX) ---
s2 = prs.slides.add_slide(blank_layout)
apply_background(s2)
add_header(s2, "The Edge Data-Plane Landscape", category="AETHERIS EDGE | PATENT PENDING")

# Subtitle
tb_sub = s2.shapes.add_textbox(Inches(0.8), Inches(1.1), Inches(11.7), Inches(0.4))
p_sub = tb_sub.text_frame.paragraphs[0]
p_sub.text = "Why legacy hardware and point solutions fail at the tactical edge—and how Aetheris unifies the stack."
p_sub.font.size = Pt(12)
p_sub.font.color.rgb = TEXT_MUTED

table_shape = s2.shapes.add_table(7, 4, Inches(0.8), Inches(1.6), Inches(11.733), Inches(5.2))
table = table_shape.table

headers = ["Capabilities & Performance", "Legacy WAN Optimizers\n(e.g., Riverbed, Silver Peak)", "Modern SASE / SD-WAN\n(e.g., Zscaler, Palo Alto)", "Aetheris Edge Data-Plane"]
data = [
    ["Bandwidth Optimization", "20%–35% (Heavy byte caching)", "0%–15% (Basic header compression)", "54.5%–56.9% (Real-time delta-compression)"],
    ["Degraded Link Voice Quality", "Unstable (MOS < 2.8 under loss)", "Moderate (MOS ~3.2 with FEC overhead)", "High Fidelity (MOS 3.44–3.79 under SATCOM delay)"],
    ["Cryptographic Readiness", "Legacy (AES-256 / IPSec)", "Standard (TLS 1.3 / WireGuard)", "Post-Quantum Ready (NIST FIPS 204)"],
    ["Tenancy Architecture", "Appliance-per-tenant (High VM footprint)", "IP/VLAN Overlays (Complex routing)", "Native Header Isolation (X-Tenant-ID)"],
    ["Observability & Billing", "Proprietary SNMP (Siloed logs)", "Third-party agents (Datadog/Splunk)", "Native Open Standards (Prometheus / Grafana)"],
    ["Deployment Footprint", "Heavy (Multi-GB VMs or dedicated hw)", "Cloud-dependent (Requires hairpin traffic)", "Ultra-Light (Compiled Rust container, zero-dep)"]
]

for col_idx, text in enumerate(headers):
    cell = table.cell(0, col_idx)
    cell.fill.solid()
    cell.fill.fore_color.rgb = PANEL_COLOR
    p = cell.text_frame.paragraphs[0]
    p.text = text
    p.font.bold = True
    p.font.size = Pt(10)
    p.font.color.rgb = ACCENT_CYAN if col_idx == 3 else TEXT_WHITE

for row_idx, row_data in enumerate(data):
    for col_idx, text in enumerate(row_data):
        cell = table.cell(row_idx + 1, col_idx)
        cell.fill.solid()
        cell.fill.fore_color.rgb = PANEL_COLOR if col_idx == 3 else BG_COLOR
        p = cell.text_frame.paragraphs[0]
        p.text = text
        p.font.size = Pt(9)
        p.font.color.rgb = ACCENT_CYAN if col_idx == 3 else TEXT_MUTED

# --- SLIDE 3: KEY MARKET DIFFERENTIATORS ---
s3 = prs.slides.add_slide(blank_layout)
apply_background(s3)
add_header(s3, "Key Market Differentiators")

diffs = [
    ("Consolidates the 'Franken-Stack'", "Replaces three separate vendors—WAN optimization, edge security, and session border controllers—with a single, low-latency Rust binary."),
    ("Proactive Egress Savings", "Automates real-time cloud transport cost reduction ($0.09/GB baseline) visible directly on executive telemetry dashboards."),
    ("Zero-Trust for SATCOM & Tactical Edge", "Delivers post-quantum encryption without forcing traffic hairpins through centralized cloud proxies.")
]

for i, (title, desc) in enumerate(diffs):
    left = Inches(0.8 + i * 3.9)
    box = s3.shapes.add_shape(MSO_SHAPE.ROUNDED_RECTANGLE, left, Inches(1.8), Inches(3.7), Inches(4.8))
    box.fill.solid()
    box.fill.fore_color.rgb = PANEL_COLOR
    box.line.color.rgb = BORDER_COLOR
    
    tf = box.text_frame
    tf.word_wrap = True
    p0 = tf.paragraphs[0]
    p0.text = title
    p0.font.size = Pt(15)
    p0.font.bold = True
    p0.font.color.rgb = ACCENT_CYAN
    
    p1 = tf.add_paragraph()
    p1.text = desc
    p1.font.size = Pt(12)
    p1.font.color.rgb = TEXT_MUTED

prs.save("Aetheris_Edge_Executive_Briefing.pptx")
print("Successfully generated updated Aetheris_Edge_Executive_Briefing.pptx")
