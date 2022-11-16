import { ICustomMiniGraphCard } from "../interfaces/card.iface";

export class CustomMiniGraphCard implements ICustomMiniGraphCard {
  type: "custom:mini-graph-card";
  entities: string[];
  hours_to_show?: number;
  points_per_hour?: number;
  show?: { state?: boolean; name?: boolean; icon?: boolean; points?: boolean };
  color_thresholds?: { value: number; color: string }[];

  constructor(
    entities: string[],
    optionals: {
      hours_to_show?: number;
      points_per_hour?: number;
      show?: {
        state?: boolean;
        name?: boolean;
        icon?: boolean;
        points?: boolean;
      };
      color_thresholds?: { value: number; color: string }[];
    } = {}
  ) {
    this.type = "custom:mini-graph-card";
    this.entities = entities;
    Object.assign(this, optionals);
  }
}
