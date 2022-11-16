import { ITapCallServiceAction } from "./../interfaces/tap-action.iface";
import { TapAction } from "./../enums/tap-action.enum";
import { Button } from "./../models/button.model";
import { Grid } from "./../models/grid.model";
import { CustomMushroomTitleCard } from "../models/custom-mushroom-title-card.model";
import { View } from "./../models/view.model";
let debugView = new View("debug", "Debug", true, {
  type: "custom:masonry-layout",
  layout: {
    card_margin: "4px",
  },
});

debugView.addCards([
  new CustomMushroomTitleCard({
    title: "Debug",
    subtitle: "Go back if you don't know what you're doing",
  }),
  new Grid(false, 2, [
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
]);

export default debugView;
