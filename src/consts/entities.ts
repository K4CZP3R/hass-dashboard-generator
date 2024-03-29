import { HassWs } from "./../helpers/hass-ws";
import { DependencyProviderService } from "./../helpers/dependency-provider";
import { HassApi } from "homeassistant-ws";
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
export const IntercomBellActive = "binary_sensor.bell_active_intercom_esphome";

export const KitchenLamp = "light.0xec1bbdfffeaad6d2";
export const WeronikaLightStrip = "light.weronika_s_light_strip";
export const TafelLamps = "light.tafel_lampen";
export const WoonkamerLamp = "light.0xd0cf5efffe3191be";
export const MakeupLamp = "light.0x0c4314fffea823c1";
export const KacperLamp = "light.lamp_yeelight";
export const KacperLightStrip = "light.light_strip";
export const KacperTwinkly = "light.lights_twinkly";
export const LightsOutside = "switch.smart_plug_2_tuya";

export const AllGlobalLamps: { [key: string]: string } = {
  Keuken: KitchenLamp,
  "Weronika's Light Strip": WeronikaLightStrip,
  Tafel: TafelLamps,
  Woonkamer: WoonkamerLamp,
  Makeup: MakeupLamp,
  "Kacper's Lamp": KacperLamp,
  "Lichtjes buiten": LightsOutside,
};

export const DailyEnergyCosts = "sensor.daily_energy_costs";
export const MonthlyEnergyCosts = "sensor.monthly_energy_costs";
export const SpotifyKacper = "media_player.kapcslock_spotify";
export const AgendaKacper = "calendar.kacper_s_agenda";

export function getDynamicEntities(config: {
  prefix?: string;
  shouldInclude?: string;
  suffix?: string;
  equalsTo?: string;
}) {
  const hassWs = DependencyProviderService.getImpl<HassWs>("hassWs");
  return hassWs.entities.filter((entity) => {
    if (config.equalsTo && entity.entity_id !== config.equalsTo) {
      return false;
    }
    if (config.prefix && !entity.entity_id.startsWith(config.prefix)) {
      return false;
    }
    if (config.suffix && !entity.entity_id.endsWith(config.suffix)) {
      return false;
    }
    if (
      config.shouldInclude &&
      !entity.entity_id.includes(config.shouldInclude)
    ) {
      return false;
    }

    return true;
  });
}

export const DieselPrice = "sensor.tankstation_oss_diesel_stats";
export const BenzinePrice = "sensor.tankstation_oss_benzine_stats";

export const DieselPrices = { "De Kock (zelfservice)": "sensor.dfp_diesel_b7_oss_de_kock_self_service", "Shell Ruwaard": "sensor.dfp_diesel_b7_oss_de_ruwaard", "Tango": "sensor.dfp_diesel_b7_oss_dr_saal_v_zwanenbergsingel" }