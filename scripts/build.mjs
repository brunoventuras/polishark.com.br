import { copyFileSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";

const root = process.cwd();
const output = join(root, "dist");
const files = [
  "index.html",
  "links/index.html",
  "styles.css",
  "enhancements.css",
  "site-config.js",
  "app.js",
  "_headers",
  "assets/favicon.svg",
  "assets/icons.svg",
  "assets/polishark-hero.webp",
  "assets/polishark-logo-transp.webp",
  "assets/trabalho-detalhamento.webp",
  "assets/trabalho-polimento.webp",
  "assets/trabalho-acabamento.webp",
  "assets/curso-turma.webp",
  "assets/bruno-polishark.webp",
  "assets/bruno-links.webp",
  "assets/carro/hero-background.webp",
  "assets/carro/hero-car.webp",
  "assets/carro/hero-smoke.webp",
  "assets/carro/hero-red-light.webp"
];

rmSync(output, { recursive: true, force: true });

for (const file of files) {
  const destination = join(output, file);
  mkdirSync(dirname(destination), { recursive: true });
  copyFileSync(join(root, file), destination);
}

console.log(`Built ${files.length} static files in dist/`);
