class GrimpanMenuBtn {
  private constructor(
    private name: string,
    private type: string,
    private onClick?: () => void,
    private onChange?: () => void,
    private active?: boolean,
    private value?: string | number,
  ) {}

  static Builder = class GrimpanMenuBtnBuilder {
    private btn: GrimpanMenuBtn;
    constructor(name: string, type: string) {
      this.btn = new GrimpanMenuBtn(name, type);
    }

    setOnClick(onClick: () => void) {
      this.btn.onClick = onClick;
      return this;
    }

    setOnChange(onChange: () => void) {
      this.btn.onChange = onChange;
      return this;
    }

    setActive(active: boolean) {
      this.btn.active = active;
      return this;
    }

    setValue(value: string | number) {
      this.btn.value = value;
      return this;
    }

    build() {
      return this.btn;
    }
  };
}

const backBtn = new GrimpanMenuBtn.Builder("뒤로", "back")
  .setOnClick(() => {})
  .setActive(true)
  .build();
