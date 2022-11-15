import { ICard } from "../interfaces/card.iface";
import { IView } from "./../interfaces/view.iface";
export class View implements IView {
  title: string;
  theme: string;
  badges: unknown[] = [];
  path: string;
  cards: ICard[] = [];

  constructor(title: string, path: string) {
    this.title = title;
    this.path = path;
  }
  addCard(card: ICard) {
    this.cards.push(card);
  }
  addCards(cards: ICard[]) {
    this.cards = this.cards.concat(cards);
  }
}
