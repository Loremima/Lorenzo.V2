"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { MenuButton } from "./navigation/menu-button";
import { ThemeToggle } from "./navigation/theme-toggle";
import { AudioToggle } from "./audio/audio-toggle";
import { MenuOverlay } from "./navigation/menu-overlay";
import { useMenuContext } from "./navigation/menu-context";

export function Navigation() {
  const [mounted, setMounted] = useState(false);
  const { isOpen } = useMenuContext();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-50">
        <div className="container mx-auto px-8 py-6">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="text-xl font-medium tracking-tight text-foreground"
              onClick={() => window.location.reload()}
            >
              Lorenzo<span className="text-red-500">.</span>
            </Link>

            <div className="flex items-center gap-6 mr-4">
              {!isOpen && (
                <>
                  <AudioToggle />
                  <ThemeToggle />
                </>
              )}
              <MenuButton />
            </div>
          </div>
        </div>
      </nav>
      <MenuOverlay />
    </>
  );
}