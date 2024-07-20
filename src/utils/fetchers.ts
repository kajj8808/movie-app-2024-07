import { IFetcherResponse, IMovieDetail } from "../types/interfaces";

const BASE_URL = "https://movies-api.nomadcoders.workers.dev";

export function getPopular(): Promise<IFetcherResponse> {
  return fetch(`${BASE_URL}/popular`).then((res) => res.json());
}

export function getNowPlaying(): Promise<IFetcherResponse> {
  return fetch(`${BASE_URL}/now-playing`).then((res) => res.json());
}

export function getComingSoon(): Promise<IFetcherResponse> {
  return fetch(`${BASE_URL}/coming-soon`).then((res) => res.json());
}

export function getMovie(id: string): Promise<IMovieDetail> {
  return fetch(`${BASE_URL}/movie?id=${id}`).then((res) => res.json());
}

export function makeImagePath(image: string) {
  return `https://image.tmdb.org/t/p/w500${image}`;
}

export function makeBgPath(image: string) {
  return `https://image.tmdb.org/t/p/w780${image}`;
}
