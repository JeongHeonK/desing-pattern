const GRIMPAN_CONSTRUCTOR_SYMBOL = Symbol();

class Grimpan {
  static instance;
  constructor(canvas, symbol) {
    if (symbol !== GRIMPAN_CONSTRUCTOR_SYMBOL) {
      throw new Error("new를 통해서 호출할 수 없습니다.");
    }
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 사용하세요");
    }
  }
  initialize() {}
  initializeMenu() {}
  static getInstance() {
    if (!this.instance) {
      this.instance = new Grimpan(
        document.querySelector("canvas", GRIMPAN_CONSTRUCTOR_SYMBOL),
      );
    }
    return this.instance;
  }
}
export default Grimpan;
