import { ICard, IConditional } from "./../interfaces/card.iface";
export class Conditional implements IConditional {
  type: "conditional";
  conditions: { entity: string; state: string }[];
  card: ICard;

  constructor(conditions: { entity: string; state: string }[], card: ICard) {
    this.type = "conditional";
    this.conditions = conditions;
    this.card = card;
  }
}
