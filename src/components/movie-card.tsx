enum ScoreColors {
  RED = 'red',
  GREEN = 'green'
}

interface MovieCardProps {
  title: string
  director: string
  score: number
}

function pickScoreColor(score: number): ScoreColors {
  return score >= 7 ? ScoreColors.GREEN : ScoreColors.RED
}

export function MovieCard ({title, director, score}: MovieCardProps) {
  const scoreColor = pickScoreColor(score)    

  return (
    <div className='w-72 h-36 bg-zinc-500 px-6 py-6 flex flex-col justify-between bg-gradient-to-b from-blue-900 to-blue-950 rounded-md'>
      <div className='flex w-full justify-between '>
        <span className='text-white text-2xl font-bold'> {title}</span>
        <div className='flex items-center justify-center'>
          <span className={`relative w-12 h-12 ${scoreColor === ScoreColors.RED ? 'bg-red-500' : 'bg-green-400'}  rounded-full mix-blend-overlay`}/>
          <span className={`absolute w-12 h-12 border ${scoreColor === ScoreColors.RED ? 'border-red-500' : 'border-green-400'}  flex items-center justify-center rounded-full text-white font-bold ${scoreColor === ScoreColors.RED ? 'shadow-red-600' : 'shadow-green-500'}`}> {score} </span>
        </div>
      </div>

      <span className='text-zinc-300 text-xl'> {director} </span>
    </div>
  )
}