import { useEffect, type ReactNode } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { useLenis } from "@/hooks/useLenis";
// @ts-expect-error - plain JS hook, no types alongside it
import { useTiltSurfaces } from "./hooks/useTiltSurfaces.js";
import "./styles/index.css";

type Tier1RouteProps = {
  title: string;
  children: ReactNode;
};

export default function Tier1Route({ title, children }: Tier1RouteProps) {
  // Same inertial scrolling the home page runs, so moving between tiers does
  // not change how the site feels under the wheel.
  useLenis();

  // One listener drives the cursor-tilt on every card across the tier-1
  // pages, rather than a hook per card.
  useTiltSurfaces();

  useEffect(() => {
    document.title = `${title} — ITG Technologies`;
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, [title]);

  // Tier-1 pages share the main site header and footer. Both sit outside
  // .tier1-site so the tier-1 stylesheet's bare `nav` and `footer` element
  // rules cannot reach into them.
  return (
    <>
      <Header />
      <div className="tier1-site">{children}</div>
      <Footer />
    </>
  );
}
