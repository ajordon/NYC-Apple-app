export interface Apple {
  date: number;
  color: string;
  attendees: Attendees[];
}

export interface Attendees {
  name: string; // required
}
