"use client";

import { motion, AnimatePresence } from "framer-motion";
import { VideoBackground } from "../background/video-background";

interface MenuOverlayProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export function MenuOverlay({ isOpen, onClose, children }: MenuOverlayProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-40"
        >
          {/* Background with video */}
          <div className="absolute inset-0">
            <VideoBackground />
            <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          </div>

          {/* Menu content */}
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
            className="absolute right-0 top-0 bottom-0 w-full max-w-md bg-background/50 backdrop-blur-md border-l border-border/50 shadow-xl"
          >
            <div className="h-full flex flex-col items-center justify-center p-8 space-y-8">
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}