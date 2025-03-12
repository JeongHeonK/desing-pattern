import { ChromeGrimpanFactory } from "./grimpanFactory";
import { ChromeGrimpanMenu } from "./grimpanMenu";

function main() {
  const grimpan = ChromeGrimpanFactory.createGrimpan();
  const grimpanMenu = ChromeGrimpanFactory.createGrimpanMenu(grimpan);
  const grimpanHistory = ChromeGrimpanFactory.createGrimpanHistory(grimpan);
  grimpan.initialize();
  grimpanMenu.initialize();
  grimpanHistory.initialize();
}

main();
