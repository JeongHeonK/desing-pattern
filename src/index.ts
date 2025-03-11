import IEGrimpan from "./ieGrimpan";
import ChromeGrimpan from "./chromeGrimpan";

function grimpanFactory(type: "ie" | "chrome") {
  switch (type) {
    case "ie":
      return IEGrimpan.getInstance();
    case "chrome":
      return ChromeGrimpan.getInstance();
    default:
      throw new Error("일치하는 type이 없습니다.");
  }
}

grimpanFactory("ie");
