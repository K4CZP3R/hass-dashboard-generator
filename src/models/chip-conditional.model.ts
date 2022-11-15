import {
  IChip,
  IChipCondition,
  IChipConditional,
} from "./../interfaces/chip.iface";
export class ChipConditional implements IChipConditional {
  type: "conditional";
  conditions: IChipCondition[];
  chip: IChip;

  constructor(conditions: IChipCondition[], chip: IChip) {
    this.type = "conditional";
    this.conditions = conditions;
    this.chip = chip;
  }
}
