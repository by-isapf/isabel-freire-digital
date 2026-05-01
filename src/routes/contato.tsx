import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { useState } from "react";
import { Copy, Github, Mail, Linkedin, Check } from "lucide-react";
import { toast } from "sonner";
import { PageShell, SectionHeader } from "@/components/Section";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato | Isabel Freire" },
      { name: "description", content: "Entre em contato com Isabel Freire — email, GitHub e LinkedIn." },
      { property: "og:title", content: "Contato · Isabel Freire" },
      { property: "og:description", content: "Vamos conversar sobre projetos, pesquisa ou colaboração." },
    ],
  }),
  component: ContactPage,
});

const EMAIL = "isabel.freire114@gmail.com";
const GITHUB = "https://github.com/by-isapf";

function ContactPage() {
  const [copied, setCopied] = useState(false);
  const [linkedin, setLinkedin] = useState("");

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      toast.success("Email copiado!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Não foi possível copiar.");
    }
  };

  return (
    <PageShell>
      <SectionHeader
        eyebrow="Contato"
        title="Vamos conversar"
        description="Aberto a colaborações em pesquisa, projetos acadêmicos e desenvolvimento de software."
      />

      <div className="grid md:grid-cols-2 gap-4 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Mail className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">Email</p>
              <p className="font-medium break-all">{EMAIL}</p>
            </div>
          </div>
          <div className="flex gap-2">
            <a
              href={`mailto:${EMAIL}`}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
            >
              <Mail className="h-4 w-4" /> Enviar email
            </a>
            <button
              onClick={copyEmail}
              className="inline-flex items-center justify-center gap-2 rounded-md border border-border bg-surface px-4 py-2 text-sm font-medium transition-smooth hover:bg-accent"
            >
              {copied ? <Check className="h-4 w-4 text-primary" /> : <Copy className="h-4 w-4" />}
              {copied ? "Copiado" : "Copiar"}
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Github className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">GitHub</p>
              <p className="font-medium">@by-isapf</p>
            </div>
          </div>
          <a
            href={GITHUB}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-smooth hover:opacity-90"
          >
            <Github className="h-4 w-4" /> Abrir GitHub
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:col-span-2 rounded-xl border border-border bg-card p-6 shadow-card"
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <Linkedin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <p className="text-xs font-mono uppercase tracking-widest text-muted-foreground">LinkedIn</p>
              <p className="font-medium">Adicione seu perfil</p>
            </div>
          </div>
          <div className="flex gap-2">
            <input
              type="url"
              value={linkedin}
              onChange={(e) => setLinkedin(e.target.value)}
              placeholder="https://linkedin.com/in/seu-usuario"
              className="flex-1 rounded-md border border-border bg-background px-3 py-2 text-sm outline-none transition-smooth focus:border-primary focus:ring-2 focus:ring-primary/20"
            />
            <a
              href={linkedin || "#"}
              onClick={(e) => !linkedin && e.preventDefault()}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-smooth ${
                linkedin
                  ? "bg-primary text-primary-foreground hover:opacity-90"
                  : "bg-muted text-muted-foreground cursor-not-allowed"
              }`}
            >
              Abrir
            </a>
          </div>
        </motion.div>
      </div>
    </PageShell>
  );
}
