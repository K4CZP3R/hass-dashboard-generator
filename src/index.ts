import { DependencyProviderService } from "./helpers/dependency-provider";
import { HassWs, MockHassWs } from "./helpers/hass-ws";
import { View } from "./models/view.model";
import { IRootConfig } from "./interfaces/root-config.iface";
import yaml from "yamljs";
import { copyToClipboard } from "./helpers/clipboard";
import homeView from "./view-containers/home-view-container";
import castView from "./view-containers/cast-view-container";
import debugView from "./view-containers/debug-view-container";
import lightsView from "./view-containers/lights-view-container";

import * as dotenv from "dotenv";
import homeViewContainer from "./view-containers/home-view-container";
dotenv.config();

async function main() {
  // let hassWs = new HassWs({
  //   host: process.env.HASS_HOST!,
  //   port: parseInt(process.env.HASS_PORT!),
  //   token: process.env.HASS_TOKEN!,
  // });

  // await hassWs.init();
  // console.log("Websocket initialized!");
  // DependencyProviderService.setImpl("hassWs", hassWs);
  DependencyProviderService.setImpl("hassWs", new MockHassWs())

  let myConfig: IRootConfig = {
    views: [
      homeView.generate(),
      castView.generate(),
      debugView.generate(),
      lightsView.generate(),
    ],
  };

  let yamlConfig = yaml.stringify(myConfig, 4);
  await copyToClipboard(yamlConfig);
  console.log("Copied to clipboard!!");
}

main().catch(console.error);
