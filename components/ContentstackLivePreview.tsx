import { LivePreviewInitializer } from "./LivePreviewInitializer";

export function ContentstackLivePreview() {
  const livePreviewEnabled =
    process.env.NEXT_PUBLIC_CONTENTSTACK_PREVIEW === "true";
  if (!livePreviewEnabled) {
    return null;
  }
  return <LivePreviewInitializer />;
}
