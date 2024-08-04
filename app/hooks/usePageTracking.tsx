"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";

export const usePageTracking = () => {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (typeof window.gtag === "function") {
        window.gtag("config", "G-1TQQYE8GXK", {
          page_path: url,
        });
      }
    };

    // Check if gtag is available
    if (typeof window.gtag === "function") {
      handleRouteChange(pathname + searchParams.toString());
    } else {
      // If gtag is not available, wait for it to be defined
      const waitForGtag = setInterval(() => {
        if (typeof window.gtag === "function") {
          handleRouteChange(pathname + searchParams.toString());
          clearInterval(waitForGtag);
        }
      }, 100);

      // Clear interval after 5 seconds if gtag is still not available
      setTimeout(() => clearInterval(waitForGtag), 5000);
    }

    // No need for event listener in this case as Next.js doesn't use history API for navigation
  }, [pathname, searchParams]);
};
