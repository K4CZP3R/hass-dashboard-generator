import { Color } from "./../enums/color.enum";
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
    } = {}
  ) {
    this.type = "custom:mushroom-entity-card";
    this.entity = entity;
    this.name = name;
    if (optionals.secondary_info) {
      this.secondary_info = optionals.secondary_info;
    } else {
      delete this.secondary_info;
    }

    if (optionals.layout) {
      this.layout = optionals.layout;
    } else {
      delete this.layout;
    }

    if (optionals.fill_container) {
      this.fill_container = optionals.fill_container;
    } else {
      delete this.fill_container;
    }

    if (optionals.double_tap_action) {
      this.double_tap_action = optionals.double_tap_action;
    } else {
      delete this.double_tap_action;
    }

    if (optionals.tap_action) {
      this.tap_action = optionals.tap_action;
    } else {
      delete this.tap_action;
    }

    if (optionals.icon_color) {
      this.icon_color = optionals.icon_color;
    } else {
      delete this.icon_color;
    }
  }
}
