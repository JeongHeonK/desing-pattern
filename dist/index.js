import IEGrimpan from "./ieGrimpan";
import ChromeGrimpan from "./chromeGrimpan";
import AbstractGrimpanFactory from "./abstractGrimpanFactory";
class ChromeGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return ChromeGrimpan.getInstance();
    }
}
class IEGrimpanFactory extends AbstractGrimpanFactory {
    static createGrimpan() {
        return IEGrimpan.getInstance();
    }
}
// function grimpanFactory(type: "ie" | "chrome") {
//   switch (type) {
//     case "ie":
//       return IEGrimpan.getInstance();
//     case "chrome":
//       return ChromeGrimpan.getInstance();
//     default:
//       throw new Error("일치하는 type이 없습니다.");
//   }
// }
// grimpanFactory("ie");
function main() {
    const grimpan = ChromeGrimpanFactory.createGrimpan();
    grimpan.initialize();
    grimpan.initializeMenu();
}
main();
