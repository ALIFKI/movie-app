'use client'
import Image from 'next/image'
import dynamic from 'next/dynamic'
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation'
import Loading from '@/app/components/Loading';

const NavBar = dynamic(()=> import('../../components/navbar'))
const MovieCard = dynamic(()=>import('../../components/card'))
export default function SearchPage() {
  const [movies, setMovies] = useState<MovieList>({
    results : []
  });

  const router = useRouter();
  const params = useSearchParams();

  const [nextPage,setNextPage] =  useState<number>(1)
  const [search,setSearch] = useState<string | null>(null)
  const [loading,setLoading] = useState<Boolean>(false)

  const cardClick = (id:any)=>()=>{
    router.push('/pages/detail/'+id)
  }

  const loadData = async (search? : string)=>{
    setLoading(true)
    const searchParams = params.get('search')
    try {
      const  response = await fetch(`/api/3/search/movie?query=${searchParams}&api_key=d212dc1bfc2d8009f736f68f2e71938f&page=${nextPage}`);
      const jsonData = await response.json();
      setMovies({
        ...movies,
        results: [...movies?.results as Array<any>,...jsonData['results']],
      })
      setNextPage(nextPage + 1)
      setLoading(false)
    } catch (error) {
      console.log(`Error fetching data: ${error}`)
      setLoading(false)
    }
  }

  const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >= document.body.offsetHeight - 200 &&
        !loading
      ) {
        loadData();
      }
    };

    useEffect(() => {
      loadData()
      return () => {
        
      }
    }, [])

    useEffect(()=>{
      window.addEventListener('scroll', handleScroll);
      return ()=>{
        window.removeEventListener('scroll', handleScroll);
      }
    },[loading])
    
  const searchData = async ()=>{
    setLoading(true)
    const searchParams = params.get('search')
    try {
      const  response = await fetch(`/api/3/search/movie?query=${search}&api_key=d212dc1bfc2d8009f736f68f2e71938f&page=${nextPage}`);
      const jsonData = await response.json();
      console.log(jsonData)
      setMovies(jsonData)
      setNextPage(nextPage + 1)
      setLoading(false)
    } catch (error) {
      console.log(`Error fetching data: ${error}`)
      setLoading(false)
    }
  }
  const handleInputChange = (event : React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
  };

  const handleSearch = ()=>{
    router.push(`/pages/search?search=${search}`);
    searchData()
  }
  

  return (
    <>
      <div className="flex fixed inset-0 z-[999] bg-[rgba(0,0,0,0.8)] overflow-hidden justify-center items-center">
        <Loading isLoading></Loading>
      </div>
      <NavBar></NavBar>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div className="relative isolate pt-14">
        <div className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" style={{ clipPath: "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
        <div className="mx-0 w-6/12 py-9">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <div className="text-left">
            <h1 className="text-xl poppins-font font-bold text-white sm:text-5xl">Search Movie</h1>
            <p className="mt-6 leading-1 text-[#8E95A9] poppins-font font-thin text-[12px]">
              List of movies and TV Shows, I, Pramod Poudel have watched till date. Explore what I have watched and also feel free to make a suggestion. 😉
            </p>
          </div>
          <div className="flex justify-start items-center">
            <div className="bg-[rgba(18,24,41,0.7)] h-14 w-[330px] my-7 rounded-md flex justify-start items-center p-4 backdrop-blur-md">
              <span>
                <Image src={"/assets/images/search.svg"} width={20} height={20} alt='search image'></Image>
              </span>
              <input 
                type="text" 
                name="search" 
                id="search" 
                className='bg-[rgba(18,24,41,0)] h-10 w-full mx-5 poppins-font font-thin text-[12px] text-[#475069] outline-none placeholder-[#475069] focus:outline-none' 
                placeholder='Search some awsome movie'
                onChange={handleInputChange}
                ></input>
            </div>
            <button onClick={handleSearch} className="relative flex h-14 w-[121px] bg-[var(--primary)] ml-6 rounded-md hover:bg-[#362C92]">
              <span className='m-auto'>Search</span>
            </button>
          </div>
        </div>
        <div className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]" aria-hidden="true">
          <div className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]" style={{clipPath : "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)"}}></div>
        </div>
      </div>
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 my-4">
        <h1 className='text-normal poppins-font lg:text-[32px] text-[#767E94]'>All ({movies.results?.length})</h1>
      </div>
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {
            movies.results?.map((movie,index)=>{
              return (
                <MovieCard 
                  key={index} 
                  image={movie.poster_path} 
                  title={movie.original_title}
                  rating={movie.vote_average}
                  onClick={cardClick(movie.id)}
                ></MovieCard>
              )
            })
          }
        </div>
      </div>
    </>
  )
}
