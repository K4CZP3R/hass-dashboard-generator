import { TapAction } from "../enums/tap-action.enum";
export interface ITapAction {
  action: TapAction;
}

export interface ITapNavigationAction extends ITapAction {
  navigation_path: string;
}
export interface ITapCallServiceAction extends ITapAction {
  service: string;
  data: unknown;
}

export function isTapNavigationAction(
  tapAction: ITapAction
): tapAction is ITapNavigationAction {
  return tapAction.action === TapAction.Navigate;
}

export function isTapCallServiceAction(
  tapAction: ITapAction
): tapAction is ITapCallServiceAction {
  return tapAction.action === TapAction.CallService;
}
