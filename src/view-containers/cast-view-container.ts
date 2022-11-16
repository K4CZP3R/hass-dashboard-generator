import { CustomMushroomEntityCard } from "./../models/custom-mushroom-entity-card.model";
import { ChipEntity } from "./../models/chip-entity.model";
import { CustomMushroomChipsCard } from "./../models/custom-mushroom-chips-card.model";
import { IViewContainer } from "./../interfaces/view-container.iface";
import { CustomMushroomLightCard } from "../models/custom-mushroom-light-card.model";
import { Grid } from "../models/grid.model";
import { AgendaKacper, KacperLamp, KacperLightStrip } from "../consts/entities";
import headerChips from "../custom-cards/header-chips";
import spotifyCard from "../custom-cards/spotify-card";
import { CalendarCardModel } from "../models/calendar-card.model";
import { CustomDigitalClockCard } from "../models/custom-digital-clock-card.model";
import { View } from "../models/view.model";
import { Layout } from "../enums/layout.enum";
import eventCalendar from "../custom-cards/event-calendar";
import { IView } from "../interfaces/view.iface";

export class CastViewContainer implements IViewContainer {
  view: View;
  constructor() {
    this.view = new View("cast", "Cast", true, {
      type: "custom:masonry-layout",
      layout: {
        card_margin: "8px",
        margin: "6px",
      },
    });
  }

  generate(): IView {
    this.view.addCards([
      headerChips,
      new CustomDigitalClockCard(),
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
        new CustomMushroomEntityCard(
          "sensor.kacper_iphone_battery_level",
          "Battery"
        ),
      ]),
      spotifyCard,

      eventCalendar,
    ]);

    return this.view;
  }
}

export default new CastViewContainer();
