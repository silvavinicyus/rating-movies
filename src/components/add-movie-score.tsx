import { zodResolver } from "@hookform/resolvers/zod"
import * as Dialog from '@radix-ui/react-dialog'
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Check, Loader2, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { IMovie } from "../interfaces/movie"

interface AddMovieScoreProps {
  movies: IMovie[] | undefined
}

const addMovieScoreSchema = z.object({
  title: z.string(),
  score: z.string()
})

type AddMovieScoreSchema = z.infer<typeof addMovieScoreSchema>

export function AddMovieScore ({movies}: AddMovieScoreProps) {
  const queryClient = useQueryClient()  

  const {register, handleSubmit, formState, watch} = useForm<AddMovieScoreSchema>({
    resolver: zodResolver(addMovieScoreSchema)
  })
  const movie_id = watch('title')

  const { mutateAsync } = useMutation({
    mutationFn: async ({ score }: AddMovieScoreSchema) => {
      await fetch(`http://localhost:3000/movies/${movie_id}`, {
        method: 'POST',
        body: JSON.stringify({
          score: +score
        }),   
        headers: {
          'Content-Type': 'application/json'
        }      
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-movies', 'get-user-movies']
      })
    }
  })
  
  async function createMovieScore({score, title}: AddMovieScoreSchema) {    
    await mutateAsync({score, title})
  }

  return(        
    <form className="w-full space-y-6 text-white" onSubmit={handleSubmit(createMovieScore)}>
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="title"> Titulo </label>
        
          <select {...register('title')} className="rounded-lg text-base bg-zinc-800 px-5 h-10">
            <option value="">Selecione uma fruta</option>
            {
              movies?.map((movie) => {
                return (
                  <option key={movie.id} value={String(movie.id)} className="text-base">{movie.title} </option>
                )
              })
            }
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="movie_id"> Id </label>
        <input           
          id="movie_id" 
          type="text" 
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
          readOnly
          value={movie_id}
        />        
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="slug"> Nota </label>
        <input
          {...register("score")}
          id="slug"
          type="text" 
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"          
        />
      </div>

      <div className="flex items-center justify-end gap-2">
        <Dialog.Close>
          <button className='flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700'>
            <X className="size-3" />
            Cancel
          </button>
        </Dialog.Close>
        
        <button disabled={formState.isSubmitting} type="submit" className="flex items-center gap-2 bg-teal-400 text-teal-950 py-1.5 px-2.5 rounded-md  border border-zinc-800 hover:border-zinc-700">
          { formState.isSubmitting ? <Loader2 className="size-3 animate-spin" /> : <Check className="size-3" /> }
          Save
        </button>
      </div>
    </form>
  )
}