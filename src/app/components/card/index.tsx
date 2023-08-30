import styles from './style.module.css'
import Image from 'next/image'

export default function Card(){
  return (
    <>
      <div className={`${styles.card} rounded-lg h-auto w-full backdrop-blur-sm p-3 relative cursor-pointer`}>
        <div className="absolute rounded-md flex backdrop-blur-sm bg-[rgba(0,0,0,0.6)] h-9 justify-center items-center top-5 left-5 px-4">
          <Image
            src={'/assets/images/star.svg'}
            alt='star'
            height={16}
            width={16}
            >

          </Image>
          <p className='text-[var(--warning)]'>6.8</p>
        </div>
        <Image 
          className='w-full rounded-lg' 
          src={'/assets/images/movie.jpeg'} 
          height={300} 
          width={200} 
          alt='no image'></Image>

        <div className="flex py-3">
          <h3>Black Widow</h3>
        </div>
      </div>
    </>
  )
}