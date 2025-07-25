export interface TravelEntryInterface {
  head: string;
  body: string;
  subbody?: string;
}

export interface TravelsInterface {
  [key: string]: TravelEntryInterface;
}
