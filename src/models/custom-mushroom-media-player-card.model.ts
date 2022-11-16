import { MediaControl } from "../enums/media-control.enum";
import { ICustomMushroomMediaPlayerCard } from "../interfaces/card.iface";

export class CustomMushroomMediaPlayerCardModel
  implements ICustomMushroomMediaPlayerCard
{
  type: "custom:mushroom-media-player-card";
  entity: string;
  fill_container?: boolean | undefined;
  media_controls?: MediaControl[] | undefined;
  use_media_info?: boolean | undefined;
  show_volume_level?: boolean | undefined;
  icon_type: "entity-picture";
  volume_controls: unknown[];

  constructor(
    entity: string,
    optionals: {
      fill_container?: boolean;
      media_controls?: MediaControl[];
      use_media_info?: boolean;
      show_volume_level?: boolean;
      icon_type?: "entity-picture";
    } = {}
  ) {
    this.type = "custom:mushroom-media-player-card";
    this.entity = entity;
    Object.assign(this, optionals);
  }
}
