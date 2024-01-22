"use server";

import { AnimeCard } from "@/components";
import { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`)
  
  const data = await response.json()

  return (
    data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ))
  )
}

export const fetchMangas = async (page: number) => {
  const response = await fetch(`https://shikimori.one/api/mangas?page=${page}&limit=8&order=popularity`)
  
  const data = await response.json()

  return (
    data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={item.id} anime={item} index={index} />
    ))
  )
}