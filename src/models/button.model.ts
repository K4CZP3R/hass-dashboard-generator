import { ITapAction } from "./../interfaces/tap-action.iface";
import { TapAction } from "../enums/tap-action.enum";
import { IButton } from "../interfaces/card.iface";

export class Button implements IButton {
  type: "button";
  show_name?: boolean | undefined;
  show_icon?: boolean | undefined;
  tap_action: ITapAction;
  hold_action: ITapAction;
  icon?: string | undefined;
  icon_height?: string | undefined;
  show_state?: boolean | undefined;
  name: string;

  constructor(
    name: string,
    tap_action: ITapAction,
    hold_action: ITapAction,
    optionals: {
      show_name?: boolean;
      show_icon?: boolean;
      icon?: string;
      icon_height?: string;
      show_state?: boolean;
    } = {}
  ) {
    this.type = "button";
    this.name = name;
    this.tap_action = tap_action;
    this.hold_action = hold_action;
    Object.assign(this, optionals);
  }
}
