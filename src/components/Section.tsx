import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageShell({ children }: { children: ReactNode }) {
  return <main className="max-w-6xl mx-auto px-6 py-16 md:py-24">{children}</main>;
}

export function SectionHeader({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="mb-12"
    >
      <p className="text-xs font-mono uppercase tracking-widest text-primary mb-3">{eyebrow}</p>
      <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{title}</h1>
      {description && <p className="mt-4 text-lg text-muted-foreground max-w-2xl">{description}</p>}
    </motion.div>
  );
}
