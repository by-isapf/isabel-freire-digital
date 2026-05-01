import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { GraduationCap, FlaskConical } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/formacao")({
  head: () => ({
    meta: [
      { title: "Formação | Isabel Freire" },
      { name: "description", content: "Formação acadêmica de Isabel Freire — Tecnologia da Informação na UFERSA e iniciação científica." },
      { property: "og:title", content: "Formação acadêmica · Isabel Freire" },
      { property: "og:description", content: "Tecnologia da Informação · UFERSA · Iniciação Científica." },
    ],
  }),
  component: EducationPage,
});

const items = [
  {
    icon: GraduationCap,
    title: "Tecnologia da Informação",
    org: "UFERSA — Universidade Federal Rural do Semi-Árido",
    desc: "Graduação com foco em desenvolvimento de software, fundamentos de computação e pesquisa aplicada.",
    period: "Em andamento",
  },
  {
    icon: FlaskConical,
    title: "Iniciação Científica",
    org: "Pesquisa acadêmica · UFERSA",
    desc: "Atuação em projetos de pesquisa, com ênfase em desenvolvimento e análise de soluções computacionais.",
    period: "Atual",
  },
];

function EducationPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Formação"
        title="Trajetória acadêmica"
        description="Educação formal e atuação em pesquisa científica."
      />

      <div className="space-y-4 max-w-3xl">
        {items.map((item, i) => (
          <motion.article
            key={item.title}
            initial={{ opacity: 0, x: -16 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="flex gap-4 rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40"
          >
            <div className="h-11 w-11 shrink-0 rounded-lg bg-gradient-primary flex items-center justify-center">
              <item.icon className="h-5 w-5 text-primary-foreground" />
            </div>
            <div className="flex-1">
              <div className="flex items-baseline justify-between gap-3 flex-wrap">
                <h2 className="text-lg font-semibold">{item.title}</h2>
                <span className="text-xs font-mono text-primary">{item.period}</span>
              </div>
              <p className="text-sm text-muted-foreground mt-1">{item.org}</p>
              <p className="text-sm mt-3 leading-relaxed">{item.desc}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </PageShell>
  );
}
