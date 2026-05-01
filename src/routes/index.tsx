import { createFileRoute, Link } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { ArrowRight, Github, Mail, Sparkles } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Isabel Freire | Portfólio | Tecnologia da Informação e Pesquisa" },
      {
        name: "description",
        content:
          "Pesquisadora e desenvolvedora — estudante de Tecnologia da Informação pela UFERSA com atuação em iniciação científica.",
      },
      { property: "og:title", content: "Isabel Freire | Portfólio" },
      {
        property: "og:description",
        content: "Transformando conhecimento em soluções tecnológicas.",
      },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <main>
      {/* HERO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-hero pointer-events-none" aria-hidden />
        <div className="max-w-6xl mx-auto px-6 pt-20 pb-24 md:pt-32 md:pb-36 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="max-w-3xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-3 py-1 text-xs font-mono text-muted-foreground mb-6">
              <Sparkles className="h-3 w-3 text-primary" />
              Disponível para projetos e pesquisa
            </div>

            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
              Isabel <span className="text-gradient">Freire</span>
            </h1>

            <p className="mt-6 text-lg md:text-xl text-muted-foreground leading-relaxed">
              Pesquisadora · Tecnologia da Informação · Desenvolvimento de Software
            </p>

            <p className="mt-4 text-2xl md:text-3xl font-display font-medium tracking-tight max-w-2xl">
              "Transformando conhecimento em soluções tecnológicas."
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="https://github.com/by-isapf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground shadow-elegant transition-smooth hover:opacity-90"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <Link
                to="/contato"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-surface px-5 py-3 text-sm font-medium transition-smooth hover:bg-accent"
              >
                <Mail className="h-4 w-4" />
                Contato
              </Link>
              <Link
                to="/projetos"
                className="inline-flex items-center gap-2 rounded-md px-5 py-3 text-sm font-medium text-muted-foreground transition-smooth hover:text-primary"
              >
                Ver projetos <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HIGHLIGHTS */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            { eyebrow: "Formação", title: "TI · UFERSA", desc: "Tecnologia da Informação na Universidade Federal Rural do Semi-Árido." },
            { eyebrow: "Pesquisa", title: "Iniciação Científica", desc: "Atuação em projetos de pesquisa acadêmica em computação." },
            { eyebrow: "Foco", title: "Software & Dados", desc: "Desenvolvimento, análise e investigação de soluções computacionais." },
          ].map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-card p-6 shadow-card transition-smooth hover:border-primary/40 hover:-translate-y-1"
            >
              <p className="text-xs font-mono uppercase tracking-widest text-primary mb-2">{item.eyebrow}</p>
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}
