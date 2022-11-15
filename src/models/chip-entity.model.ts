import { IChipEntity } from "../interfaces/chip.iface";
export class ChipEntity implements IChipEntity {
  type: "entity";
  entity: string;
  use_entity_picture?: boolean | undefined;

  constructor(entity: string, use_entity_picture?: boolean | undefined) {
    this.type = "entity";
    this.entity = entity;
    this.use_entity_picture = use_entity_picture;
  }
}
