import { Copyright, Import, ListVideo, LogOut, PlusCircle, Tags } from 'lucide-react'
import OxeanLogoBlue from '../assets/oxean-logo-blue.svg'
import { GridTable } from '../components/grid-table'
import { useState } from 'react'
import { NavigationButton } from '../components/navigation-button'
import { Rating } from './rating'
import { keepPreviousData, useQuery } from '@tanstack/react-query'
import { IMovieResponse } from '../interfaces/responses'
import * as Dialog from '@radix-ui/react-dialog'
import { AddMovie } from '../components/add-movie'
import { useNavigate } from 'react-router-dom'
import { IUser } from '../interfaces/user'
import { useAuth } from '../hooks/auth'



export function Home() {
  const [mainComponent, setMainComponent] = useState('grid')
  const navigate = useNavigate()
  const { logout } = useAuth()
  
  const user = JSON.parse(localStorage.getItem("user") ?? "") as IUser
  const token = JSON.parse(localStorage.getItem("token") ?? "")

  if(!user || !token) {
    navigate("/")
  }

  function handleMainComponent(component: string) {
    component === 'grid' ? setMainComponent('grid') : setMainComponent('rating')
  }

  async function handleLogout (){
    await logout()
    navigate('/')
  }

  const {data: moviesResponse} = useQuery<IMovieResponse>({
    queryFn: async () => {
      const response = await fetch('http://localhost:3000/movies', {        
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      const data = await response.json()

      return data
    },
    queryKey: ['get-movies'],
    placeholderData: keepPreviousData
  })

  return (    
      <div className="h-screen flex flex-col max-w-[1200px] mx-auto justify-between py-4">
        <header className="flex justify-between items-center h-16">
          <div className='flex gap-4 items-center'>
            <img src={OxeanLogoBlue} />
            <span className='font-bold text-base text-white'>OxeanBits</span>            
          </div>

          <span className='text-white font-bold text-xl'>Rating Movies</span>

          <div className='flex gap-3 items-center'>
            <div className='flex flex-col items-center w-28 gap-1.5'>
              <span className='text-base text-white font-bold'> { user.username } </span>
              <span className='text-xs text-zinc-300'> { user.email } </span>
            </div>

            <button
              className='w-20 bg-red-400 rounded-full text-white flex gap-2 justify-center items-center ml-5 h-9 hover:bg-red-400/85'
              onClick={handleLogout}
            > 
              Sair 
              <LogOut className='size-4'/>
            </button>
          </div>
        </header>        

        <main className="flex-1 flex flex-col py-3"> 
          <nav className="flex pb-1 justify-between">
            <div className='flex gap-1'>
              <NavigationButton
                onClick={() => handleMainComponent('grid')}
                selected={mainComponent === 'grid'}
                title='Movies'
              > 
                <ListVideo className="size-4" /> 
              </NavigationButton>
              

              <NavigationButton 
                onClick={() => handleMainComponent('rating')} 
                selected={mainComponent === 'rating'}
                title='Avaliações'
              >
                <Tags className="size-4" />              
              </NavigationButton>
            </div>


            <div className='flex gap-1'>
              <Dialog.Root>
                <Dialog.Trigger asChild>
                  <NavigationButton 
                    onClick={() => {}}
                    selected={false}
                    title='Adicionar Filme'
                  >
                    <PlusCircle className="size-4"/>
                  </NavigationButton>
                </Dialog.Trigger>

                <Dialog.DialogPortal>
                  <Dialog.DialogOverlay className="fixed inset-0 bg-black/70" />
                  <Dialog.Content className='fixed p-10 space-y-10 right-0 top-0 bottom-0 h-screen min-w-[320px] z-10 bg-zinc-950 border-l border-zinc-900'>
                    <div className="space-y-3">
                      <Dialog.Title className="text-xl font-bold text-white"> Crie um filme </Dialog.Title>
                      <Dialog.Description className='text-sm text-zinc-500'> Por favor, adicione o nome do filme e seu diretor. </Dialog.Description>
                    </div>

                    <AddMovie />
                  </Dialog.Content>
                </Dialog.DialogPortal>
              </Dialog.Root>
              
      

              <NavigationButton 
                onClick={() => {}}
                selected={false}
                title='Importar'
              >
                <Import className='size-4' />
              </NavigationButton>
            </div>
          </nav>
          <div className='w-full h-0.5 bg-zinc-500 mt-1 mb-5' />

          <div className='flex w-full justify-center'>
            {              
              mainComponent === 'grid' 
              ? <GridTable movies={moviesResponse} /> 
              : <Rating movies={moviesResponse}  />
            }                              
          </div>
        </main>

        <footer className="flex justify-center items-center bg-gray-900 h-14 gap-32">     
          <div className='flex gap-4 items-center'>
            <img src={OxeanLogoBlue} />
            <span className='font-bold text-base text-white'>OxeanBits</span>
          </div>

          <a href='https://github.com/silvavinicyus' className='flex gap-2 text-white items-center'>
            <Copyright className='size-4'/>         
            <span>2024</span>
            <span>Vinicyus Silva</span>
          </a>
        </footer>
      </div>
  )
}