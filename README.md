# Poli Shark

Site institucional estático da Poli Shark, preparado para publicação como Static Assets no Cloudflare Workers.

## Páginas

- `/` — site institucional
- `/links/` — página de links para bio das redes sociais

## Personalização rápida

Os dados de WhatsApp, telefone, Instagram e endereço ficam centralizados em `site-config.js`.

Antes de publicar, confirme os dados recuperados do site antigo:

- WhatsApp: `(32) 98421-8586`
- Endereço: `Av. Presidente Itamar Franco, 2300 — São Mateus, Juiz de Fora/MG`
- Instagram: o endereço usado é `instagram.com/polishark/` e precisa ser validado
- Localização: `https://maps.app.goo.gl/firqMXVTnroWTUoy7?g_st=iwb`
- O texto “Desde 2013” foi inferido a partir do histórico do site antigo e também precisa ser validado

Os nomes no carrossel de parceiros em `links/index.html` são placeholders e devem ser substituídos pelos logos oficiais.

## Desenvolvimento local

Como não há build nem dependências, qualquer servidor HTTP local funciona:

```bash
python3 -m http.server 8080
```

Abra `http://localhost:8080`.

## Cloudflare Workers

Na tela **Create an app**, conecte este repositório e use:

- Project name: `polishark-com-br`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`

Depois do primeiro deploy, conecte `polishark.com.br` e `www.polishark.com.br` em **Domains & Routes**.

O passo a passo da integração Git e do fluxo automático está em [`docs/cloudflare-workers.md`](docs/cloudflare-workers.md).

## Imagem gerada

O hero usa `assets/polishark-hero.webp`, otimizado para a web a partir de uma imagem gerada com IA para este projeto, sem marca ou modelo de veículo identificável.

Os ícones de interface em `assets/icons.svg` são derivados do projeto open source [Lucide Icons](https://lucide.dev), distribuído sob licença ISC.
