import { IView } from "./view.iface";
export interface IViewContainer {
  view: IView;
  generate(): IView;
}
