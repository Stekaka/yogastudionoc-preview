export type DayId = "mon" | "tue" | "wed" | "thu" | "fri" | "sat" | "sun";

export interface ClassItem {
  id: string;
  title: string;
  instructor: string;
  instructorId: string;
  instructorEmail: string;
  day: DayId;
  time: string;
  duration: number;
  level: string;
  capacity: number;
}

export const DAY_LABELS: Record<DayId, string> = {
  mon: "Måndag",
  tue: "Tisdag",
  wed: "Onsdag",
  thu: "Torsdag",
  fri: "Fredag",
  sat: "Lördag",
  sun: "Söndag",
};

export const CLASSES: ClassItem[] = [
  {
    id: "kundalini-mon",
    title: "Kundalini Free Flow",
    instructor: "Anki Bladh",
    instructorId: "anki-bladh",
    instructorEmail: "bladhanki@hotmail.com",
    day: "mon",
    time: "18:00",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12,
  },
  {
    id: "yin-tue",
    title: "Yinyoga Flow med Gong",
    instructor: "Jill Johansson",
    instructorId: "jill-johansson",
    instructorEmail: "hej@yogastudion.com",
    day: "tue",
    time: "17:30",
    duration: 75,
    level: "Alla nivåer",
    capacity: 10,
  },
  {
    id: "gong-tue",
    title: "Gongavslappning",
    instructor: "Malin Wättring",
    instructorId: "malin-wattrring",
    instructorEmail: "hej@yogastudion.com",
    day: "tue",
    time: "19:15",
    duration: 60,
    level: "Alla nivåer",
    capacity: 14,
  },
  {
    id: "kundalini-wed",
    title: "Kundaliniyoga",
    instructor: "Linda Dankert",
    instructorId: "linda-dankert",
    instructorEmail: "hej@yogastudion.com",
    day: "wed",
    time: "18:30",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12,
  },
  {
    id: "medicinsk-thu",
    title: "Medicinsk Yoga",
    instructor: "Linda Dankert",
    instructorId: "linda-dankert",
    instructorEmail: "hej@yogastudion.com",
    day: "thu",
    time: "17:00",
    duration: 90,
    level: "Nybörjare välkomna",
    capacity: 10,
  },
  {
    id: "kundalini-thu",
    title: "Kundaliniyoga",
    instructor: "Anki Bladh",
    instructorId: "anki-bladh",
    instructorEmail: "bladhanki@hotmail.com",
    day: "thu",
    time: "19:00",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12,
  },
  {
    id: "yin-fri",
    title: "Mjuk Yoga, Nidra & Gongvila",
    instructor: "Jill Johansson",
    instructorId: "jill-johansson",
    instructorEmail: "hej@yogastudion.com",
    day: "fri",
    time: "11:30",
    duration: 75,
    level: "Alla nivåer",
    capacity: 12,
  },
];
