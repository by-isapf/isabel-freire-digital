export function Footer() {
  return (
    <footer className="border-t border-border/60 mt-24">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Isabel Freire. Todos os direitos reservados.</p>
        <p className="font-mono text-xs">Construído com React + Tailwind CSS</p>
      </div>
    </footer>
  );
}
