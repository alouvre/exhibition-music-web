export interface Song {
  id: string;
  title: string;
  album: string;
  duration: string;
  youtubeId?: string;
}

export interface Album {
  title: string;
  year: string;
  cover: string;
}

export interface TimelineItem {
  year: string;
  event: string;
}

export interface Musician {
  id: string;
  name: string;
  genre: string;
  origin: string;
  activeSince: string;
  biography: string;
  quote: string;
  image: string;
  songs: Song[];
  albums: Album[];
  timeline: TimelineItem[];
}
