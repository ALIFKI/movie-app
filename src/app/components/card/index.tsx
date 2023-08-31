import { DetailedHTMLProps, FC, HTMLAttributes, MouseEventHandler, Suspense } from 'react'
import styles from './style.module.css'
import Image from 'next/image'
import { config } from '@/app/config/config'


export interface CardProps {
  image : string,
  title : string,
  id? : number,
  rating : number,
  onClick : MouseEventHandler<HTMLDivElement>
}

const Card : FC<CardProps> = ({image,title,id,rating,onClick})=>{
  return (
    <>
      <div className={`${styles.card} rounded-lg h-auto w-full backdrop-blur-sm p-3 relative cursor-pointer`} onClick={onClick}>
        <div className="absolute rounded-md flex backdrop-blur-sm bg-[rgba(0,0,0,0.6)] h-9 justify-center items-center top-5 left-5 px-4">
          <Image
            src={'/assets/images/star.svg'}
            alt='star'
            height={16}
            width={16}
            >

          </Image>
          <p className='text-[var(--warning)]'>{rating}</p>
        </div>
        <div className="rounded-lg overflow-hidden">
          <Suspense fallback={<>LOADING</>}>
            <Image 
            className='w-full transition-transform transform-gpu hover:scale-110' 
            src={`${config.img_path}${image}`} 
            height={300} 
            width={200} 
            alt='no image'/>
          </Suspense>
        </div>

        <div className="flex py-3">
          <h3 className='font-bold poppins-font'>{title}</h3>
        </div>
      </div>
    </>
  )
}

export default Card