import { Layout } from "../enums/layout.enum";
import { ICustomMushroomLightCard } from "./../interfaces/card.iface";
export class CustomMushroomLightCard implements ICustomMushroomLightCard {
  type: "custom:mushroom-light-card";
  entity: string;
  name?: string | undefined;
  icon?: string | undefined;
  layout?: Layout | undefined;
  fill_container?: boolean | undefined;
  use_light_color?: boolean | undefined;
  show_brightness_control?: boolean | undefined;
  show_color_temp_control?: boolean | undefined;
  collapsible_controls?: boolean | undefined;
  show_color_control?: boolean | undefined;

  constructor(
    entity: string,
    optionals: {
      name?: string;
      icon?: string;
      layout?: Layout;
      fill_container?: boolean;
      use_light_color?: boolean;
      show_brightness_control?: boolean;
      show_color_temp_control?: boolean;
      collapsible_controls?: boolean;
      show_color_control?: boolean;
    } = {}
  ) {
    this.type = "custom:mushroom-light-card";
    this.entity = entity;
    Object.assign(this, optionals);
  }
}
