import { zodResolver } from "@hookform/resolvers/zod"
import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Check, Loader2, X } from "lucide-react"
import { useForm } from "react-hook-form"
import { z } from "zod"
import * as Dialog from '@radix-ui/react-dialog'

const addMovieSchema = z.object({
  title: z.string().min(2),
  director: z.string().min(2)
})

type AddMovieSchema = z.infer<typeof addMovieSchema>

export function AddMovie() {
  const queryClient = useQueryClient()

  const { register, handleSubmit, formState } = useForm<AddMovieSchema>({
    resolver: zodResolver(addMovieSchema)
  })

  const { mutateAsync } = useMutation({
    mutationFn: async ({director, title}: AddMovieSchema) => {
      await fetch('http://localhost:3000/movies', {
        method: 'POST',
        body: JSON.stringify({
          title,
          director
        }),
        headers: {
          'Content-Type': 'application/json'
        } 
      })
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-movies']
      })
    }
  })

  async function createMovie({director, title}: AddMovieSchema) {    
    await mutateAsync({director, title})
  }

  return(
    <form className="w-full space-y-6 text-white" onSubmit={handleSubmit(createMovie)}>
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="title"> Titulo </label>
        <input           
          id="title" 
          type="text" 
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
          {...register('title')}          
        />        
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="director"> Diretor </label>
        <input           
          id="director" 
          type="text" 
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
          {...register('director')}          
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