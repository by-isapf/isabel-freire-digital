import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ExternalLink, Star, GitFork, Code2 } from "lucide-react";
import { PageShell, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/projetos")({
  head: () => ({
    meta: [
      { title: "Projetos | Isabel Freire" },
      { name: "description", content: "Projetos públicos no GitHub de Isabel Freire — desenvolvimento, pesquisa e experimentos acadêmicos." },
      { property: "og:title", content: "Projetos · Isabel Freire" },
      { property: "og:description", content: "Repositórios e projetos acadêmicos no GitHub." },
    ],
  }),
  component: ProjectsPage,
});

type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  fork: boolean;
  archived: boolean;
  updated_at: string;
};

function ProjectsPage() {
  const [repos, setRepos] = useState<Repo[] | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch("https://api.github.com/users/by-isapf/repos?per_page=100&sort=updated")
      .then((r) => {
        if (!r.ok) throw new Error("Falha ao carregar repositórios");
        return r.json();
      })
      .then((data: Repo[]) => {
        const filtered = data
          .filter((r) => !r.fork && !r.archived)
          .sort((a, b) => b.stargazers_count - a.stargazers_count || +new Date(b.updated_at) - +new Date(a.updated_at));
        setRepos(filtered);
      })
      .catch((e) => setError(e.message));
  }, []);

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Projetos"
        title="Repositórios e experimentos"
        description="Projetos públicos sincronizados diretamente do GitHub."
      />

      {error && (
        <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
          {error}
        </div>
      )}

      {!repos && !error && (
        <div className="grid md:grid-cols-2 gap-4">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="h-44 rounded-xl border border-border bg-card animate-pulse" />
          ))}
        </div>
      )}

      {repos && repos.length === 0 && (
        <p className="text-muted-foreground">Nenhum repositório público encontrado.</p>
      )}

      {repos && repos.length > 0 && (
        <div className="grid md:grid-cols-2 gap-4">
          {repos.map((repo, i) => {
            const featured = i < 2;
            return (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: Math.min(i * 0.05, 0.3) }}
                className={`group relative rounded-xl border bg-card p-6 shadow-card transition-smooth hover:-translate-y-1 hover:border-primary/50 ${
                  featured ? "border-primary/30" : "border-border"
                }`}
              >
                {featured && (
                  <span className="absolute top-4 right-4 text-[10px] font-mono uppercase tracking-widest text-primary">
                    Destaque
                  </span>
                )}
                <div className="flex items-start gap-3">
                  <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center shrink-0">
                    <Code2 className="h-5 w-5 text-primary-foreground" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h2 className="font-semibold truncate group-hover:text-primary transition-smooth">
                      {repo.name}
                    </h2>
                    <p className="mt-1 text-sm text-muted-foreground line-clamp-2 min-h-[2.5rem]">
                      {repo.description || "Sem descrição."}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground font-mono">
                      {repo.language && (
                        <span className="inline-flex items-center gap-1">
                          <span className="h-2 w-2 rounded-full bg-primary" />
                          {repo.language}
                        </span>
                      )}
                      <span className="inline-flex items-center gap-1">
                        <Star className="h-3 w-3" /> {repo.stargazers_count}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <GitFork className="h-3 w-3" /> {repo.forks_count}
                      </span>
                      <ExternalLink className="h-3 w-3 ml-auto opacity-0 group-hover:opacity-100 transition-smooth" />
                    </div>
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>
      )}
    </PageShell>
  );
}
