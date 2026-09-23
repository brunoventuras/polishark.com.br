# Poli Shark

Site institucional estático da Poli Shark, preparado para publicação no Cloudflare Pages.

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

## Cloudflare Pages

No painel do Cloudflare Pages, conecte este repositório e use:

- Framework preset: `None`
- Build command: deixe vazio
- Build output directory: `/`

Depois, em **Custom domains**, conecte `polishark.com.br` e `www.polishark.com.br`.

O passo a passo da integração Git e do fluxo automático está em [`docs/cloudflare-pages.md`](docs/cloudflare-pages.md).

## Imagem gerada

O hero usa `assets/polishark-hero.webp`, otimizado para a web a partir de uma imagem gerada com IA para este projeto, sem marca ou modelo de veículo identificável.

Os ícones de interface em `assets/icons.svg` são derivados do projeto open source [Lucide Icons](https://lucide.dev), distribuído sob licença ISC.
