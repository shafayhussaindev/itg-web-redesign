import Tier3Detail from "@/components/common/tier3/Tier3Detail";
import type { Tier3Page } from "@/types/content";

export default function ServiceSubDetail({ page }: { page: Tier3Page }) {
  return <Tier3Detail page={page} />;
}
