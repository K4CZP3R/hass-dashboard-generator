import { CustomMushroomLightCard } from "./../models/custom-mushroom-light-card.model";
import { Grid } from "./../models/grid.model";
import { CustomMushroomTitleCard } from "./../models/custom-mushroom-title-card.model";
import { View } from "./../models/view.model";
import { IViewContainer } from "./../interfaces/view-container.iface";
import { IView } from "../interfaces/view.iface";
import { getDynamicEntities } from "../consts/entities";
export class LightsViewContainer implements IViewContainer {
  view: View;

  constructor() {
    this.view = new View("lights", "Lights", true, {
      type: "custom:masonry-layout",
      layout: {
        card_margin: "4px",
      },
    });
  }

  generate(): IView {
    this.view.addCards([
      new CustomMushroomTitleCard({ title: "All known lights" }),
      new Grid(
        false,
        2,
        getDynamicEntities({ prefix: "light." }).map((entity) => {
          return new CustomMushroomLightCard(entity.entity_id);
        })
      ),
    ]);
    return this.view;
  }
}

export default new LightsViewContainer();
