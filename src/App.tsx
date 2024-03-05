import { zodResolver } from "@hookform/resolvers/zod"
import { Loader2, MoveRight } from "lucide-react"
import { useForm } from "react-hook-form"
import { useNavigate } from 'react-router-dom'
import { z } from 'zod'
import OxeanLogo from './assets/oxean-logo-white.svg'

const loginSchema = z.object({
  email: z.string(),
  password: z.string()
})

type LoginSchema = z.infer<typeof loginSchema>

function App() {
  const navigate = useNavigate()

  const { register, handleSubmit, formState } = useForm<LoginSchema>({
    resolver: zodResolver(loginSchema)
  })

  async function handleLogin({email, password}: LoginSchema) {    
    console.log({email, password})

    try {
      const result = await fetch('http://localhost:3000/sessions', {
        method: 'POST',
        body: JSON.stringify({
          email,
          password
        })        
      })                  

      if (result.status === 202) {
        navigate('/home')        
      }
    } catch(err) {
      console.log(err)
    } finally {
      //to-do: remover esse finally, deixar por enquanto para teste
      navigate('/home')
    }
  }

  return (
    <div className="w-screen h-screen grid grid-cols-2 text-white">
      <div className="w-full h-full bg-[url('assets/background.png')] bg-center bg-no-repeat bg-cover flex flex-col items-end pr-24">
        <div className="flex-1 flex flex-col justify-center gap-14">

          <div className="flex flex-col gap-3 items-end">
            <img src={OxeanLogo} className="w-32 h-24 bg-zinc mr-12"/>            
            <span className="text-5xl font-bold"> OxeanBits </span>
          </div>

          <div className="w-72 h-0.5 bg-white"/>

          <div className="flex flex-col items-end">
            <span className="text-5xl">Rating</span>
            <span className="text-5xl font-bold">Movies</span>
          </div>
        </div>

        <footer className="items-center text-zinc-400 pb-12">
          <span> hello@oxeanbits.com </span>
        </footer>
      </div>

      <div className="w-full h-full bg-white flex flex-col pl-24">
        <div className="flex-1 flex justify-center flex-col text-zinc-400">
          <span className="mb-12 w-64"> Por favor digite seu email e senha para fazer login. </span>


          <form onSubmit={handleSubmit(handleLogin)}>
            <div className="flex flex-col gap-8 w-full">
              <input 
                className="w-80 h-14 rounded-full pl-7 flex items-center gap-1.5 text-sm border border-zinc-300 focus:border-zinc-600 focus:outline-none focus:font-bold"
                type="text" 
                id="email" 
                placeholder="EMAIL" 
                {...register("email")}
              />

              <input 
                className="w-80 h-14 rounded-full pl-7 flex items-center gap-1.5 text-sm border border-zinc-300 focus:border-zinc-600 focus:outline-none focus:font-bold"
                type="password" 
                id="password" 
                placeholder="PASSWORD" 
                {...register("password")}
              />

              <button 
                disabled={formState.isSubmitting} 
                type="submit"
                className="flex w-36 h-10 bg-blue-800 rounded-full text-white font-bold hover:bg-blue-800/95 text-sm items-center justify-center gap-3"
              > 
                ENTRAR
                {
                  formState.isSubmitting 
                    ? <Loader2 className="size-3 animate-spin" /> 
                    : <MoveRight className="size-5" />
                }              
              </button>
            </div>
          </form>
        </div>
                
        <footer className="flex gap-8 items-center text-zinc-400 pb-12">
          <p> Criar Conta </p>
          <div className="w-2 h-2 bg-zinc-400 border rounded-full"></div>
          <p> Privacy Policy </p>
        </footer>
      </div>
    </div>
  )
}

export default App

