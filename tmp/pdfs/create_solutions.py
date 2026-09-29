from pathlib import Path
from reportlab.pdfgen import canvas
from reportlab.platypus import SimpleDocTemplate, Paragraph, Spacer, PageBreak
from reportlab.lib.styles import ParagraphStyle
from reportlab.lib.colors import HexColor
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[2]
OUT = ROOT / 'output/pdf/ITG-Tier-3-Solutions.pdf'
OUT.parent.mkdir(parents=True, exist_ok=True)
pages = [
    {
        'title': 'Business Process Re-engineering',
        'headline': 'Simplify how work gets done.',
        'intro': 'ITG helps organizations redesign complex workflows into clear, connected processes. We identify bottlenecks, remove unnecessary handoffs and define responsibilities and controls so your teams can work with greater clarity.',
        'solutions': [
            ('Process discovery and mapping', 'Understand how work moves across teams and systems. Map current workflows, dependencies and exceptions to reveal delays, duplication and gaps in ownership.'),
            ('Workflow redesign', 'Create simpler workflows for activities such as approvals, procurement, onboarding and service requests. Define the steps, decision points and escalation paths needed to keep work moving.'),
            ('Automation readiness', 'Identify repeatable tasks suitable for automation and clarify the rules behind them. Define requirements for digital forms, routing and notifications before implementation.'),
            ('Roles, controls and accountability', 'Establish clear process owners, responsibilities and approval boundaries. Build review points and exception handling into the redesigned workflow.'),
            ('Performance measurement', 'Define practical measures for cycle time, backlog, rework and service quality. Give teams a consistent way to assess whether the redesigned process is improving operations.'),
            ('Adoption and operational handover', 'Support the transition with process documentation, standard operating procedures and team guidance. Help people understand their responsibilities and use the new workflow consistently.'),
        ],
        'benefits': 'Fewer avoidable handoffs. Clearer ownership. More consistent execution. A stronger foundation for responsible automation.',
        'cta': 'Ready to simplify a business process?',
        'cta_body': 'Tell us where work slows down. We will help define a practical scope for redesign.',
    },
    {
        'title': 'E-Commerce & Marketplaces',
        'headline': 'Connect the sale to the systems behind it.',
        'intro': 'ITG builds commerce experiences that bring product discovery, purchasing and operations together. We connect storefronts and marketplaces with product, payment, order and fulfilment workflows to support a coherent customer journey.',
        'solutions': [
            ('Digital storefronts', 'Create responsive storefronts with product browsing, search, product detail pages and account journeys. Shape the experience around your catalog and the needs of your customers.'),
            ('Catalog and product information', 'Organize product descriptions, images, variants and pricing for consistent presentation. Connect catalog data to the business systems and sales channels that need it.'),
            ('Cart, checkout and payments', 'Build clear cart and checkout journeys with payment integrations, delivery options and order confirmations. Handle payment status and unsuccessful transactions within the buying flow.'),
            ('Marketplace connections', 'Connect product listings and orders with relevant marketplace channels. Align product information and order data so teams can manage channel activity with greater visibility.'),
            ('Order, inventory and fulfilment workflows', 'Connect commerce with inventory, ERP, warehouse or delivery systems as required. Support stock visibility, order routing, shipment updates and returns across the operational journey.'),
            ('Commerce reporting', 'Bring sales, order status and channel activity into useful reporting. Help teams understand purchasing patterns and identify friction in the customer and fulfilment experience.'),
        ],
        'benefits': 'A clearer buying experience. More consistent product information. Better visibility of orders and stock. Less manual reconciliation between channels and operations.',
        'cta': 'Planning a storefront or marketplace integration?',
        'cta_body': 'Share your sales channels and operational systems. We will help shape a connected commerce solution.',
    },
    {
        'title': 'Generative Media Production',
        'headline': 'Turn creative ideas into consistent content.',
        'intro': 'ITG uses generative workflows to produce visual and written assets for digital channels. We bring creative direction, brand standards and human review into the production process so content stays aligned with its purpose.',
        'solutions': [
            ('Creative direction and content planning', 'Translate campaign objectives into visual concepts, messaging and asset requirements. Define the audience, channel, tone and creative constraints before production begins.'),
            ('Generative visual assets', 'Produce concept visuals, illustrations and campaign imagery through guided generation and refinement. Review outputs for brand fit, visual quality and suitability for their intended use.'),
            ('Written content and messaging', 'Develop copy variations for websites, product descriptions, campaigns and social channels. Refine generated drafts for clarity, factual accuracy and consistency with your brand voice.'),
            ('Content variations and channel adaptation', 'Adapt approved concepts into formats, sizes and message variations for different channels. Maintain a consistent creative direction across the resulting asset set.'),
            ('Brand, quality and rights review', 'Build approval checkpoints into the workflow. Review assets against brand guidelines, check usage permissions and flag sensitive or unsuitable outputs before release.'),
            ('Asset organization and production handoff', 'Organize approved files, versions and usage notes for your teams. Prepare assets for publishing with clear naming, agreed formats and documented approval status.'),
        ],
        'benefits': 'Faster iteration on creative concepts. More consistent content across channels. Clearer review and approval. Organized assets ready for production handoff.',
        'cta': 'Need more content with a consistent creative direction?',
        'cta_body': 'Tell us what you need to produce and where it will appear. We will help define the creative scope and review workflow.',
    },
]

styles = {
    'eyebrow': ParagraphStyle('eyebrow', fontName='Helvetica-Bold', fontSize=9, leading=12, textColor=HexColor('#007F83'), spaceAfter=12),
    'title': ParagraphStyle('title', fontName='Helvetica-Bold', fontSize=27, leading=31, textColor=HexColor('#102B40'), spaceAfter=10),
    'headline': ParagraphStyle('headline', fontName='Helvetica-Bold', fontSize=15, leading=19, textColor=HexColor('#007F83'), spaceAfter=9),
    'body': ParagraphStyle('body', fontName='Helvetica', fontSize=10, leading=14, textColor=HexColor('#354757'), spaceAfter=11),
    'section': ParagraphStyle('section', fontName='Helvetica-Bold', fontSize=12, leading=16, textColor=HexColor('#102B40'), spaceBefore=6, spaceAfter=8),
    'solution': ParagraphStyle('solution', fontName='Helvetica-Bold', fontSize=10.5, leading=14, textColor=HexColor('#102B40'), spaceAfter=3),
    'detail': ParagraphStyle('detail', fontName='Helvetica', fontSize=9.5, leading=13, textColor=HexColor('#354757'), spaceAfter=10),
}

def footer(c, doc):
    w, h = A4
    c.setStrokeColor(HexColor('#D5E3E8'))
    c.line(44, 43, w-44, 43)
    c.setFont('Helvetica', 8)
    c.setFillColor(HexColor('#627583'))
    c.drawString(44, 29, 'ITG  |  Custom Solutions')
    c.drawRightString(w-44, 29, str(doc.page))

story = []
for i, page in enumerate(pages):
    if i:
        story.append(PageBreak())
    for key, value in [('eyebrow', 'CUSTOM SOLUTIONS / ' + str(i+1).zfill(2)), ('title', page['title']), ('headline', page['headline']), ('body', page['intro']), ('section', 'Solutions we provide')]:
        story.append(Paragraph(value, styles[key]))
    for title, body in page['solutions']:
        story.extend([Paragraph(title, styles['solution']), Paragraph(body, styles['detail'])])
    story.extend([Paragraph('What this helps you achieve', styles['section']), Paragraph(page['benefits'], styles['body']), Paragraph(page['cta'], styles['section']), Paragraph(page['cta_body'], styles['detail']), Paragraph('Request a Consultation', styles['eyebrow'])])

SimpleDocTemplate(str(OUT), pagesize=A4, rightMargin=44, leftMargin=44, topMargin=38, bottomMargin=56, title='ITG | Tier 3 Custom Solutions', author='ITG').build(story, onFirstPage=footer, onLaterPages=footer)
reader = PdfReader(str(OUT))
assert len(reader.pages) == 3, f'Expected 3 pages, found {len(reader.pages)}'
for page, expected in zip(reader.pages, pages):
    extracted = page.extract_text()
    assert expected['title'] in extracted and 'Request a Consultation' in extracted
print(OUT)
