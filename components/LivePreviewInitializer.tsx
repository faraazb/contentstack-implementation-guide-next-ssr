"use client";

import { initLivePreview } from "@/lib/contentstack";
import React, { useEffect } from "react";

export function LivePreviewInitializer({
  children,
}: {
  children?: React.ReactNode;
}) {
  useEffect(() => {
    initLivePreview();
  }, []);

  return <>{children}</>;
}
