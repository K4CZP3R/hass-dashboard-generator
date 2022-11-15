import { ITapAction } from "./tap-action.iface";
import { Layout } from "./../enums/layout.enum";
import { Alignment } from "../enums/alignment.enum";
import { IChip } from "./chip.iface";
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
