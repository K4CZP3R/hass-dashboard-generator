import { ICard, IVerticalStack } from "./../interfaces/card.iface";
export class VerticalStack implements IVerticalStack {
  type: "vertical-stack";
  cards: ICard[];

  constructor(cards: ICard[]) {
    this.type = "vertical-stack";
    this.cards = cards;
  }
}
