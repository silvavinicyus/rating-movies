import * as Dialog from '@radix-ui/react-dialog';
import { useQuery } from "@tanstack/react-query";
import { PlusCircle } from "lucide-react";
import { AddMovieScore } from "../components/add-movie-score";
import { MovieCard } from "../components/movie-card";
import { IMovie } from "../interfaces/movie";
import { IMovieResponse } from '../interfaces/responses';

interface RatingProps {
  movies: IMovie[] | undefined
}

export function Rating({movies}: RatingProps) {
  const {data: userMoviesResponse} = useQuery<IMovieResponse>({
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/movies/user')
      const data = await response.json()

      return data
    },
    queryKey: ['get-user-movies']
  })
  
  return (
    <div className="grid grid-cols-4 gap-2.5">           
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="w-20 h-20  bg-zinc-500 flex justify-center items-center bg-gradient-to-b from-blue-900 to-blue-950 rounded-md hover:opacity-75">
            <PlusCircle className="size-10 text-white"/>
          </button> 
        </Dialog.Trigger>

        <Dialog.DialogPortal>
          <Dialog.DialogOverlay className="fixed inset-0 bg-black/70" />
          <Dialog.Content className='fixed p-10 space-y-10 right-0 top-0 bottom-0 h-screen min-w-[320px] z-10 bg-zinc-950 border-l border-zinc-900'>
            <div className="space-y-3">
              <Dialog.Title className="text-xl font-bold text-white"> Avaliando Filme </Dialog.Title>
              <Dialog.Description className='text-sm text-zinc-500'> Por favor, escolha o filme a ser avaliado e adicione sua nota. </Dialog.Description>
            </div>

            <AddMovieScore movies={movies}/>
          </Dialog.Content>
        </Dialog.DialogPortal>
      </Dialog.Root>

      {
        userMoviesResponse && userMoviesResponse.length > 0 && userMoviesResponse.map(({director, score, title, id}) => {
          return (
            <MovieCard key={id} director={director} score={score} title={title}/>
          )
        })
      }      
    </div>
  )
}