import { ICard, IGrid } from "../interfaces/card.iface";

export class Grid implements IGrid {
  type: "grid";
  square: boolean;
  columns: number;
  cards: ICard[];

  constructor(square: boolean, columns: number, cards: ICard[]) {
    this.type = "grid";
    this.square = square;
    this.columns = columns;
    this.cards = cards;
  }
}
