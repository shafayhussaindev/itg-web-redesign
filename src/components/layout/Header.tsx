import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";
import { useTheme } from "@/contexts/ThemeContext";
import { ChevronDown, ChevronRight, Menu, Moon, Sun, X, Search, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { cn } from "@/lib/utils";
// Same file as the colour mark with its ink turned white, so the two share an
// identical outline and box — swapping them reads as a recolour, not a resize.
import logoOnDark from "@/assets/logo-trimmed-white.png";
import logoOnLight from "@/assets/logo-trimmed.png";
import { CommandPalette } from "@/components/CommandPalette";
import { NavSearch } from "@/components/layout/NavSearch";

type MenuItem = {
  title: string;
  description: string;
  href: string;
};

export type CategoryItem = MenuItem & {
  children?: MenuItem[];
};

export const solutionsItems: CategoryItem[] = [
  {
    title: "AI & Intelligence",
    description: "Data-driven insights and intelligent automation at scale.",
    href: "/ai-intelligence",
    children: [
      { title: "AI Strategy & Advisory", description: "Vision, roadmap, and responsible AI adoption", href: "/ai-intelligence#ai-strategy" },
      { title: "Applied AI & Machine Learning", description: "Production-grade ML for real business impact", href: "/ai-intelligence#applied-ai-ml" },
      {
        title: "Enterprise Analytics & Business Intelligence",
        description: "Insight-driven decisions across the enterprise",
        href: "/ai-intelligence#enterprise-analytics",
      },
      { title: "Data Platforms & Insights", description: "Modern data stacks and actionable insights", href: "/ai-intelligence#data-platforms" },
      { title: "AI Document Intelligence", description: "Automated extraction and document workflows", href: "/ai-intelligence#ai-document-intel" },
      {
        title: "Industry 4.0 & Smart Systems",
        description: "Connected operations and intelligent automation",
        href: "/ai-intelligence#industry-4-0",
      },
      {
        title: "Digital Product Passport (AI-enabled)",
        description: "AI-accelerated compliance and traceability",
        href: "/ai-intelligence#dpp-ai",
      },
    ],
  },
  {
    title: "Enterprise Business Systems",
    description: "Unified platforms for finance, operations, and core processes.",
    href: "#enterprise-systems",
    children: [
      { title: "Enterprise ERP Solutions", description: "End-to-end ERP modernization", href: "#erp-solutions" },
      { title: "Financial & Operational Systems", description: "Scalable finance and ops platforms", href: "#financial-ops" },
      { title: "CRM & Customer Engagement", description: "Unified customer lifecycle systems", href: "#crm-engagement" },
      {
        title: "Procurement & Vendor Management",
        description: "Strategic sourcing and supplier ecosystems",
        href: "#procurement-vendor",
      },
      {
        title: "Manufacturing & Industry-Specific ERP",
        description: "Industry-tailored ERP for production",
        href: "#manufacturing-erp",
      },
      {
        title: "Corporate & Multi-Entity Systems",
        description: "Group-level governance and consolidation",
        href: "#multi-entity-systems",
      },
    ],
  },
  {
    title: "Automation & Cloud",
    description: "Automated workflows and modern, cloud-ready infrastructure.",
    href: "#automation-cloud",
    children: [
      { title: "Workflow Automation", description: "Streamlined operations and approvals", href: "#workflow-automation" },
      {
        title: "Robotic Process Automation (RPA)",
        description: "Automate repetitive tasks at scale",
        href: "#rpa",
      },
      {
        title: "Cloud Architecture & Modernization",
        description: "Cloud-native design and migration",
        href: "#cloud-modernization",
      },
      {
        title: "Hybrid & Multi-Cloud Solutions",
        description: "Flexible cloud operating models",
        href: "#hybrid-multi-cloud",
      },
      { title: "System & API Integration", description: "Connected systems and data flows", href: "#system-api" },
      {
        title: "Document & Records Management",
        description: "Secure document governance and lifecycle",
        href: "#document-records",
      },
      {
        title: "Asset & RFID-Based Automation",
        description: "Asset intelligence and RFID tracking",
        href: "#asset-rfid",
      },
    ],
  },
  {
    title: "Digital Experience",
    description: "User-centric enterprise platforms and experiences.",
    href: "#digital-experience",
    children: [
      {
        title: "Enterprise Web Engineering",
        description: "Scalable web platforms for business",
        href: "#enterprise-web",
      },
      { title: "Mobile Application Development", description: "Native and cross-platform apps", href: "#mobile-apps" },
      {
        title: "UI/UX & Product Design Systems",
        description: "Unified UX and design systems",
        href: "#ui-ux-design",
      },
      {
        title: "Digital Portals & Experience Platforms",
        description: "Customer, partner, and employee portals",
        href: "#digital-portals",
      },
      {
        title: "Branding & Digital Design Systems",
        description: "Brand-consistent digital experiences",
        href: "#branding-design",
      },
    ],
  },
  {
    title: "Sustainability & Compliance",
    description: "Traceability, ESG readiness, and regulatory compliance.",
    href: "#sustainability",
    children: [
      { title: "Sustainability & ESG Solutions", description: "ESG performance and governance", href: "#esg-solutions" },
      { title: "CSRD Readiness & Reporting", description: "EU CSRD compliance readiness", href: "#csrd" },
      { title: "Digital Product Passport (EU)", description: "EU DPP implementation", href: "#dpp-eu" },
      { title: "Traceability & Transparency Systems", description: "End-to-end supply visibility", href: "#traceability" },
      { title: "Compliance & Audit Enablement", description: "Audit readiness and assurance", href: "#compliance-audit" },
      { title: "Carbon & Circularity Intelligence", description: "Emissions and circularity insights", href: "#carbon-circularity" },
    ],
  },
];

export const industriesItems: CategoryItem[] = [
  {
    title: "Enterprise & Corporate",
    description: "Enterprise-grade platforms for multi-entity organizations.",
    href: "#industry-enterprise-corporate",
    children: [
      { title: "Large Enterprises", description: "Enterprise-scale operations", href: "#industry-large-enterprises" },
      { title: "Holding Companies & Groups", description: "Group-level governance", href: "#industry-holding-groups" },
      { title: "Conglomerates", description: "Multi-sector enterprises", href: "#industry-conglomerates" },
      { title: "Shared Services Centers", description: "Centralized service hubs", href: "#industry-shared-services" },
      { title: "Multi-Entity Organizations", description: "Complex entity structures", href: "#industry-multi-entity" },
    ],
  },
  {
    title: "Manufacturing & Industrial",
    description: "Digital platforms for production, compliance and smart factories.",
    href: "#industry-manufacturing-industrial",
    children: [
      { title: "Manufacturing Operations", description: "End-to-end operations", href: "#industry-manufacturing-ops" },
      {
        title: "Textile & Apparel Manufacturing",
        description: "Textile and apparel operations",
        href: "#industry-textile-apparel",
      },
      {
        title: "Spinning Mills & Processing Units",
        description: "Spinning and processing units",
        href: "#industry-spinning-mills",
      },
      {
        title: "Industry 4.0 & Smart Factories",
        description: "Connected factory systems",
        href: "#industry-4-0-factories",
      },
      {
        title: "Heavy & Light Industrial Enterprises",
        description: "Industrial enterprises",
        href: "#industry-heavy-light",
      },
    ],
  },
  {
    title: "Retail & Consumer Goods",
    description: "Omnichannel operations and data-driven retail management.",
    href: "#industry-retail-consumer",
    children: [
      {
        title: "Retail & Omni-Channel Businesses",
        description: "Unified retail channels",
        href: "#industry-omnichannel",
      },
      { title: "Consumer Goods & FMCG", description: "FMCG operations", href: "#industry-fmcg" },
      { title: "E-Commerce & Marketplaces", description: "Marketplace ecosystems", href: "#industry-ecommerce" },
      { title: "Brand Owners & Distributors", description: "Brand and distribution", href: "#industry-brand-distributors" },
      {
        title: "Private Label Manufacturers",
        description: "Private label operations",
        href: "#industry-private-label",
      },
    ],
  },
  {
    title: "Logistics, Supply Chain & Operations",
    description: "End-to-end visibility and operational efficiency.",
    href: "#industry-logistics-supply-chain",
    children: [
      { title: "Logistics & Warehousing", description: "Warehouse operations", href: "#industry-warehousing" },
      {
        title: "Transportation & Fleet Operations",
        description: "Fleet operations",
        href: "#industry-transportation-fleet",
      },
      {
        title: "Distribution & Fulfillment Centers",
        description: "Distribution networks",
        href: "#industry-distribution-fulfillment",
      },
      { title: "Last-Mile Delivery", description: "Last-mile logistics", href: "#industry-last-mile" },
      { title: "Supply Chain Operations", description: "Supply chain execution", href: "#industry-supply-chain-ops" },
    ],
  },
  {
    title: "Healthcare & Life Sciences",
    description: "Secure, compliant systems for healthcare and regulated environments.",
    href: "#industry-healthcare-life-sciences",
    children: [
      {
        title: "Hospitals & Healthcare Providers",
        description: "Provider operations",
        href: "#industry-hospitals",
      },
      { title: "Clinics & Medical Centers", description: "Clinical operations", href: "#industry-clinics" },
      { title: "HealthTech Companies", description: "Health technology", href: "#industry-healthtech" },
      {
        title: "Pharmaceuticals & Life Sciences",
        description: "Pharma and life sciences",
        href: "#industry-pharma",
      },
      {
        title: "Medical Supply & Distribution",
        description: "Medical supply chains",
        href: "#industry-medical-supply",
      },
    ],
  },
  {
    title: "Real Estate, Construction & Facilities",
    description: "Integrated platforms for assets and projects.",
    href: "#industry-real-estate-construction",
    children: [
      { title: "Real Estate Developers", description: "Development operations", href: "#industry-real-estate-dev" },
      {
        title: "Property & Facilities Management",
        description: "Facilities operations",
        href: "#industry-facilities",
      },
      {
        title: "Construction & Project Controls",
        description: "Project delivery",
        href: "#industry-construction-controls",
      },
      { title: "Infrastructure & Utilities", description: "Infrastructure operations", href: "#industry-infrastructure" },
      {
        title: "Asset-Intensive Organizations",
        description: "Asset-heavy enterprises",
        href: "#industry-asset-intensive",
      },
    ],
  },
  {
    title: "Professional Services",
    description: "Structured systems for consulting, legal and financial firms.",
    href: "#industry-professional-services",
    children: [
      { title: "Consulting Firms", description: "Advisory operations", href: "#industry-consulting" },
      { title: "Financial Advisory", description: "Financial advisory firms", href: "#industry-financial-advisory" },
      { title: "Legal & Compliance Firms", description: "Legal operations", href: "#industry-legal-compliance" },
      { title: "Accounting & Audit Firms", description: "Accounting and audit", href: "#industry-accounting-audit" },
      {
        title: "IT & Managed Services Providers",
        description: "Managed services",
        href: "#industry-managed-services",
      },
    ],
  },
  {
    title: "Government & Public Sector",
    description: "Secure, transparent digital platforms for public institutions.",
    href: "#industry-government-public",
    children: [
      { title: "Government Authorities", description: "Government bodies", href: "#industry-government-authorities" },
      {
        title: "Public Sector Enterprises",
        description: "State-owned enterprises",
        href: "#industry-public-enterprises",
      },
      { title: "Municipalities & Smart Cities", description: "Smart city programs", href: "#industry-municipalities" },
      { title: "Regulatory Bodies", description: "Regulatory agencies", href: "#industry-regulatory" },
      {
        title: "Public Infrastructure Organizations",
        description: "Infrastructure bodies",
        href: "#industry-public-infrastructure",
      },
    ],
  },
  {
    title: "Energy, Sustainability & ESG",
    description: "Sustainability, compliance and ESG intelligence platforms.",
    href: "#industry-energy-sustainability",
    children: [
      {
        title: "Sustainability-Driven Enterprises",
        description: "Sustainability leaders",
        href: "#industry-sustainability-driven",
      },
      { title: "ESG-Focused Organizations", description: "ESG-centric orgs", href: "#industry-esg-focused" },
      { title: "Energy & Utilities", description: "Energy and utilities", href: "#industry-energy-utilities" },
      {
        title: "Circular Economy Initiatives",
        description: "Circularity programs",
        href: "#industry-circular-economy",
      },
      {
        title: "Environmental Compliance Bodies",
        description: "Environmental compliance",
        href: "#industry-environmental-compliance",
      },
    ],
  },
  {
    title: "Education & Research",
    description: "Digital systems for academic and research institutions.",
    href: "#industry-education-research",
    children: [
      { title: "Universities & Institutions", description: "Academic institutions", href: "#industry-universities" },
      { title: "Research Organizations", description: "Research organizations", href: "#industry-research-orgs" },
      {
        title: "Training & Skill Development",
        description: "Learning and development",
        href: "#industry-training-skills",
      },
    ],
  },
  {
    title: "Travel & Hospitality Services",
    description: "Operational efficiency and enhanced guest experiences.",
    href: "#industry-travel-hospitality",
    children: [
      { title: "Hotels & Hospitality Groups", description: "Hospitality groups", href: "#industry-hotels" },
      { title: "Travel & Tourism Operators", description: "Travel operators", href: "#industry-travel-operators" },
      { title: "Event & Experience Companies", description: "Events and experiences", href: "#industry-events" },
    ],
  },
];

export const productsItems: CategoryItem[] = [
  {
    title: "Enterprise Business Platforms",
    description: "Core platforms for finance, operations, and business management.",
    href: "#enterprise-business-platforms",
    children: [
      { title: "Integra ERP", description: "Unified enterprise resource planning", href: "#integra-erp" },
      { title: "Integra CRM", description: "Customer engagement & relationship management", href: "#integra-crm" },
      { title: "Cyclo ERP", description: "Manufacturing & spinning mills ERP", href: "#cyclo-erp" },
    ],
  },
  {
    title: "Sustainability & Compliance Platforms",
    description: "Platforms for ESG, traceability and regulatory reporting.",
    href: "#sustainability-compliance-platforms",
    children: [
      { title: "EcoMagnet", description: "Sustainability, ESG & CSRD intelligence", href: "#ecomagnet" },
      {
        title: "Digital Product Passport Platform",
        description: "EU DPP & traceability infrastructure",
        href: "#dpp-platform",
      },
    ],
  },
  {
    title: "Asset, Operations & Automation Platforms",
    description: "Systems for asset management and operational automation.",
    href: "#asset-operations-platforms",
    children: [
      { title: "Astaric", description: "Asset lifecycle & RFID management", href: "#astaric" },
      { title: "DocuMax", description: "Document management & compliance platform", href: "#documax" },
    ],
  },
  {
    title: "AI & Intelligence Platforms",
    description: "AI platforms for insights, decisions and automation.",
    href: "#ai-intelligence-platforms",
    children: [
      { title: "Aullect", description: "AI-powered logistics & operations intelligence", href: "#aullect" },
      { title: "Zeito", description: "AI meeting & engagement intelligence", href: "#zeito" },
    ],
  },
  {
    title: "Digital Experience Platforms",
    description: "Platforms that deliver seamless, user-centric digital experiences.",
    href: "#digital-experience-platforms",
    children: [{ title: "Style Lab", description: "Catalog & digital branding system", href: "#style-lab" }],
  },
];

export const servicesItems: CategoryItem[] = [
  {
    title: "Digital Engineering Services",
    description: "End-to-end digital build and design services.",
    href: "#services-digital-engineering",
    children: [
      { title: "Web Development", description: "Modern web experiences", href: "#services-web-development" },
      { title: "Application Development", description: "Custom app engineering", href: "#services-app-development" },
      { title: "UI UX Design", description: "Human-centered product design", href: "#services-ui-ux-design" },
      { title: "Graphic and Visual Design", description: "Brand and visual systems", href: "#services-graphic-design" },
      { title: "SharePoint Solutions", description: "Enterprise collaboration portals", href: "#services-sharepoint" },
    ],
  },
  {
    title: "Data Analytics and Intelligence",
    description: "Insights, reporting, and BI enablement.",
    href: "#services-data-analytics",
    children: [
      { title: "Power BI and Analytics", description: "Power BI dashboards and analytics", href: "#services-power-bi" },
      { title: "Business Intelligence Solutions", description: "Enterprise BI platforms", href: "#services-bi-solutions" },
      { title: "Data Visualization and Reporting", description: "Reports and visual storytelling", href: "#services-data-viz" },
    ],
  },
  {
    title: "Automation and Process Services",
    description: "Automation-led operational improvements.",
    href: "#services-automation",
    children: [
      { title: "Workflow Automation", description: "Streamlined process flows", href: "#services-workflow-automation" },
      {
        title: "RPA Robotic Process Automation",
        description: "Bot-driven task automation",
        href: "#services-rpa",
      },
      {
        title: "Digital Transformation Services",
        description: "Operating model modernization",
        href: "#services-digital-transformation",
      },
    ],
  },
  {
    title: "Enterprise Platforms and Implementations",
    description: "Enterprise-grade platform rollout.",
    href: "#services-enterprise-platforms",
    children: [
      { title: "Microsoft Dynamics 365", description: "Dynamics 365 implementation", href: "#services-dynamics-365" },
      { title: "Salesforce Implementation", description: "Salesforce delivery and setup", href: "#services-salesforce" },
      { title: "ERP and CRM Enablement", description: "ERP/CRM adoption services", href: "#services-erp-crm" },
    ],
  },
  {
    title: "AI and Advanced Technologies",
    description: "Applied AI and smart systems.",
    href: "#services-ai-advanced",
    children: [
      { title: "Artificial Intelligence Services", description: "AI strategy and delivery", href: "#services-ai" },
      { title: "AI Solutions and Enablement", description: "Production AI enablement", href: "#services-ai-solutions" },
      { title: "Industry 4.0 and Smart Systems", description: "Smart manufacturing systems", href: "#services-industry-4" },
    ],
  },
  {
    title: "Cloud and Infrastructure Services",
    description: "Cloud strategy and migration.",
    href: "#services-cloud",
    children: [
      { title: "Cloud Consulting", description: "Cloud readiness and strategy", href: "#services-cloud-consulting" },
      {
        title: "Cloud Architecture and Migration",
        description: "Architect and migrate workloads",
        href: "#services-cloud-migration",
      },
      {
        title: "Hybrid and Multi-Cloud Enablement",
        description: "Flexible cloud operating models",
        href: "#services-hybrid-multicloud",
      },
    ],
  },
];

const primaryLinks = [
  { label: "Company", href: "/company" },
];

// Shared shape + motion for every top-level nav item. The scale is what makes the
// label grow under the cursor; the colour/shadow half depends on what is behind the bar.
// No chip at rest — the hover glow is a radial gradient on a pseudo-element that
// fades in, so it reads as light spilling behind the label rather than a pill.
const NAV_ITEM_BASE =
  "relative isolate bg-transparent shadow-none text-[17px] font-medium px-4 py-2 h-10 origin-center will-change-transform hover:scale-[1.07] data-[state=open]:scale-[1.07] transition-transform duration-300 ease-out " +
  "before:absolute before:inset-x-0 before:inset-y-[-25%] before:-z-10 before:opacity-0 before:transition-opacity before:duration-300 before:ease-out hover:before:opacity-100 data-[state=open]:before:opacity-100";

// Over the dark hero video: a light chip that glows on hover.
const NAV_ITEM_ON_DARK =
  "!text-white [text-shadow:0_1px_10px_rgba(3,12,28,0.55)] hover:!text-white hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:!text-white " +
  "before:bg-[radial-gradient(58%_58%_at_50%_50%,rgba(255,255,255,0.30)_0%,rgba(255,255,255,0.12)_45%,rgba(255,255,255,0)_78%)]";

// Over light page content, once the hero has scrolled past.
const NAV_ITEM_ON_LIGHT =
  "text-[hsl(var(--foreground))] hover:text-[hsl(var(--foreground))] hover:bg-transparent data-[state=open]:bg-transparent data-[state=open]:text-[hsl(var(--foreground))] " +
  "before:bg-[radial-gradient(58%_58%_at_50%_50%,rgba(13,33,64,0.16)_0%,rgba(13,33,64,0.07)_45%,rgba(13,33,64,0)_78%)]";


type MegaMenuProps = {
  items: CategoryItem[];
  /** Width of the tier-2 column, e.g. "w-[300px]". */
  categoryWidth: string;
  /** Width of the tier-3 flyout, e.g. "w-[460px]". */
  panelWidth: string;
  /** Tier-2 laid out in two columns (Industries has eleven entries). */
  twoColumnCategories?: boolean;
  /** Column count for the tier-3 grid. */
  childColumns?: 1 | 2 | 3;
  /** Tier-3 entries show their description under the title. */
  showChildDescriptions?: boolean;
  /** Tier-2 rows navigate on click instead of acting as hover targets only. */
  categoriesAreLinks?: boolean;
};

/**
 * Tier-2 list with the tier-3 items in a flyout that hangs off whichever row is
 * hovered, so the pointer reaches tier 3 by moving straight across rather than
 * cutting diagonally over its neighbours. Two guards keep a stray pass from
 * swapping the panel out from under the pointer: switching to a different row
 * waits out a short intent delay, and hovering the flyout locks the selection.
 */
function MegaMenu({
  items,
  categoryWidth,
  panelWidth,
  twoColumnCategories = false,
  childColumns = 1,
  showChildDescriptions = true,
  categoriesAreLinks = false,
}: MegaMenuProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorTop, setAnchorTop] = useState(0);
  const [offset, setOffset] = useState(0);

  const listRef = useRef<HTMLDivElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const switchTimer = useRef<number>();
  const pointerInPanel = useRef(false);
  const lastPointerX = useRef<number | null>(null);
  const headingForPanel = useRef(false);

  const active = items[activeIndex];

  // Keep the flyout inside the dropdown: line it up with its row, then pull it
  // back up by however much it would otherwise hang past the bottom of the list.
  useLayoutEffect(() => {
    if (!listRef.current || !panelRef.current) return;
    const listHeight = listRef.current.offsetHeight;
    const panelHeight = panelRef.current.offsetHeight;
    setOffset(Math.max(0, Math.min(anchorTop, listHeight - panelHeight)));
  }, [activeIndex, anchorTop]);

  useEffect(() => () => window.clearTimeout(switchTimer.current), []);

  const openFor = useCallback(
    (index: number, element: HTMLElement, immediate: boolean) => {
      window.clearTimeout(switchTimer.current);
      if (pointerInPanel.current) return;
      const top = listRef.current
        ? element.getBoundingClientRect().top - listRef.current.getBoundingClientRect().top
        : 0;
      const apply = () => {
        setAnchorTop(top);
        setActiveIndex(index);
      };
      // Keyboard focus lands instantly. A pointer waits out a brush-past, and
      // waits considerably longer when it is travelling towards the flyout —
      // that run crosses the second category column on the wider menus.
      if (immediate) apply();
      else switchTimer.current = window.setTimeout(apply, headingForPanel.current ? 260 : 90);
    },
    [],
  );

  const releaseHoverGuards = () => {
    window.clearTimeout(switchTimer.current);
    pointerInPanel.current = false;
    lastPointerX.current = null;
    headingForPanel.current = false;
  };

  // The flyout is always to the right, so rightward travel reads as "on the way
  // to tier 3" rather than "picking a different tier-2 row".
  const trackPointerDirection = (event: React.MouseEvent) => {
    const previous = lastPointerX.current;
    if (previous !== null && Math.abs(event.clientX - previous) > 2) {
      headingForPanel.current = event.clientX > previous;
    }
    lastPointerX.current = event.clientX;
  };

  const rowClass = (index: number) =>
    cn(
      "w-full text-left flex items-center justify-between select-none rounded-md leading-none outline-none transition-all duration-200",
      twoColumnCategories ? "p-2.5" : "p-3",
      activeIndex === index
        ? "bg-accent text-accent-foreground shadow-sm"
        : "hover:bg-accent/50 hover:text-accent-foreground",
    );

  const renderRow = (item: CategoryItem, index: number) => {
    const body = (
      <>
        <div className="flex-1">
          <div className="text-sm font-medium leading-none">{item.title}</div>
          <p className="line-clamp-2 text-xs leading-snug text-muted-foreground mt-1">{item.description}</p>
        </div>
        <ChevronRight
          className={cn(
            "h-4 w-4 shrink-0 ml-2 transition-all duration-200",
            activeIndex === index ? "text-primary translate-x-0.5" : "text-muted-foreground",
          )}
        />
      </>
    );

    return (
      <li key={item.title}>
        {categoriesAreLinks ? (
          <NavigationMenuLink asChild>
            <a
              href={item.href}
              className={rowClass(index)}
              onMouseEnter={(event) => openFor(index, event.currentTarget, false)}
              onFocus={(event) => openFor(index, event.currentTarget, true)}
            >
              {body}
            </a>
          </NavigationMenuLink>
        ) : (
          <button
            type="button"
            className={rowClass(index)}
            onMouseEnter={(event) => openFor(index, event.currentTarget, false)}
            onFocus={(event) => openFor(index, event.currentTarget, true)}
          >
            {body}
          </button>
        )}
      </li>
    );
  };

  const splitAt = twoColumnCategories ? Math.ceil(items.length / 2) : items.length;

  return (
    <div className="flex w-max" onMouseMove={trackPointerDirection} onMouseLeave={releaseHoverGuards}>
      <div ref={listRef} className={cn("shrink-0 border-r border-border p-4 flex gap-3", categoryWidth)}>
        <ul className="flex-1 space-y-1">{items.slice(0, splitAt).map((item, index) => renderRow(item, index))}</ul>
        {twoColumnCategories && (
          <ul className="flex-1 space-y-1">
            {items.slice(splitAt).map((item, index) => renderRow(item, index + splitAt))}
          </ul>
        )}
      </div>

      {/* Tier-3 flyout — collapsed to nothing until a tier-2 row is hovered. */}
      <div
        className={cn("relative shrink-0 overflow-hidden", panelWidth)}
        onMouseEnter={() => {
          pointerInPanel.current = true;
          window.clearTimeout(switchTimer.current);
        }}
        onMouseLeave={() => {
          pointerInPanel.current = false;
        }}
      >
        <div
          ref={panelRef}
          className={cn(panelWidth, "p-4 transition-transform duration-200 ease-out")}
          style={{ transform: `translateY(${offset}px)` }}
        >
          {active && (
            <>
              <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                {active.title}
              </div>
              <ul
                className={cn(
                  "gap-x-2",
                  childColumns === 1 && "space-y-1",
                  childColumns === 2 && "grid grid-cols-2 gap-y-1",
                  childColumns === 3 && "grid grid-cols-3 gap-y-0.5",
                )}
              >
                {active.children?.map((child) => (
                  <li key={child.title}>
                    <NavigationMenuLink asChild>
                      <a
                        href={child.href}
                        className={cn(
                          "block select-none rounded-md leading-none no-underline outline-none transition-colors",
                          showChildDescriptions ? "p-3" : "px-2.5 py-2",
                          "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
                        )}
                      >
                        <div className="text-sm font-medium leading-tight">{child.title}</div>
                        {showChildDescriptions && (
                          <p className="text-xs leading-snug text-muted-foreground mt-1">{child.description}</p>
                        )}
                      </a>
                    </NavigationMenuLink>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [scrollY, setScrollY] = useState(0);
  const [darkHeroDepth, setDarkHeroDepth] = useState(0);
  const isScrolled = scrollY > 20;
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [openMobileSections, setOpenMobileSections] = useState<Record<string, boolean>>({});
  const [openMobileProducts, setOpenMobileProducts] = useState<Record<string, boolean>>({});
  const [openMobileSolutions, setOpenMobileSolutions] = useState<Record<string, boolean>>({});
  const [openMobileServices, setOpenMobileServices] = useState<Record<string, boolean>>({});
  const [openMobileIndustries, setOpenMobileIndustries] = useState<Record<string, boolean>>({});

  // The header has no background of its own, so its type stays white for as long
  // as a dark hero is still behind it. Pages mark that hero with data-dark-hero;
  // a page without one (the light Products hero) gets dark type from the start.
  const isDarkHero = darkHeroDepth > 0 && scrollY < darkHeroDepth - 96;
  const navItemClass = cn(NAV_ITEM_BASE, isDarkHero ? NAV_ITEM_ON_DARK : NAV_ITEM_ON_LIGHT);
  // Transparent while the dark hero is behind the bar; once past it the bar
  // takes a white background so navy links stay readable over page content.
  const showSolidBar = isScrolled && !isDarkHero;

  // Layout effect, not a plain effect: the hero has to be measured before the
  // first paint or the nav renders dark and then fades to white over the hero.
  useLayoutEffect(() => {
    const hero = document.querySelector<HTMLElement>("[data-dark-hero]");
    if (!hero) return;
    const measure = () => setDarkHeroDepth(hero.offsetTop + hero.offsetHeight);
    measure();
    // Hero art and web fonts land after mount, so re-measure rather than trust
    // the first read.
    const observer = new ResizeObserver(measure);
    observer.observe(hero);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setOpenMobileSections({});
    setOpenMobileProducts({});
    setOpenMobileSolutions({});
    setOpenMobileServices({});
    setOpenMobileIndustries({});
  };

  const toggleMobileSection = (key: string) => {
    setOpenMobileSections((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileProduct = (key: string) => {
    setOpenMobileProducts((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileSolution = (key: string) => {
    setOpenMobileSolutions((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileService = (key: string) => {
    setOpenMobileServices((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleMobileIndustry = (key: string) => {
    setOpenMobileIndustries((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <>
      <CommandPalette open={commandPaletteOpen} onOpenChange={setCommandPaletteOpen} />
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "py-2 lg:py-3" : "py-3 lg:py-4",
          showSolidBar
            ? "bg-white border-b border-[hsl(var(--foreground))]/10 shadow-[0_2px_12px_rgba(13,33,64,0.10)]"
            : "bg-transparent",
        )}
      >
        <div className="section-container grid grid-cols-[1fr_auto_1fr] items-center">
          {/* Both marks are the same artwork at the same box, so stacking them and
              crossing the opacity turns the swap into a recolour rather than a cut. */}
          <a href="/" className="relative flex items-center justify-start">
            <img src={logoOnLight} alt="ITG Innovators" className="h-11 lg:h-14 w-auto object-contain" />
            <img
              src={logoOnDark}
              alt=""
              aria-hidden="true"
              className={cn(
                "absolute left-0 top-0 h-11 lg:h-14 w-auto object-contain",
                "drop-shadow-[0_2px_10px_rgba(3,12,28,0.45)] transition-opacity duration-300 ease-out",
                isDarkHero ? "opacity-100" : "opacity-0",
              )}
            />
          </a>

          <NavigationMenu className="hidden lg:flex justify-center">
            <NavigationMenuList className="justify-center">
              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => window.location.href = '/solutions'}
                >
                  Solutions
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    items={solutionsItems}
                    categoryWidth="w-[300px]"
                    panelWidth="w-[460px]"
                    childColumns={2}
                    categoriesAreLinks
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => window.location.href = '/products'}
                >
                  Products
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu items={productsItems} categoryWidth="w-[280px]" panelWidth="w-[420px]" />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => window.location.href = '/services'}
                >
                  Services
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu items={servicesItems} categoryWidth="w-[300px]" panelWidth="w-[440px]" />
                </NavigationMenuContent>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger
                  className={cn(navItemClass, "cursor-pointer")}
                  onClick={() => window.location.href = '/industries'}
                >
                  Industries
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <MegaMenu
                    items={industriesItems}
                    categoryWidth="w-[380px]"
                    panelWidth="w-[520px]"
                    twoColumnCategories
                    childColumns={3}
                    showChildDescriptions={false}
                  />
                </NavigationMenuContent>
              </NavigationMenuItem>

              {primaryLinks.map((link) => (
                <NavigationMenuItem key={link.label}>
                  <NavigationMenuLink href={link.href} className={cn(navItemClass, "inline-flex items-center")}>
                    {link.label}
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>

          <div className="flex items-center justify-end gap-2 lg:gap-3">
            <NavSearch onOpen={() => setCommandPaletteOpen(true)} onDark={isDarkHero} />

            {/* Theme toggle hidden — brand system v2.0 is light-only.
                Kept commented so the dark-mode feature can be re-enabled later.
            <button
              onClick={toggleTheme}
              className={cn("p-2 rounded-lg hover:bg-accent transition-all duration-200 focus-enterprise", isDarkHero ? "text-white/70 hover:text-white" : "text-muted-foreground hover:text-foreground")}
              aria-label="Toggle theme"
            >
              {theme === "light" ? <Moon className="w-4 h-4 lg:w-5 lg:h-5" /> : <Sun className="w-4 h-4 lg:w-5 lg:h-5" />}
            </button>
            */}

            <a href="#contact" className="btn-modern hidden md:inline-flex h-12">
              Contact us
            </a>

            <button
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              className="lg:hidden p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent transition-all duration-200 focus-enterprise"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border">
            <nav className="section-container py-4 flex flex-col gap-1">
              <div className="space-y-2">
                <Collapsible
                  open={openMobileSections.solutions ?? false}
                  onOpenChange={() => toggleMobileSection("solutions")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Solutions
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {/* View All Solutions Link */}
                      <a
                        href="/solutions"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        View All Solutions
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {solutionsItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileSolutions[category.title] ?? false}
                          onOpenChange={() => toggleMobileSolution(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1.5 px-2 rounded-lg hover:bg-accent"
                                >
                                  {child.title}
                                </a>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSections.products ?? false}
                  onOpenChange={() => toggleMobileSection("products")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Products
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {/* View All Products Link */}
                      <a
                        href="/products"
                        onClick={closeMobileMenu}
                        className="flex items-center gap-2 text-sm font-semibold text-primary px-3 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 transition-colors"
                      >
                        View All Products
                        <ArrowRight className="w-4 h-4" />
                      </a>
                      {productsItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileProducts[category.title] ?? false}
                          onOpenChange={() => toggleMobileProduct(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1.5 px-2 rounded-lg hover:bg-accent"
                                >
                                  {child.title}
                                </a>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSections.services ?? false}
                  onOpenChange={() => toggleMobileSection("services")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Services
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {servicesItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileServices[category.title] ?? false}
                          onOpenChange={() => toggleMobileService(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1.5 px-2 rounded-lg hover:bg-accent"
                                >
                                  {child.title}
                                </a>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible
                  open={openMobileSections.industries ?? false}
                  onOpenChange={() => toggleMobileSection("industries")}
                >
                  <CollapsibleTrigger className="w-full flex items-center justify-between text-base font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                    Industries
                    <ChevronDown className="h-4 w-4 text-muted-foreground" />
                  </CollapsibleTrigger>
                  <CollapsibleContent className="pl-2">
                    <div className="mt-2 ml-2 flex flex-col gap-2">
                      {industriesItems.map((category) => (
                        <Collapsible
                          key={category.title}
                          open={openMobileIndustries[category.title] ?? false}
                          onOpenChange={() => toggleMobileIndustry(category.title)}
                        >
                          <CollapsibleTrigger className="w-full flex items-center justify-between text-sm font-medium text-foreground px-2 py-2 rounded-lg hover:bg-accent">
                            {category.title}
                            <ChevronDown className="h-4 w-4 text-muted-foreground" />
                          </CollapsibleTrigger>
                          <CollapsibleContent className="pl-2">
                            <div className="mt-1 ml-4 flex flex-col gap-1">
                              {category.children?.map((child) => (
                                <a
                                  key={child.title}
                                  href={child.href}
                                  onClick={closeMobileMenu}
                                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 py-1.5 px-2 rounded-lg hover:bg-accent"
                                >
                                  {child.title}
                                </a>
                              ))}
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ))}
                    </div>
                  </CollapsibleContent>
                </Collapsible>
              </div>

              {primaryLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={closeMobileMenu}
                  className="text-base font-medium text-foreground hover:text-primary transition-colors duration-200 py-2.5 px-2 rounded-lg hover:bg-accent"
                >
                  {link.label}
                </a>
              ))}

              <Button variant="default" className="mt-3 w-full" onClick={closeMobileMenu}>
                Contact us
              </Button>
            </nav>
          </div>
        )}
      </header >
    </>
  );
}
