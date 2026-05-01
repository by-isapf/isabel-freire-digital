import * as React from 'react' // Importante para o JSX
import { 
  createRootRoute, 
  Outlet, 
  Link, 
  HeadContent, 
  Scripts 
} from '@tanstack/react-router' // Adicionados os componentes que faltavam

import { ThemeProvider } from "@/lib/theme";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
// import { Toaster } from "@/components/ui/sonner"; // Se for usar, descomente aqui e adicione no RootComponent

import appCss from "../styles.css?url";

const SITE_URL = "https://isabelfreire.dev";
const SITE_TITLE = "Isabel Freire | Portfólio | Tecnologia da Informação e Pesquisa";
const SITE_DESC = "Portfólio de Isabel Freire, estudante de Tecnologia da Informação pela UFERSA e pesquisadora de iniciação científica.";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold">404</h1>
        <h2 className="mt-4 text-xl font-semibold">Página não encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          A página que você procura não existe ou foi movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground"
          >
            Voltar ao início
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: SITE_TITLE },
      { name: "description", content: SITE_DESC },
      { name: "author", content: "Isabel Freire" },
      { name: "theme-color", content: "#6b3a52" },
      { property: "og:title", content: SITE_TITLE },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap",
      },
    ],
  }),
  // Nota: O TanStack Router Start usa 'component' para o layout principal
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <RootShell>
      <ThemeProvider>
        <div className="min-h-screen flex flex-col bg-background">
          <Header />
          <main className="flex-1">
            <Outlet /> {/* Onde as páginas filhas serão renderizadas */}
          </main>
          <Footer />
        </div>
      </ThemeProvider>
    </RootShell>
  );
}

// O Shell define a estrutura básica do HTML
function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}