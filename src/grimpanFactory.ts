import Grimpan from "./abstractGrimpan";
import ChromeGrimpan from "./chromeGrimpan";
import { ChromeGrimpanHistory, IEGrimpanHistory } from "./grimpanHistory";
import { ChromeGrimpanMenu, IEGrimpanMenu } from "./grimpanMenu";
import IEGrimpan from "./ieGrimpan";

export abstract class AbstractGrimpanFactory {
  static createGrimpan() {
    throw new Error("하위 클래스에서 구현해야 합니다.");
  }
  static createGrimpanMenu(grimpan: Grimpan) {
    throw new Error("하위 클래스에서 구현해야 합니다.");
  }
  static createGrimpanHistory(grimpan: Grimpan) {
    throw new Error("하위 클래스에서 구현해야 합니다.");
  }
}

export class ChromeGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan(): ChromeGrimpan {
    return ChromeGrimpan.getInstance();
  }
  static override createGrimpanMenu(grimpan: ChromeGrimpan) {
    return ChromeGrimpanMenu.getInstance(grimpan);
  }
  static override createGrimpanHistory(grimpan: ChromeGrimpan) {
    return ChromeGrimpanHistory.getInstance(grimpan);
  }
}

export class IEGrimpanFactory extends AbstractGrimpanFactory {
  static override createGrimpan(): IEGrimpan {
    return IEGrimpan.getInstance();
  }
  static override createGrimpanMenu(grimpan: IEGrimpan) {
    return IEGrimpanMenu.getInstance(grimpan);
  }
  static override createGrimpanHistory(grimpan: IEGrimpan) {
    return IEGrimpanHistory.getInstance(grimpan);
  }
}
