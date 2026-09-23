# Publicação contínua no Cloudflare Pages

Este projeto não precisa de build. A integração Git nativa do Cloudflare Pages é o fluxo recomendado: cada push na branch `main` publica a produção, e pull requests podem receber URLs de preview.

## Conexão inicial

1. No painel da Cloudflare, acesse **Workers & Pages**.
2. Selecione **Create application > Pages > Connect to Git**.
3. Autorize o GitHub e escolha `brunoventuras/polishark.com.br`.
4. Use a branch de produção `main`.
5. Configure o projeto:
   - Framework preset: `None`
   - Build command: vazio
   - Build output directory: `/`
6. Finalize a primeira publicação.

## Domínios

Em **Custom domains**, adicione:

- `polishark.com.br`
- `www.polishark.com.br`

Escolha um deles como canônico e configure o outro para redirecionar. O HTML já usa `https://polishark.com.br/` como URL canônica.

## Fluxo diário

Depois da conexão inicial:

```bash
git add .
git commit -m "descrição da alteração"
git push origin main
```

O workflow do GitHub valida sintaxe e rotas; a integração do Cloudflare Pages publica automaticamente após o push.

## Alternativa com Wrangler

Um workflow de deploy via Wrangler exigiria os secrets `CLOUDFLARE_ACCOUNT_ID` e `CLOUDFLARE_API_TOKEN`. Para este site, a integração Git nativa evita esses secrets e oferece previews de branches e pull requests.
