import { useEffect,} from "react";
import "@/styles/landing-pages.css";


export default function LandingPageLayout({ title, children }) {

  useEffect(() => {
    document.title = `${title} — ITG Technologies`;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [title]);

  // Tier-1 pages share the main site header and footer. Both sit outside
  // .tier1-site so the tier-1 stylesheet's bare `nav` and `footer` element
  // rules cannot reach into them.
  return (
    <>

      <div className="tier1-site">{children}</div>

    </>
  );
}
