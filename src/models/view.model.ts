import { ICard } from "../interfaces/card.iface";
import { IView } from "./../interfaces/view.iface";
export class View implements IView {
  title: string;
  theme?: string;
  badges: unknown[] = [];
  path: string;
  cards: ICard[] = [];
  subview: boolean;
  type?: string;
  layout?: { card_margin?: string };

  constructor(
    path: string,
    title: string,
    subview: boolean,

    optionals: {
      theme?: string;
      type?: string;
      layout?: { card_margin?: string; margin?: string };
    } = {}
  ) {
    this.title = title;
    this.path = path;
    this.subview = subview;

    if (optionals.theme) {
      this.theme = optionals.theme;
    } else {
      delete this.theme;
    }

    if (optionals.type) {
      this.type = optionals.type;
    } else {
      delete this.type;
    }

    if (optionals.layout) {
      this.layout = optionals.layout;
    } else {
      delete this.layout;
    }
  }

  addCard(card: ICard) {
    this.cards.push(card);
  }
  addCards(cards: ICard[]) {
    this.cards = this.cards.concat(cards);
  }
}
