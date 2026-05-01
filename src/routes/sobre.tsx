import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { PageShell, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "Sobre | Isabel Freire" },
      {
        name: "description",
        content:
          "Conheça Isabel Freire — estudante de TI na UFERSA, pesquisadora de iniciação científica e entusiasta de desenvolvimento de software.",
      },
      { property: "og:title", content: "Sobre Isabel Freire" },
      { property: "og:description", content: "Trajetória acadêmica, pesquisa e desenvolvimento de software." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <PageShell>
      <SectionHeader eyebrow="Sobre" title="Olá, eu sou a Isabel." />
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="prose prose-lg max-w-3xl text-foreground/90 leading-relaxed space-y-6"
      >
        <p>
          Isabel Freire é estudante de <strong>Tecnologia da Informação</strong> pela{" "}
          <strong>UFERSA</strong> e atua em <strong>pesquisa de Iniciação Científica</strong>.
          Sua trajetória acadêmica é marcada pelo interesse em desenvolvimento de software,
          tecnologia e investigação científica, buscando constantemente aprofundar conhecimentos
          e aplicar soluções inovadoras.
        </p>
        <p>
          Possui experiência com projetos acadêmicos e pesquisa, com foco em desenvolvimento e
          análise de soluções computacionais. Seu interesse está voltado à evolução na área
          tecnológica, unindo teoria e prática para resolver problemas reais e contribuir com
          a área de computação.
        </p>
      </motion.div>
    </PageShell>
  );
}
