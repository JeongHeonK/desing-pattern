abstract class Grimpan {
  protected constructor(canvas: HTMLElement | null) {
    if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
      throw new Error("canvas 엘리먼트를 사용하세요");
    }
  }

  abstract initialize(): void;

  static getInstance() {}
}

export default Grimpan;
