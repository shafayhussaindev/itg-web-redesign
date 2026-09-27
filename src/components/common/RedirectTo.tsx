import { Navigate, useLocation } from "react-router-dom";

// Sends the visitor to `to`, keeping any ?query and #section from the address
// they came in on (a plain <Navigate> would drop them). Used for pages that
// moved to a new address.
export function RedirectTo({ to }: { to: string }) {
  const { search, hash } = useLocation();
  return <Navigate to={`${to}${search}${hash}`} replace />;
}
