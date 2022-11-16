import { ITapNavigationAction } from "./../interfaces/tap-action.iface";
import { getStateOf } from "./../helpers/templating";
import { Layout } from "./../enums/layout.enum";
import { CustomMushroomTemplateCard } from "./../models/custom-mushroom-template-card.model";
import { VerticalStack } from "./../models/vertical-stack.model";
import { Conditional } from "./../models/conditional.model";
import { IViewContainer } from "../interfaces/view-container.iface";
import { CustomMushroomEntityCard } from "../models/custom-mushroom-entity-card.model";
import { ITapCallServiceAction } from "../interfaces/tap-action.iface";
import { TapAction } from "../enums/tap-action.enum";
import { Button } from "../models/button.model";
import { Grid } from "../models/grid.model";
import { CustomMushroomTitleCard } from "../models/custom-mushroom-title-card.model";
import { View } from "../models/view.model";
import { getDynamicEntities } from "../consts/entities";
import { IView } from "../interfaces/view.iface";
export class DebugViewContainer implements IViewContainer {
  view: View;
  constructor() {
    this.view = new View("debug", "Debug", true, {
      type: "custom:masonry-layout",
      layout: {
        card_margin: "4px",
      },
    });
  }

  generate(): IView {
    this.view.addCards([
      new CustomMushroomTitleCard({
        title: "Debug",
        subtitle: "Go back if you don't know what you're doing",
      }),
      new CustomMushroomTitleCard({
        subtitle: `Generated at ${new Date().toLocaleString()}`,
      }),
      new VerticalStack([
        new CustomMushroomTitleCard({
          subtitle: "App Devices",
        }),
        ...getDynamicEntities({ suffix: "_focus" }).map((entity) => {
          const baseEntity = entity.entity_id
            .replace("_focus", "")
            .replace("binary_sensor.", "");

          const knownEntities: string[] = [
            "battery_level",
            "battery_state",
            "bssid",
            "connection_type",
            "distance",
            "focus",
            "geocoded_location",
            "last_update_trigger",
            "ssid",
            "steps",
          ];
          return new VerticalStack([
            new CustomMushroomTitleCard({
              subtitle: baseEntity,
            }),
            new Grid(
              false,
              2,
              knownEntities
                .filter(
                  (es) =>
                    getDynamicEntities({
                      equalsTo: `sensor.${baseEntity}_${es}`,
                    }).length !== 0
                )
                .map((entitySuffix) => {
                  const gotEntity = getDynamicEntities({
                    equalsTo: `sensor.${baseEntity}_${entitySuffix}`,
                  })[0];
                  return new CustomMushroomEntityCard(
                    gotEntity.entity_id,
                    gotEntity.attributes.friendly_name,
                    {
                      layout: Layout.Vertical,
                      tap_action: {
                        action: TapAction.MoreInfo,
                      },
                    }
                  );
                })
            ),
          ]);
        }),
      ]),
      new VerticalStack([
        new CustomMushroomTitleCard({
          subtitle: "Batteries",
        }),
        new Grid(false, 2, [
          ...getDynamicEntities({ suffix: "_battery" }).map((entity) => {
            return new CustomMushroomTemplateCard(
              entity.entity_id,
              Layout.Horizontal,
              {
                primary: entity.attributes.friendly_name,
                secondary: getStateOf(entity.entity_id) + "%",
                icon: `{% if states('${entity.entity_id}') | int < 25 %} mdi:battery-outline{%else%} mdi:battery{%endif%}`,
                icon_color: `{% if states('${entity.entity_id}') | int < 25 %}red{%else%}green{%endif%}`,
              }
            );
          }),
        ]),
      ]),
      new VerticalStack([
        new CustomMushroomTitleCard({ subtitle: "Updates" }),
        new Grid(false, 2, [
          ...[
            ...getDynamicEntities({ prefix: "update." }),
            ...getDynamicEntities({ suffix: "update_available" }),
          ].map((entity) => {
            return new Conditional(
              [{ entity: entity.entity_id, state: "on" }],
              new CustomMushroomEntityCard(
                entity.entity_id,
                entity.attributes.friendly_name
              )
            );
          }),
        ]),
      ]),

      new VerticalStack([
        new CustomMushroomTitleCard({
          subtitle: "Cast",
        }),
        new Grid(false, 2, [
          new Button(
            "go to /cast",
            {
              action: TapAction.Navigate,
              navigation_path: "cast",
            } as ITapNavigationAction,
            { action: TapAction.None },
            { icon_height: "32px" }
          ),
          new Button(
            "/main to NestHome",
            {
              action: TapAction.CallService,
              service: "cast.show_lovelace_view",
              data: {
                entity_id: "media_player.nest_hub_google",
                dashboard_path: "final-dashboard",
                view_path: "main",
              },
            } as ITapCallServiceAction,
            {
              action: TapAction.None,
            },
            {
              icon: "mdi:cast",
              icon_height: "32px",
            }
          ),
          new Button(
            "/cast to NestHome",
            {
              action: TapAction.CallService,
              service: "cast.show_lovelace_view",
              data: {
                entity_id: "media_player.nest_hub_google",
                dashboard_path: "final-dashboard",
                view_path: "cast",
              },
            } as ITapCallServiceAction,
            {
              action: TapAction.None,
            },
            {
              icon: "mdi:cast",
              icon_height: "32px",
            }
          ),
        ]),
      ]),
    ]);

    return this.view;
  }
}
export default new DebugViewContainer();
