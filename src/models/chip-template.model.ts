import { IChipTemplate } from "./../interfaces/chip.iface";
export class ChipTemplate implements IChipTemplate {
  type: "template";
  entity: string;
  content: string;
  icon?: string | undefined;

  constructor(entity: string, content: string, icon?: string | undefined) {
    this.type = "template";
    this.entity = entity;
    this.content = content;
    this.icon = icon;
  }
}
