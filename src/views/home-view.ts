import { Map } from "./../models/map.model";
import { getStateOf, getRawStateOf } from "./../helpers/templating";
import { Alignment } from "./../enums/alignment.enum";
import {
  AllGlobalLamps,
  DailyEnergyCosts,
  MonthlyEnergyCosts,
  OpelCorsa,
  PersonsLivingInHouse,
  TemperatureInside,
  TemperatureOutside,
  TemperatureRadiator,
} from "./../consts/entities";
import { CustomMushroomTemplateCard } from "./../models/custom-mushroom-template-card.model";
import { CustomMushroomTitleCard } from "./../models/custom-mushroom-title-card.model";
import { View } from "./../models/view.model";
import headerChips from "../custom-cards/header-chips";
import { Grid } from "../models/grid.model";
import { IntercomSwitch } from "../consts/entities";
import { Layout } from "../enums/layout.enum";
import { TapAction } from "../enums/tap-action.enum";
import { CustomMushroomEntityCard } from "../models/custom-mushroom-entity-card.model";
import { Color } from "../enums/color.enum";
import { VerticalStack } from "../models/vertical-stack.model";
import { ITapNavigationAction } from "../interfaces/tap-action.iface";
let myView = new View("home", "Home");

myView.addCards([
  headerChips,
  new CustomMushroomTitleCard({
    title: "Hello {{user}}",
    subtitle: "How is your day?",
  }),
  new CustomMushroomTemplateCard(IntercomSwitch, Layout.Horizontal, {
    primary: "Deur",
    icon: "mdi:door",
    icon_color: `{% if states('switch.door_intercom_esphome') == 'on' %}green{%endif%}`,
    tap_action: {
      action: TapAction.Toggle,
    },
    double_tap_action: {
      action: TapAction.MoreInfo,
    },
  }),
  new Grid(false, 2, [
    ...Object.keys(AllGlobalLamps).map(
      (lamp) =>
        new CustomMushroomEntityCard(AllGlobalLamps[lamp], lamp, {
          layout: Layout.Vertical,
          tap_action: {
            action: TapAction.Toggle,
          },
          double_tap_action: {
            action: TapAction.MoreInfo,
          },
        })
    ),
  ]),
  new VerticalStack([
    new CustomMushroomTitleCard({
      subtitle: "Temperaturen",
      alignment: Alignment.Left,
    }),
    new Grid(false, 3, [
      new CustomMushroomEntityCard(TemperatureInside, "Binnen", {
        layout: Layout.Vertical,
        icon_color: Color.Yellow,
      }),
      new CustomMushroomEntityCard(TemperatureOutside, "Buiten", {
        layout: Layout.Vertical,
        icon_color: Color.Cyan,
      }),
      new CustomMushroomEntityCard(TemperatureRadiator, "Radiator", {
        layout: Layout.Vertical,
        icon_color: Color.Red,
      }),
    ]),
  ]),
  new VerticalStack([
    new CustomMushroomTitleCard({
      subtitle: "Stroom",
    }),
    new Grid(false, 2, [
      new CustomMushroomTemplateCard(
        DailyEnergyCosts,

        Layout.Vertical,
        {
          primary: `{{${getRawStateOf(MonthlyEnergyCosts)} | round() }} EUR`,
          secondary: "Maandelijkse kosten",
          icon: "mdi:power-socket-eu",
          fill_container: true,
          double_tap_action: {
            action: TapAction.Navigate,
            navigation_path: "energy",
          } as ITapNavigationAction,
          tap_action: {
            action: TapAction.Navigate,
            navigation_path: "energy",
          } as ITapNavigationAction,
        }
      ),
      new CustomMushroomTemplateCard(
        DailyEnergyCosts,

        Layout.Vertical,
        {
          primary: ` Was at {{as_timestamp(states.input_number.max_power_usage_today.last_changed)  |timestamp_custom("%H:%M") }}`,
          secondary: `{{states("input_number.max_power_usage_today") | int }}W`,
          icon: "mdi:power-settings",
          fill_container: true,
          double_tap_action: {
            action: TapAction.MoreInfo,
          },
        }
      ),
    ]),
  ]),
  new VerticalStack([
    new CustomMushroomTitleCard({
      subtitle: "Locaties",
    }),
    new Map(
      [...PersonsLivingInHouse, OpelCorsa].map((e) => {
        return { entity: e };
      }),
      {
        aspect_ratio: "1:1",
        hours_to_show: 24,
      }
    ),
  ]),
]);

export default myView;
