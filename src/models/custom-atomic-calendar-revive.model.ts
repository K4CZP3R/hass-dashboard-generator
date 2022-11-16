import { ICustomAtomicCalendarRevive } from "./../interfaces/card.iface";
export class CustomAtomicCalendarRevive implements ICustomAtomicCalendarRevive {
  type: "custom:atomic-calendar-revive";
  firstDayOfWeek: number;
  maxDaysToShow: number;
  refreshInterval: number;
  showWeekDay: boolean;
  defaultMode: "Calendar" | "Event";
  showCurrentEventLine: boolean;
  showProgressBar: boolean;
  enableModeChange: boolean;
  entities: string[];

  constructor(
    firstDayOfWeek: number,
    maxDaysToShow: number,
    refreshInterval: number,
    showWeekDay: boolean,
    defaultMode: "Calendar" | "Event",
    showCurrentEventLine: boolean,
    showProgressBar: boolean,
    enableModeChange: boolean,
    entities: string[]
  ) {
    this.type = "custom:atomic-calendar-revive";
    this.firstDayOfWeek = firstDayOfWeek;
    this.maxDaysToShow = maxDaysToShow;
    this.refreshInterval = refreshInterval;
    this.showWeekDay = showWeekDay;
    this.defaultMode = defaultMode;
    this.showCurrentEventLine = showCurrentEventLine;
    this.showProgressBar = showProgressBar;
    this.enableModeChange = enableModeChange;
    this.entities = entities;
  }
}
