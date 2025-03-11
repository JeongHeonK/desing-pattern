export default class ChromeGrimpan {
    static instance;
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas 엘리먼트를 사용하세요");
        }
    }
    initialize() { }
    initializeMenu() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector("canvas"));
        }
        return this.instance;
    }
}
