import { IChipCondition } from "./../interfaces/chip.iface";
export class ChipCondition implements IChipCondition {
  entity: string;
  state_not?: string | undefined;
  state?: string | undefined;

  constructor(
    entity: string,
    state_not?: string | undefined,
    state?: string | undefined
  ) {
    this.entity = entity;
    this.state_not = state_not;
    this.state = state;

    if (!state_not) {
      delete this.state_not;
    }
    if (!state) {
      delete this.state;
    }
  }
}
