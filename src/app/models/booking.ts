export enum BookingStatus {
  REQUESTED = "REQUESTED",
  PAID = "PAID",
  RESERVED = "RESERVED",
  NOTIFIED_RESERVATION = "NOTIFIED_RESERVATION",
  ANNULLED = "ANNULLED",
}

export class Booking {
  public id: string | undefined;
  public tripId: string;
  public travelerId: string;
  public passengersCount: number;
  public status: BookingStatus = BookingStatus.REQUESTED;
  public price = 0;
  public hasPremiumFoods = false;
  public extraLuggageKilos = 0;
  public operatorReserveCode: string | undefined;
  public paymentId: string | undefined;
  constructor(tripId: string, travelerId: string, passengersCount: number) {
    this.tripId = tripId;
    this.travelerId = travelerId;
    this.passengersCount = passengersCount;
  }
}
