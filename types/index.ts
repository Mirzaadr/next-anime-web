

export interface AnimeProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  episodes: number;
  episodes_aired: number;
  score: string;
}

export interface MangaProp {
  id: string;
  name: string;
  image: {
    original: string;
  };
  kind: string;
  status: string;
  volumes: number;
  chapters: number;
  score: string;
  
  // "id": 152472,
  // "name": "Tensei shita kedo Cheat Nouryoku wo Tsukawanaide Ikitemiru",
  // "russian": "Я перевоплотился, но постараюсь жить, не используя свои читерские способности",
  // "image": {
  //     "original": "/system/mangas/original/152472.jpg?1702868631",
  //     "preview": "/system/mangas/preview/152472.jpg?1702868631",
  //     "x96": "/system/mangas/x96/152472.jpg?1702868631",
  //     "x48": "/system/mangas/x48/152472.jpg?1702868631"
  // },
  // "url": "/mangas/152472-tensei-shita-kedo-cheat-nouryoku-wo-tsukawanaide-ikitemiru",
  // "kind": "manga",
  // "score": "0.0",
  // "status": "released",
  // "volumes": 3,
  // "chapters": 15,
  // "aired_on": "2021-03-14",
  // "released_on": "2023-04-14"
}