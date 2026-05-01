# Isabel Freire — Portfólio

Portfólio pessoal moderno e responsivo, construído com **React + TanStack Start + Vite + Tailwind CSS**.

## ✨ Funcionalidades

- Layout responsivo (mobile-first), minimalista e profissional
- Dark mode / Light mode com persistência
- Animações suaves com Framer Motion
- Integração automática com a **GitHub API** (`by-isapf`) para listar projetos
- SEO otimizado: meta tags, Open Graph, Twitter Cards, `sitemap.xml`, `robots.txt`, `manifest.json`
- HTML semântico (`header`, `main`, `section`, `article`, `footer`)
- Rotas separadas para cada seção (melhor indexação Google)

## 🚀 Instalação

```bash
git clone https://github.com/by-isapf/portfolio.git
cd portfolio
npm install
```

## 💻 Execução local

```bash
npm run dev
```

Abra `http://localhost:5173`.

## 🏗️ Build de produção

```bash
npm run build
```

## 📦 Deploy no GitHub

```bash
git add .
git commit -m "feat: portfólio inicial"
git branch -M main
git remote add origin https://github.com/by-isapf/portfolio.git
git push -u origin main
```

## ☁️ Deploy na AWS Amplify

1. Acesse [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
2. **New app → Host web app → GitHub** e autorize
3. Selecione o repositório e a branch `main`
4. Amplify detecta automaticamente o build. Caso necessário, use:

```yaml
version: 1
frontend:
  phases:
    preBuild:
      commands:
        - npm ci
    build:
      commands:
        - npm run build
  artifacts:
    baseDirectory: dist
    files:
      - '**/*'
  cache:
    paths:
      - node_modules/**/*
```

5. **Save and deploy** — em ~3 minutos seu site estará no ar.
6. (Opcional) **Domain management → Add domain** para conectar domínio próprio.

## 🔎 Configuração no Google Search Console

1. Acesse [search.google.com/search-console](https://search.google.com/search-console)
2. **Adicionar propriedade → Prefixo de URL** → cole a URL do Amplify
3. Verifique a propriedade (DNS ou meta tag)
4. Em **Sitemaps**, adicione: `sitemap.xml`
5. Solicite indexação das páginas principais em **Inspeção de URL**

## 🛠️ Stack

- React 19 · TanStack Start · Vite 7
- Tailwind CSS v4
- Framer Motion · Lucide Icons · Sonner

## 📄 Licença

MIT © Isabel Freire
