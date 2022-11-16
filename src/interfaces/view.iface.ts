import { ICard } from "./card.iface";

export interface IView {
  title: string;
  theme?: string;
  badges: unknown[];
  path: string;
  cards: ICard[];
  subview: boolean;
  type?: string;
  layout?: {
    card_margin?: string;
  };
}
