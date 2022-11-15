import { Alignment } from "../enums/alignment.enum";
import { ICustomMushroomChipsCard } from "../interfaces/card.iface";
import { IChip } from "../interfaces/chip.iface";

export class CustomMushroomChipsCard implements ICustomMushroomChipsCard {
  type: "custom:mushroom-chips-card";
  chips: IChip[];
  alignment?: Alignment;

  constructor(chips: IChip[]) {
    this.type = "custom:mushroom-chips-card";
    this.chips = chips;
    this.alignment = Alignment.Center;
  }
}
