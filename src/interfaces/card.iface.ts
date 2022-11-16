import { ITapAction } from "./tap-action.iface";
import { Layout } from "../enums/layout.enum";
import { Alignment } from "../enums/alignment.enum";
import { IChip } from "./chip.iface";
import { MediaControl } from "../enums/media-control.enum";
import { TapAction } from "../enums/tap-action.enum";
export interface ICard {
  type: string;
}

export interface ICustomMushroomChipsCard extends ICard {
  type: "custom:mushroom-chips-card";
  chips: IChip[];
  alignment?: Alignment;
}

export function isCustomMushroomChipsCard(
  card: ICard
): card is ICustomMushroomChipsCard {
  return card.type === "custom:mushroom-chips-card";
}

export interface ICustomMushroomTitleCard extends ICard {
  type: "custom:mushroom-title-card";
  title?: string;
  subtitle?: string;
  alignment?: Alignment;
}

export function isCustomMushroomTitleCard(
  card: ICard
): card is ICustomMushroomTitleCard {
  return card.type === "custom:mushroom-title-card";
}

export interface IGrid extends ICard {
  type: "grid";
  square: boolean;
  columns: number;
  cards: ICard[];
}

export function isGrid(card: ICard): card is IGrid {
  return card.type === "grid";
}

export interface ICustomMushroomEntityCard extends ICard {
  type: "custom:mushroom-entity-card";
  entity: string;
  name: string;
  secondary_info?: string;
  layout?: Layout;
  fill_container?: boolean;
  double_tap_action?: ITapAction;
  tap_action?: ITapAction;
  icon?: string;
}

export function isCustomMushroomEntityCard(
  card: ICard
): card is ICustomMushroomEntityCard {
  return card.type === "custom:mushroom-entity-card";
}

export interface ICustomMushroomTemplateCard extends ICard {
  type: "custom:mushroom-template-card";
  primary?: string;
  secondary?: string;
  icon?: string;
  entity: string;
  icon_color?: string;
  layout: Layout;
  fill_container?: boolean;
  double_tap_action?: ITapAction;
  tap_action?: ITapAction;
}

export function isCustomMushroomTemplateCard(
  card: ICard
): card is ICustomMushroomTemplateCard {
  return card.type === "custom:mushroom-template-card";
}

export interface IVerticalStack extends ICard {
  type: "vertical-stack";
  cards: ICard[];
}

export function isVerticalStack(card: ICard): card is IVerticalStack {
  return card.type === "vertical-stack";
}

export interface IMap extends ICard {
  type: "map";
  entities: { entity: string }[];
  title?: string;
  aspect_ratio?: string;
  hours_to_show?: number;
}

export function isMap(card: ICard): card is IMap {
  return card.type === "map";
}

export interface ICustomMiniGraphCard extends ICard {
  type: "custom:mini-graph-card";
  entities: string[];
  hours_to_show?: number;
  points_per_hour?: number;
  show?: {
    state?: boolean;
    name?: boolean;
    icon?: boolean;
    points?: boolean;
  };
  color_thresholds?: { value: number; color: string }[];
}

export function isCustomMiniGraphCard(
  card: ICard
): card is ICustomMiniGraphCard {
  return card.type === "custom:mini-graph-card";
}

export interface ICustomDigitalClockCard extends ICard {
  type: "custom:digital-clock";
}

export function isCustomDigitalClockCard(
  card: ICard
): card is ICustomDigitalClockCard {
  return card.type === "custom:digital-clock";
}

export interface ICustomMushroomMediaPlayerCard extends ICard {
  type: "custom:mushroom-media-player-card";
  entity: string;
  fill_container?: boolean;
  media_controls?: MediaControl[];
  use_media_info?: boolean;
  show_volume_level?: boolean;
  icon_type: "entity-picture";
  volume_controls: unknown[];
}

export function isCustomMushroomMediaPlayerCard(
  card: ICard
): card is ICustomMushroomMediaPlayerCard {
  return card.type === "custom:mushroom-media-player-card";
}

export interface ICalendarCard extends ICard {
  type: "calendar";
  initial_view: "list" | "day" | "month";
  entities: string[];
}

export function isCalendarCard(card: ICard): card is ICalendarCard {
  return card.type === "calendar";
}

export interface ICustomMushroomLightCard extends ICard {
  type: "custom:mushroom-light-card";
  entity: string;
  name?: string;
  icon?: string;
  layout?: Layout;
  fill_container?: boolean;
  use_light_color?: boolean;
  show_brightness_control?: boolean;
  show_color_temp_control?: boolean;
  collapsible_controls?: boolean;
  show_color_control?: boolean;
}

export interface ICustomAtomicCalendarRevive extends ICard {
  type: "custom:atomic-calendar-revive";
  firstDayOfWeek: number;
  maxDaysToShow: number;
  refreshInterval: number;
  showWeekDay: boolean;
  defaultMode: "Calendar" | "Event";
  showCurrentEventLine: boolean;
  showProgressBar: boolean;
  enableModeChange: boolean;
  entities: string[];
}

export function isCustomAtomicCalendarRevive(
  card: ICard
): card is ICustomAtomicCalendarRevive {
  return card.type === "custom:atomic-calendar-revive";
}

export interface IButton extends ICard {
  type: "button";
  show_name?: boolean;
  show_icon?: boolean;
  tap_action: ITapAction;
  hold_action: ITapAction;
  icon?: string;
  icon_height?: string;
  show_state?: boolean;
  name: string;
}

export function isButton(card: ICard): card is IButton {
  return card.type === "button";
}

export interface IConditional extends ICard {
  type: "conditional";
  conditions: { entity: string; state: string }[];
  card: ICard;
}

export function isConditional(card: ICard): card is IConditional {
  return card.type === "conditional";
}
