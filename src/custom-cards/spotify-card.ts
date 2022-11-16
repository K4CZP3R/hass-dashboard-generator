import { SpotifyKacper } from "./../consts/entities";
import { CustomMushroomMediaPlayerCardModel } from "../models/custom-mushroom-media-player-card.model";
import { MediaControl } from "../enums/media-control.enum";

export default new CustomMushroomMediaPlayerCardModel(SpotifyKacper, {
  fill_container: true,
  media_controls: [
    MediaControl.Next,
    MediaControl.PlayPauseStop,
    MediaControl.Previous,
    MediaControl.Shuffle,
    MediaControl.Repeat,
    MediaControl.OnOff,
  ],
  icon_type: "entity-picture",
  use_media_info: true,
  show_volume_level: true,
});
