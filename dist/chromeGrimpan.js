import Grimpan from "./abstractGrimpan";
export default class ChromeGrimpan extends Grimpan {
    static instance;
    initialize() { }
    static getInstance() {
        if (!this.instance) {
            this.instance = new ChromeGrimpan(document.querySelector("canvas"));
        }
        return this.instance;
    }
}
