import { Alignment } from "../enums/alignment.enum";
import { ICustomMushroomTitleCard } from "./../interfaces/card.iface";
export class CustomMushroomTitleCard implements ICustomMushroomTitleCard {
  type: "custom:mushroom-title-card";
  title?: string;
  subtitle?: string;
  alignment: Alignment;

  constructor(
    optionals: { title?: string; subtitle?: string; alignment?: Alignment } = {}
  ) {
    this.type = "custom:mushroom-title-card";

    if (optionals.title) {
      this.title = optionals.title;
    } else {
      delete this.title;
    }

    if (optionals.subtitle) {
      this.subtitle = optionals.subtitle;
    } else {
      delete this.subtitle;
    }
    this.alignment = optionals.alignment ?? Alignment.Center;
  }
}
