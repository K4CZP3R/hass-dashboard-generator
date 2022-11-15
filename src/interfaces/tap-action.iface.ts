import { TapAction } from "../enums/tap-action.enum";
export interface ITapAction {
  action: TapAction;
}

export interface ITapNavigationAction extends ITapAction {
  navigation_path: string;
}

export function isTapNavigationAction(
  tapAction: ITapAction
): tapAction is ITapNavigationAction {
  return tapAction.action === TapAction.Navigate;
}
