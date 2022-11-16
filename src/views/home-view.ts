import { Button } from "./../models/button.model";
import { Map } from "./../models/map.model";
import { getRawStateOf } from "./../helpers/templating";
import { Alignment } from "../enums/alignment.enum";
import {
  AllGlobalLamps,
  IntercomBellActive,
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
import energyGraphCard from "../custom-cards/energy-graph-card";

let myView = new View("main", "Main", false, {
  type: "custom:masonry-layout",
  layout: {
    card_margin: "4px",
  },
});

myView.addCards([
  headerChips,
  new CustomMushroomTitleCard({
    title: `Hello {{user}},`,
    subtitle: "{{now().strftime('%H:%M %d-%m-%Y')}}",
  }),
  new Grid(false, 3, [
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

  new Grid(false, 2, [
    new CustomMushroomTemplateCard(IntercomSwitch, Layout.Vertical, {
      primary: "Deur",
      secondary: `{{ as_timestamp(states.${IntercomSwitch}.last_updated) | timestamp_custom("%d.%m.%Y %H:%M") }}`,
      icon: "mdi:door",
      fill_container: true,
      icon_color: `{% if states('${IntercomSwitch}') == 'on' %}green{%endif%}`,
      tap_action: {
        action: TapAction.Toggle,
      },
      double_tap_action: {
        action: TapAction.MoreInfo,
      },
    }),
    new CustomMushroomTemplateCard(IntercomSwitch, Layout.Vertical, {
      primary: "Bel",
      secondary: `{{ as_timestamp(states.${IntercomBellActive}.last_updated) | timestamp_custom("%d.%m.%Y %H:%M") }}`,
      icon: "mdi:bell",
      fill_container: true,
      icon_color: `{% if states('${IntercomBellActive}') == 'on' %}green{%else%}yellow{%endif%}`,
      tap_action: {
        action: TapAction.Toggle,
      },
      double_tap_action: {
        action: TapAction.MoreInfo,
      },
    }),
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
      new CustomMushroomTemplateCard(MonthlyEnergyCosts, Layout.Vertical, {
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
      }),
      energyGraphCard,
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
  // new Grid(false, 3, [
  //   new Button(
  //     "Debug",
  //     {
  //       action: TapAction.Navigate,
  //       navigation_path: "debug",
  //     } as ITapNavigationAction,
  //     {
  //       action: TapAction.None,
  //     },
  //     {
  //       icon: "mdi:bug",
  //       icon_height: "32px",
  //     }
  //   ),
  // ]),
]);

export default myView;
