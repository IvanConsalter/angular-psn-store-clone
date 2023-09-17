export interface Game {

  background_image: string;
  name: string;
  released: string;
  metacritic_url: string;
  website: string;
  description_raw: string;
  metacritic: number;
  genres: Array<Genre>;
  screenshots: Array<Screenshot>;
  trailers: Array<Trailer>;
  price?: number;
}

export interface APIResponse<T> {
  results: Array<T>;
}

interface Genre {
  name: string;
}

interface Screenshot {
  image: string;
}

interface Trailer {
  data: {
    max: string;
  };
}
