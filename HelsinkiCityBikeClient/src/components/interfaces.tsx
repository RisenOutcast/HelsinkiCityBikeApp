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