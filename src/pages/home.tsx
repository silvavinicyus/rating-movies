import { Copyright, Import, ListVideo, LogOut, PlusCircle, Tags } from 'lucide-react'
import OxeanLogoBlue from '../assets/oxean-logo-blue.svg'
import { GridTable } from '../components/grid-table'
import { useState } from 'react'
import { NavigationButton } from '../components/navigation-button'
import { Rating } from './rating'
import { IMovie } from '../interfaces/movie'
import { keepPreviousData, useQuery } from '@tanstack/react-query'

type IMovieResponse = IMovie[]

export function Home() {  
  const [mainComponent, setMainComponent] = useState('grid')  

  function handleMainComponent(component: string) {
    component === 'grid' ? setMainComponent('grid') : setMainComponent('rating')
  }

  const {data: moviesResponse} = useQuery<IMovieResponse>({
    queryFn: async () => {
      const response = await fetch('http://localhost:3333/movies')
      const data = await response.json()

      return data
    },
    queryKey: ['get-movies'],
    placeholderData: keepPreviousData
  })

  console.log(moviesResponse)
  const movies = [
    {
      "id": 1,
      "title": "Joao",
      "director": "Joao",
      "created_at": "2024-02-29T00:32:48.651Z",
      "updated_at": "2024-02-29T00:32:48.651Z",
      "score": 3.7
    },
    {
      "id": 2,
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "created_at": "2024-02-29T01:31:12.129Z",
      "updated_at": "2024-02-29T01:31:12.129Z",
      "score": 7.0
    },
    {
      "id": 3,
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "created_at": "2024-02-29T01:31:12.136Z",
      "updated_at": "2024-02-29T01:31:12.136Z",
      "score": 3.0
    },
    {
      "id": 4,
      "title": "The Dark Knight",
      "director": "Christopher Nolan",
      "created_at": "2024-02-29T01:31:12.139Z",
      "updated_at": "2024-02-29T01:31:12.139Z",
      "score": 8.0
    },
    {
      "id": 5,
      "title": "Pulp Fiction",
      "director": "Quentin Tarantino",
      "created_at": "2024-02-29T01:31:12.141Z",
      "updated_at": "2024-02-29T01:31:12.141Z",
      "score": 2.0
    },
    {
      "id": 6,
      "title": "Schindler's List",
      "director": "Steven Spielberg",
      "created_at": "2024-02-29T01:31:12.142Z",
      "updated_at": "2024-02-29T01:31:12.142Z",
      "score": 9.0
    },
    {
      "id": 7,
      "title": "Inception",
      "director": "Christopher Nolan",
      "created_at": "2024-02-29T01:31:12.144Z",
      "updated_at": "2024-02-29T01:31:12.144Z",
      "score": 4.0
    },
    {
      "id": 8,
      "title": "Fight Club",
      "director": "David Fincher",
      "created_at": "2024-02-29T01:31:12.146Z",
      "updated_at": "2024-02-29T01:31:12.146Z",
      "score": 6.0
    },
    {
      "id": 9,
      "title": "Forrest Gump",
      "director": "Robert Zemeckis",
      "created_at": "2024-02-29T01:31:12.148Z",
      "updated_at": "2024-02-29T01:31:12.148Z",
      "score": 10.0
    },
    {
      "id": 10,
      "title": "The Matrix",
      "director": "The Wachowskis",
      "created_at": "2024-02-29T01:31:12.149Z",
      "updated_at": "2024-02-29T01:31:12.149Z",
      "score": 1.0
    },
    {
      "id": 11,
      "title": "The Lord of the Rings: The Fellowship of the Ring",
      "director": "Peter Jackson",
      "created_at": "2024-02-29T01:31:12.151Z",
      "updated_at": "2024-02-29T01:31:12.151Z",
      "score": 6.0
    },
    {
      "id": 12,
      "title": "Goodfellas",
      "director": "Martin Scorsese",
      "created_at": "2024-02-29T01:31:12.152Z",
      "updated_at": "2024-02-29T01:31:12.152Z",
      "score": 4.0
    },
    {
      "id": 13,
      "title": "The Silence of the Lambs",
      "director": "Jonathan Demme",
      "created_at": "2024-02-29T01:31:12.154Z",
      "updated_at": "2024-02-29T01:31:12.154Z",
      "score": 2.0
    },
    {
      "id": 14,
      "title": "The Usual Suspects",
      "director": "Bryan Singer",
      "created_at": "2024-02-29T01:31:12.155Z",
      "updated_at": "2024-02-29T01:31:12.155Z",
      "score": 7.0
    },
    {
      "id": 15,
      "title": "Se7en",
      "director": "David Fincher",
      "created_at": "2024-02-29T01:31:12.161Z",
      "updated_at": "2024-02-29T01:31:12.161Z",
      "score": 5.0
    },
    {
      "id": 16,
      "title": "The Godfather: Part II",
      "director": "Francis Ford Coppola",
      "created_at": "2024-02-29T01:31:12.163Z",
      "updated_at": "2024-02-29T01:31:12.163Z",
      "score": 3.0
    },
    {
      "id": 17,
      "title": "The Lord of the Rings: The Return of the King",
      "director": "Peter Jackson",
      "created_at": "2024-02-29T01:31:12.165Z",
      "updated_at": "2024-02-29T01:31:12.165Z",
      "score": 8.0
    },
    {
      "id": 18,
      "title": "City of God",
      "director": "Fernando Meirelles",
      "created_at": "2024-02-29T01:31:12.168Z",
      "updated_at": "2024-02-29T01:31:12.168Z",
      "score": 9.0
    },
    {
      "id": 19,
      "title": "Interstellar",
      "director": "Christopher Nolan",
      "created_at": "2024-02-29T01:31:12.170Z",
      "updated_at": "2024-02-29T01:31:12.170Z",
      "score": 10.0
    },
    {
      "id": 20,
      "title": "Saving Private Ryan",
      "director": "Steven Spielberg",
      "created_at": "2024-02-29T01:31:12.172Z",
      "updated_at": "2024-02-29T01:31:12.172Z",
      "score": 1.0
    },
    {
      "id": 21,
      "title": "The Green Mile",
      "director": "Frank Darabont",
      "created_at": "2024-02-29T01:31:12.174Z",
      "updated_at": "2024-02-29T01:31:12.174Z",
      "score": 1.0
    },
    {
      "id": 22,
      "title": "The Shawshank Redemption",
      "director": "Frank Darabont",
      "created_at": "2024-02-29T01:31:36.907Z",
      "updated_at": "2024-02-29T01:31:36.907Z",
      "score": 10.0
    },
    {
      "id": 123,
      "title": "The Godfather",
      "director": "Francis Ford Coppola",
      "created_at": "2024-02-29T01:34:43.335Z",
      "updated_at": "2024-02-29T01:34:43.335Z",
      "score": 6.0
    }
  ]

  

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
              <span className='text-base text-white font-bold'> Vinícyus Silva</span>
              <span className='text-xs text-zinc-300'> silvavinicyus </span>
            </div>

            <button
              className='w-20 bg-red-400 rounded-full text-white flex gap-2 justify-center items-center ml-5 h-9 hover:bg-red-400/85'
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
              <NavigationButton 
                onClick={() => {}}
                selected={false}
                title='Adicionar Filme'
             >
              <PlusCircle className="size-4"/>
             </NavigationButton>
      

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
              ? <GridTable movies={movies} /> 
              : <Rating movies={movies}  />
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