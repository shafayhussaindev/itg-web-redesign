import { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "@/routes/AppRoutes";

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div role="status" className="min-h-screen grid place-items-center">Loading…</div>}>
        <AppRoutes />
      </Suspense>
    </BrowserRouter>
  );
}
