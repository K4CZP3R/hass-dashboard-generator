import { TemperatureInside, TemperatureOutside } from "../consts/entities";
import { CustomMiniGraphCard } from "../models/custom-mini-graph-card.model";

export default new CustomMiniGraphCard([TemperatureInside, TemperatureOutside], {
    hours_to_show: 48,
    points_per_hour: 1,
    show: {
      state: true,
      name: true,
      icon: true,
      points: false,
    },
    color_thresholds: [
    ],
  });
  