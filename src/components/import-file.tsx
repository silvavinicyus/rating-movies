import { useMutation, useQueryClient } from "@tanstack/react-query"
import { Check, Loader2, X } from "lucide-react"
import { useState } from "react"
import * as Dialog from '@radix-ui/react-dialog'

export function ImportFile() {
  const [type, setType] = useState('movie')
  const [file, setFile] = useState<File | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const queryClient = useQueryClient()

  const formData = new FormData()

  const token = JSON.parse(localStorage.getItem("token") ?? "")

  const { mutateAsync } = useMutation({
    mutationFn: async ( formData: FormData ) => {
      const resource = type === "movie" ? "many-movies" : "movies/user/many"

      await fetch(`http://localhost:3000/${resource}`, {
        method: 'POST',
        body: formData,   
        headers: {          
          'Authorization': `Bearer ${token}`
        }      
      })      
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['get-movies']
      })
      queryClient.invalidateQueries({
        queryKey: ['get-user-movies']
      })
    }
  })  

  async function importMany(formData: FormData) {    
    setIsLoading(true)
    formData.append('file', file!)
    await mutateAsync(formData)
    setIsLoading(false)
  }
  
  return (
    <form className="w-full space-y-6 text-white" onSubmit={() => importMany(formData)}>
      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="title"> Tipo </label>        
        <select onChange={(e) => setType(e.target.value)} className="rounded-lg text-base bg-zinc-800 px-5 h-10">
          <option value=""> Selecione um tipo de importação </option>
          <option value="movie"> Filmes </option>
          <option value="user_movie"> Avaliação de Filmes </option>
        </select>
      </div>

      <div className="space-y-2">
        <label className="text-sm font-medium block" htmlFor="movie_id"> Id </label>
        <input           
          id="movie_id"
          type="file"
          className="border border-zinc-800 rounded-lg px-3 py-2.5 bg-zinc-800/50 w-full text-sm"
          onChange={(e) => setFile(e.target.files![0])}
        />        
      </div>

      <div className="flex items-center justify-end gap-2">
        <Dialog.Close>
          <button className='flex items-center gap-2 py-1.5 px-2.5 rounded-md bg-zinc-900 border border-zinc-800 text-zinc-300 hover:border-zinc-700'>
            <X className="size-3" />
            Cancel
          </button>
        </Dialog.Close>
        
        <button disabled={isLoading} type="submit" className="flex items-center gap-2 bg-teal-400 text-teal-950 py-1.5 px-2.5 rounded-md  border border-zinc-800 hover:border-zinc-700">
          { isLoading ? <Loader2 className="size-3 animate-spin" /> : <Check className="size-3" /> }
          Save
        </button>
      </div>
    </form>
  )
}