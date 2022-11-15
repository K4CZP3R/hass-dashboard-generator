import { ICard } from "./card.iface";

export interface IChip extends ICard {}

export interface IChipEntity extends IChip {
  type: "entity";
  entity: string;
  use_entity_picture?: boolean;
}

export interface IChipConditional extends IChip {
  type: "conditional";
  conditions: IChipCondition[];
  chip: IChip;
}

export function isChipConditional(chip: IChip): chip is IChipConditional {
  return chip.type === "conditional";
}

export interface IChipCondition {
  entity: string;
  state_not?: string;
  state?: string;
}

export interface IChipTemplate extends IChip {
  type: "template";
  entity: string;
  content: string;
  icon?: string;
}

export function isChipTemplate(chip: IChip): chip is IChipTemplate {
  return chip.type === "template";
}

export interface IChipBack extends IChip {
  type: "back";
}
export function isChipBack(chip: IChip): chip is IChipBack {
  return chip.type === "back";
}
