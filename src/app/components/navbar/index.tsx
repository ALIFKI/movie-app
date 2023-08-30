'use client'
import Image from 'next/image'

export default function NavbarComponents(){

  return (
    <nav className="bg-gray[var(--gray)] top-0 w-full absolute z-[100]">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute -inset-0">
          </div>
          <div className="flex flex-1 items-center justify-between sm:items-stretch sm:justify-between">
            <div className="flex flex-shrink-0 items-center">
              <Image
                src="/assets/images/logo.png"
                width={500}
                height={500}
                className="h-8 w-auto"
                alt="Picture of the author"
              />
              {/* <img className="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt="Your Company"> */}
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <a href="#" className="text-gray-300 hover:bg-gray hover:text-white rounded-md px-3 py-2 text-sm font-medium poppins-font">Movie</a>
                <a href="#" className="text-gray-300 hover:bg-gray hover:text-white rounded-md px-3 py-2 text-sm font-medium poppins-font">TV Show</a>
                <a href="#" className="text-gray-300 hover:bg-gray hover:text-white rounded-md px-3 py-2 text-sm font-medium poppins-font">Suggeset Me</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="sm:hidden" id="mobile-menu">
        <div className="space-y-1 px-2 pb-3 pt-2">
          <a href="#" className="bg-gray-900 text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Dashboard</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Team</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Projects</a>
          <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Calendar</a>
        </div>
      </div> */}
    </nav>
  )
}