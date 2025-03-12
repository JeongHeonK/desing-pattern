class Grimpan {
    constructor(canvas) {
        if (!canvas || !(canvas instanceof HTMLCanvasElement)) {
            throw new Error("canvas 엘리먼트를 사용하세요");
        }
    }
    static getInstance() { }
}
export default Grimpan;
