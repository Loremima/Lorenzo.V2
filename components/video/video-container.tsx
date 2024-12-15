"use client";

import { VideoBackground } from "./video-background";

export function VideoContainer() {
  return (
    <div className="relative w-full h-full overflow-hidden">
      <VideoBackground />
    </div>
  );
}