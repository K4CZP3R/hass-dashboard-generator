import { IHassWs } from './../interfaces/hass-ws.iface';
import hass, { HassApi } from "homeassistant-ws";

export class MockHassWs implements IHassWs {
  entities: { entity_id: string; state: string; attributes: { friendly_name: string; }; }[] = [];
}

export class HassWs implements IHassWs {
  client: HassApi;
  entities: {
    entity_id: string;
    state: string;
    attributes: { friendly_name: string };
  }[];
  constructor(
    private config: {
      host: string;
      port: number;
      token: string;
    }
  ) { }

  async init() {
    this.client = await hass({
      host: this.config.host,
      token: this.config.token,
      port: this.config.port,
      protocol: "ws",
    });

    this.entities = await this.client.getStates();
  }
}
