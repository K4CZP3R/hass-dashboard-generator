import { Layout } from "../enums/layout.enum";
import { ITapAction } from "../interfaces/tap-action.iface";
import { ICustomMushroomTemplateCard } from "./../interfaces/card.iface";
export class CustomMushroomTemplateCard implements ICustomMushroomTemplateCard {
  type: "custom:mushroom-template-card";
  primary?: string;
  secondary?: string;
  icon?: string | undefined;
  entity: string;
  icon_color?: string | undefined;
  layout: Layout;
  fill_container?: boolean | undefined;
  double_tap_action?: ITapAction | undefined;
  tap_action?: ITapAction | undefined;

  constructor(
    entity: string,
    layout: Layout,
    optionals: {
      primary?: string;
      secondary?: string;
      icon?: string;
      icon_color?: string;
      fill_container?: boolean;
      tap_action?: ITapAction;
      double_tap_action?: ITapAction;
    } = {}
  ) {
    this.type = "custom:mushroom-template-card";
    this.entity = entity;

    this.layout = layout;

    if (optionals.primary) {
      this.primary = optionals.primary;
    } else {
      delete this.primary;
    }

    if (optionals.secondary) {
      this.secondary = optionals.secondary;
    } else {
      delete this.secondary;
    }

    if (optionals.icon) {
      this.icon = optionals.icon;
    } else {
      delete this.icon;
    }

    if (optionals.icon_color) {
      this.icon_color = optionals.icon_color;
    } else {
      delete this.icon_color;
    }

    if (optionals.fill_container) {
      this.fill_container = optionals.fill_container;
    } else {
      delete this.fill_container;
    }

    if (optionals.tap_action) {
      this.tap_action = optionals.tap_action;
    } else {
      delete this.tap_action;
    }

    if (optionals.double_tap_action) {
      this.double_tap_action = optionals.double_tap_action;
    } else {
      delete this.double_tap_action;
    }
  }
}
