"use client";

Dashboard

import drawerUsage from "@/components/drawerUsage";
import { Dashboard } from "@/components/fullPage";
import { TooltipProvider } from "@/components/ui/tooltip";

export default function Home() {
  return(<>
    <TooltipProvider>
      <Dashboard />
    </TooltipProvider>
  </>)
}
