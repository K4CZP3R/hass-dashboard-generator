import { ChipBack } from "./../models/chip-back.model";
import { getStateOf } from "./../helpers/templating";
import { ChipTemplate } from "./../models/chip-template.model";
import { ChipCondition } from "./../models/chip-condition.model";
import { ChipEntity } from "./../models/chip-entity.model";
import {
  AfvalWijzerMorgen,
  AfvalWijzerVandaag,
  OctoprintIsPrinting,
  OctoprintTimeLeft,
  OpelCorsa,
  OpelCorsaProblemActive,
  PersonsLivingInHouse,
  PersonsNotLivingInHouse,
  TemperatureOutside,
} from "./../consts/entities";
import { CustomMushroomChipsCard } from "./../models/custom-mushroom-chips-card.model";
import { ChipConditional } from "../models/chip-conditional.model";
import {
  OpelCorsaProblemTemplate,
  OpelCorsaProximityLocationTemplate,
} from "../consts/templates";

export default new CustomMushroomChipsCard([
  new ChipBack(),
  ...PersonsLivingInHouse.map((person) => new ChipEntity(person, true)),
  ...PersonsNotLivingInHouse.map(
    (person) =>
      new ChipConditional(
        [new ChipCondition(person, undefined, "home")],
        new ChipEntity(person, true)
      )
  ),
  new ChipConditional(
    [new ChipCondition(AfvalWijzerVandaag, "Geen")],
    new ChipTemplate(
      AfvalWijzerVandaag,
      `Vandaag: ${getStateOf(AfvalWijzerVandaag)}`,
      "mdi:trash-can-outline"
    )
  ),
  new ChipConditional(
    [new ChipCondition(AfvalWijzerMorgen, "Geen")],
    new ChipTemplate(
      AfvalWijzerMorgen,
      `Morgen: ${getStateOf(AfvalWijzerMorgen)}`,
      "mdi:trash-can-outline"
    )
  ),
  new ChipConditional(
    [new ChipCondition(OctoprintIsPrinting, undefined, "on")],
    new ChipEntity(OctoprintTimeLeft, false)
  ),
  new ChipConditional(
    [new ChipCondition(OpelCorsaProblemActive, undefined, "Yes")],
    new ChipTemplate(OpelCorsa, OpelCorsaProblemTemplate, "mdi:car")
  ),
  new ChipTemplate(OpelCorsa, OpelCorsaProximityLocationTemplate, "mdi:car"),
  new ChipTemplate(
    TemperatureOutside,
    `Buiten: ${getStateOf(TemperatureOutside)}C`,
    "mdi:thermometer"
  ),
]);
