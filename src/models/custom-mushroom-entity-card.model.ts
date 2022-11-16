import { Color } from "../enums/color.enum";
import { Layout } from "../enums/layout.enum";
import { ITapAction } from "../interfaces/tap-action.iface";
import { ICustomMushroomEntityCard } from "./../interfaces/card.iface";
export class CustomMushroomEntityCard implements ICustomMushroomEntityCard {
  type: "custom:mushroom-entity-card";
  entity: string;
  name: string;
  secondary_info?: string | undefined;
  layout?: Layout | undefined;
  fill_container?: boolean | undefined;
  double_tap_action?: ITapAction | undefined;
  tap_action?: ITapAction | undefined;
  icon_color?: Color;
  icon?: string;

  constructor(
    entity: string,
    name: string,
    optionals: {
      secondary_info?: string;
      layout?: Layout;
      fill_container?: boolean;
      double_tap_action?: ITapAction;
      tap_action?: ITapAction;
      icon_color?: Color;
      icon?: string;
    } = {}
  ) {
    this.type = "custom:mushroom-entity-card";
    this.entity = entity;
    this.name = name;
    Object.assign(this, optionals);
  }
}
