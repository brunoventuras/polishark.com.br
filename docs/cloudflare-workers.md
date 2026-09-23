# Publicação contínua no Cloudflare Workers

O site é publicado como Static Assets no Cloudflare Workers. A integração Git executa o build e o deploy automaticamente a cada push na branch `main`.

## Configuração na tela “Create an app”

- Project name: `polishark-com-br`
- Build command: `npm run build`
- Deploy command: `npx wrangler deploy`
- Preview command: `npx wrangler preview`
- Enable Preview builds: ligado
- Protect with Cloudflare Access: desligado

Não é necessário alterar **Advanced settings**. Clique em **Deploy** depois que o commit com `wrangler.jsonc` estiver disponível no GitHub.

O nome do projeto no painel deve ser idêntico ao campo `name` do arquivo `wrangler.jsonc`.

## Como funciona

1. A Cloudflare instala o Wrangler definido no `package.json`.
2. `npm run build` copia somente os arquivos públicos para `dist/`.
3. `wrangler deploy` publica `dist/` como Static Assets.
4. Pushes futuros na `main` repetem o processo automaticamente.
5. Outras branches usam o Preview command e recebem uma URL temporária.

## Domínio personalizado

Depois do primeiro deploy:

1. Abra o Worker `polishark-com-br`.
2. Acesse **Settings > Domains & Routes**.
3. Adicione o domínio personalizado `polishark.com.br`.
4. Adicione `www.polishark.com.br` ou configure um redirect para o domínio sem `www`.

O domínio precisa estar usando os nameservers da Cloudflare para ser conectado diretamente ao Worker.

## Fluxo diário

```bash
git add .
git commit -m "descrição da alteração"
git push origin main
```

O GitHub valida os arquivos e o Workers Builds publica o site automaticamente.
