export interface Apple {
  id?: number;
  date: string;
  color: string;
  attendees: Attendees[];
}
export interface Attendees {
  name: string;
}
