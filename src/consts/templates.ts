import { getAttributeOf } from "../helpers/templating";
import { OpelCorsa } from "./entities";

export const OpelCorsaProblemTemplate = getAttributeOf(
  OpelCorsa,
  "problemShortTitle"
);

export const OpelCorsaProximityLocationTemplate = `{% set car_lat = state_attr('sensor.opel_corsa' ,'latitude')%}{% set
    car_lon = state_attr('sensor.opel_corsa' ,'longitude')%}{% set
    mom_distance = distance(car_lat, car_lon,'person.barbara') %}{% set
    kacper_distance = distance(car_lat, car_lon,'person.kacper') %}{% set
    home_distance = distance(car_lat, car_lon, 'zone.home')%}{% if
    home_distance < kacper_distance and home_distance <mom_distance %}Thuis{%
    elif mom_distance < kacper_distance%}met Barbara{%else%}met
    Kacper{%endif%}`;
