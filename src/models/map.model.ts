import { IMap } from "./../interfaces/card.iface";
export class Map implements IMap {
  type: "map";
  entities: { entity: string }[];
  title?: string | undefined;
  aspect_ratio?: string | undefined;
  hours_to_show?: number | undefined;

  constructor(
    entities: { entity: string }[],
    optionals: {
      title?: string;
      aspect_ratio?: string;
      hours_to_show?: number;
    } = {}
  ) {
    this.type = "map";
    this.entities = entities;

    if (optionals.title) {
      this.title = optionals.title;
    } else {
      delete this.title;
    }

    if (optionals.aspect_ratio) {
      this.aspect_ratio = optionals.aspect_ratio;
    } else {
      delete this.aspect_ratio;
    }

    if (optionals.hours_to_show) {
      this.hours_to_show = optionals.hours_to_show;
    } else {
      delete this.hours_to_show;
    }
  }
}
