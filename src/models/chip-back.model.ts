import { IChipBack } from "../interfaces/chip.iface";

export class ChipBack implements IChipBack {
  type: "back" = "back";

  constructor() {
    this.type = "back";
  }
}
