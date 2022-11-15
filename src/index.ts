import { View } from "./models/view.model";
import { IRootConfig } from "./interfaces/root-config.iface";
import yaml from "yamljs";
import { copyToClipboard } from "./helpers/clipboard";
import homeView from "./views/home-view";

let myConfig: IRootConfig = {
  views: [homeView],
};

let yamlConfig = yaml.stringify(myConfig, 4);
copyToClipboard(yamlConfig);
