export interface journeyData {
  id: number;
  departure: string;
  return: string;
  departureStationId: number;
  departureStationName: string;
  returnStationId: number;
  returnStationName: string;
  distance: number;
  duration: number;
}

export interface stationData {
  id: number;
  stopId: number;
  nimi: string;
  namn: string;
  name: string;
  osoite: string;
  adress: string;
  kaupunki: string;
  stad: string;
  operaattor: string;
  kapasiteet: number;
  xpos: number;
  ypos: number;
}
