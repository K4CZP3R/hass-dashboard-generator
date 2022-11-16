import hass, { HassApi } from "homeassistant-ws";

export class HassWs {
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
  ) {}

  async init() {
    this.client = await hass({
      host: this.config.host,
      token: this.config.token,
      port: this.config.port,
    });

    this.entities = await this.client.getStates();
  }
}
