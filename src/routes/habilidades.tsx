import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/habilidades")({
  head: () => ({
    meta: [
      { title: "Habilidades | Isabel Freire" },
      { name: "description", content: "Habilidades técnicas de Isabel Freire — front-end, back-end, pesquisa e ferramentas." },
      { property: "og:title", content: "Habilidades · Isabel Freire" },
      { property: "og:description", content: "React, Java, Python, pesquisa científica e mais." },
    ],
  }),
  component: SkillsPage,
});

const groups = [
  {
    title: "Front-end",
    skills: ["React", "HTML", "CSS", "JavaScript", "Tailwind CSS"],
  },
  {
    title: "Back-end e lógica",
    skills: ["Java", "C", "Python"],
  },
  {
    title: "Pesquisa e tecnologia",
    skills: ["Metodologia científica", "Análise de dados", "Desenvolvimento acadêmico"],
  },
  {
    title: "Ferramentas",
    skills: ["Git", "GitHub", "VS Code", "AWS Amplify"],
  },
];

function SkillsPage() {
  return (
    <PageShell>
      <SectionHeader
        eyebrow="Habilidades"
        title="Stack e competências"
        description="Tecnologias e áreas de atuação que combino no dia a dia."
      />

      <div className="grid md:grid-cols-2 gap-4">
        {groups.map((g, i) => (
          <motion.section
            key={g.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="rounded-xl border border-border bg-card p-6 shadow-card"
          >
            <h2 className="text-sm font-mono uppercase tracking-widest text-primary mb-4">
              {g.title}
            </h2>
            <ul className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <li
                  key={s}
                  className="px-3 py-1.5 rounded-md text-sm bg-surface border border-border transition-smooth hover:border-primary/50 hover:text-primary"
                >
                  {s}
                </li>
              ))}
            </ul>
          </motion.section>
        ))}
      </div>
    </PageShell>
  );
}
