import { CustomMushroomLightCard } from "./../models/custom-mushroom-light-card.model";
import { Grid } from "./../models/grid.model";
import {
  AgendaKacper,
  KacperLamp,
  KacperLightStrip,
} from "./../consts/entities";
import headerChips from "../custom-cards/header-chips";
import spotifyCard from "../custom-cards/spotify-card";
import { CalendarCardModel } from "../models/calendar-card.model";
import { CustomDigitalClockCard } from "../models/custom-digital-clock-card.model";
import { View } from "./../models/view.model";
import { Layout } from "../enums/layout.enum";
import eventCalendar from "../custom-cards/event-calendar";
let castView = new View("cast", "Cast", true, {
  type: "custom:masonry-layout",
  layout: {
    card_margin: "4px",
  },
});

castView.addCards([
  new CustomDigitalClockCard(),
  headerChips,
  spotifyCard,
  new Grid(false, 1, [
    new CustomMushroomLightCard(KacperLamp, {
      name: "Lamp",
      layout: Layout.Horizontal,
      use_light_color: true,
      show_brightness_control: true,
      show_color_temp_control: true,
      show_color_control: true,
    }),
    new CustomMushroomLightCard(KacperLightStrip, {
      name: "Lightstrip",
      layout: Layout.Horizontal,
      use_light_color: true,
      show_brightness_control: true,
      show_color_temp_control: true,
      show_color_control: true,
    }),
  ]),
  eventCalendar,
]);
export default castView;
