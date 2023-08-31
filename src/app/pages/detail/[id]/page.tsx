'use client'

import { config } from '@/app/config/config'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'

const NavBar = dynamic(()=> import('../../../components/navbar'))
export default function DetailPage({params} : {params : {id : any}}) {
  const [movie,setMovie] = useState<any>({});
  const [loading,setLoading] = useState<any>()

  useEffect(() => {
    getData();
    return () => {
      
    }
  }, [])
  


  const getData = async ()=>{
    setLoading(true)
    const id = params.id
    try {
      const  response = await fetch(`/api/3/movie/${id}?language=en-US&api_key=d212dc1bfc2d8009f736f68f2e71938f`);
      const jsonData = await response.json();
      console.log(jsonData)
      setMovie(jsonData);
      setLoading(false)
    } catch (error) {
      console.log(`Error fetching data: ${error}`)
      setLoading(false)
    }
  }
  return (
    <>
    <Head>
      <title>My Next.js App</title>
      <meta name="description" content="This is my Next.js app about XYZ." />
      {/* Other metadata and head tags */}
    </Head>
    <NavBar></NavBar>
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 relative">
      <div className="absolute inset-x-0 top-[calc(50%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(50%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#5A4AF4] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath : "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
        <div className="relative left-[calc(10%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#05CE91] to-[#9089fc] opacity-30 sm:left-[calc(10%+36rem)] sm:w-[72.1875rem]" style={{clipPath : "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
      </div>
      <div className="flex relative w-full lg:h-[500px] mt-36">
        <div className="w-full lg:h-[500px] bg-white rounded-[40px] relative overflow-hidden">
          <Image 
            src={`${config.img_path}${movie?.backdrop_path}`}
            height={400}
            width={400}
            alt='movie banner'
            className='w-full h-full object-cover'
            >

          </Image>
        </div>
        <div className="bg-[rgba(19,23,35,0.8)] absolute drop-shadow-md w-[560px] h-[150px] bottom-[-15%] left-10 rounded-lg backdrop-blur-md flex justify-center items-center">
         <p className='text-2xl font-semibold'> {movie?.original_title}</p>
        </div>
      </div>
      <div className="flex mt-44">
        <div className="md:w-full lg:w-6/12 items-center justify-center flex">
          <div className='w-[400px] h-[700px]'>
            <Image 
              src={`${config.img_path}${movie?.poster_path}`}
              height={400}
              width={400}
              alt='movie banner'
              className='w-full object-cover rounded-lg'
              >
            </Image>
          </div>
        </div>
        <div className="md:w-full lg:w-6/12 items-start justify-start">
          <div className="flex justify-start items-start flex-col">
            <div className="text-xl font-bold poppins-font">
              {movie?.tagline}
            </div>
            <div className="max-w-[70%] poppins-font mt-8">
              <p>{movie?.overview}</p>
            </div>
            <div className="relative mt-8">
              <div className="rounded-md flex backdrop-blur-sm bg-[rgba(0,0,0,0.6)] h-9 justify-center items-center px-4">
                <Image
                  src={'/assets/images/star.svg'}
                  alt='star'
                  height={16}
                  width={16}
                  >

                </Image>
                <p className='text-[var(--warning)]'>{movie?.vote_average}</p>
              </div>
            </div>
            <div className="relative mt-8">
              <h1 className='text-normal poppins-font text-[#767E94]'>status</h1>
              <p className='text-normal font-semibold poppins-font'>{movie?.status}</p>
            </div>
            <div className="relative mt-8">
              <h1 className='text-normal poppins-font text-[#767E94]'>Release Date</h1>
              <p className='text-normal font-semibold poppins-font'>{movie?.release_date}</p>
            </div>
            {/* <div className="relative mt-8">
              <h1 className='text-normal poppins-font text-[#767E94]'>Run Time</h1>
              <p className='text-normal font-semibold poppins-font'>Movie</p>
            </div> */}
            <div className="relative mt-8">
              <h1 className='text-normal poppins-font text-[#767E94]'>Genres</h1>
              <div className="flex flex-row">
                {movie?.genres ? (movie?.genres.map((genre: {id : number,name : string},index : any)=>{
                  return (<p key={index} className='text-normal font-semibold poppins-font'>{genre.name},</p>)
                })) : (null)}
              </div>
              
            </div>
          </div>

        </div>
      </div>
    </div>
    </>
  )
  
}