import { ICustomDigitalClockCard } from "./../interfaces/card.iface";
export class CustomDigitalClockCard implements ICustomDigitalClockCard {
  type: "custom:digital-clock";

  constructor() {
    this.type = "custom:digital-clock";
  }
}
