"use server";

import { AnimeCard } from "@/components";
import MangaCard from "@/components/MangaCard";
import { AnimeProp, MangaProp } from "@/types";

export const fetchAnime = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
  
  const data = await response.json()

  return (
    data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ))
  )
}

export const fetchManga = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/mangas?page=${page}&limit=8&order=popularity`)
  
  const data = await response.json()

  return (
    data.map((item: MangaProp, index: number) => (
      <MangaCard key={item.id} manga={item} index={index} />
    ))
  )
}