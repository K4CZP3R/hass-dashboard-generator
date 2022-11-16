import { ICalendarCard } from "./../interfaces/card.iface";
export class CalendarCardModel implements ICalendarCard {
  type: "calendar";
  initial_view: "list" | "day" | "month";
  entities: string[];

  constructor(
    entities: string[],
    optionals: { initial_view?: "list" | "day" | "month" } = {}
  ) {
    this.type = "calendar";
    this.entities = entities;
    Object.assign(this, optionals);
  }
}
