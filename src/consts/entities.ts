export const PersonKacper = "person.kacper";
export const PersonBarbara = "person.barbara";
export const PersonWeronika = "person.weronika";
export const PersonJob = "person.job";
export const PersonPuck = "person.puck";

export const Persons = [
  PersonKacper,
  PersonBarbara,
  PersonWeronika,
  PersonJob,
  PersonPuck,
];

export const PersonsLivingInHouse = [
  PersonKacper,
  PersonBarbara,
  PersonWeronika,
];

export const PersonsNotLivingInHouse = Persons.filter(
  (person) => !PersonsLivingInHouse.includes(person)
);

export const AfvalWijzerVandaag = "sensor.mijnafvalwijzer_vandaag";
export const AfvalWijzerMorgen = "sensor.mijnafvalwijzer_morgen";

export const OctoprintTimeLeft = "sensor.octoprint_print_time_left";
export const OctoprintIsPrinting = "binary_sensor.octoprint_printing";

export const OpelCorsa = "sensor.opel_corsa";
export const OpelCorsaProblemActive = "sensor.opel_corsa_problem_active";

export const TemperatureOutside = "sensor.0x00124b00251cde4f_temperature";
export const TemperatureInside = "sensor.0x00124b0022ea03e0_temperature";
export const TemperatureRadiator = "sensor.0x00124b00251ce18d_temperature";

export const IntercomSwitch = "switch.door_intercom_esphome";

export const KitchenLamp = "light.0xec1bbdfffeaad6d2";
export const WeronikaLightStrip = "light.weronika_s_light_strip";
export const TafelLamps = "light.tafel_lampen";
export const WoonkamerLamp = "light.0xd0cf5efffe3191be";
export const MakeupLamp = "light.0x0c4314fffea823c1";
export const KacperLamp = "light.lamp_yeelight";

export const AllGlobalLamps: { [key: string]: string } = {
  Keuken: KitchenLamp,
  "Weronika's Light Strip": WeronikaLightStrip,
  Tafel: TafelLamps,
  Woonkamer: WoonkamerLamp,
  Makeup: MakeupLamp,
  "Kacper's Lamp": KacperLamp,
};

export const DailyEnergyCosts = "sensor.daily_energy_costs";
export const MonthlyEnergyCosts = "sensor.monthly_energy_costs";
