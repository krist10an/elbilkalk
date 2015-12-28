export class UnitPreference {
  normalized(input) {
    return input*100;
  }
  unitName() {
    return "kWh/100km";
  }
}
