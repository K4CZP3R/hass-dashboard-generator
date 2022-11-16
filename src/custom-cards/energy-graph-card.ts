import { CustomMiniGraphCard } from "./../models/custom-mini-graph-card.model";
// type: custom:mini-graph-card
// hours_to_show: 24
// points_per_hour: 0.75
// show:
//   state: true
//   name: false
//   icon: false
//   points: false
// color_thresholds:
//   - value: 400
//     color: "#00f17d"
//   - value: 1000
//     color: red
// entities:
//   - sensor.power_consumed

export default new CustomMiniGraphCard(["sensor.power_consumed"], {
  hours_to_show: 24,
  points_per_hour: 0.75,
  show: {
    state: true,
    name: false,
    icon: false,
    points: false,
  },
  color_thresholds: [
    { value: 400, color: "#00f17d" },
    { value: 1000, color: "red" },
  ],
});
