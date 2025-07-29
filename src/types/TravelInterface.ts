export type TravelEntryType = {
  id: number;
  head: string;
  dates: string;
  body: string;
  subbody?: string;
  img?: string;
};

export type TravelEntriesType = TravelEntryType[];
