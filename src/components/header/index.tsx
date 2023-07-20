"use client"
import Image from "next/image"
import Logo from "../../../public/assets/logo.svg"
import SpaceShip from "../../../public/assets/spaceship.jpg"
import { ShoppingCartIcon } from "@heroicons/react/20/solid"
import Categorias from "../categories"

export default function Header() {
    // return (

    //     < header className="bg-gray-200" >
    //         <div className="mx-auto max-w-screen-xl px-4 py-2 sm:px-6 lg:px-8">
    //             <div className="flex items-center sm:justify-between sm:gap-4">
    //                 <a href="/" className="hover:scale-105 transition-all">
    //                     <Image  className="h-12" src={Logo} alt="" />
    //                 </a>

    //                 <div
    //                     className="flex flex-1 items-center justify-between gap-8 sm:justify-end">
    //                     <div className="flex gap-4">
    //                         <button
    //                             type="button"
    //                             className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700 sm:hidden"
    //                         >
    //                             <span className="sr-only">Search</span>
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 className="h-5 w-5"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                                 stroke="currentColor"
    //                                 strokeWidth="2"
    //                             >
    //                                 <path
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //                                 />
    //                             </svg>
    //                         </button>

    //                         <a
    //                             href="#"
    //                             className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
    //                         >
    //                             <span className="sr-only">Academy</span>
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 className="h-5 w-5"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                                 stroke="currentColor"
    //                                 strokeWidth="2"
    //                             >
    //                                 <path d="M12 14l9-5-9-5-9 5 9 5z" />
    //                                 <path
    //                                     d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
    //                                 />
    //                                 <path
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
    //                                 />
    //                             </svg>
    //                         </a>

    //                         <a
    //                             href="#"
    //                             className="block shrink-0 rounded-lg bg-white p-2.5 text-gray-600 shadow-sm hover:text-gray-700"
    //                         >
    //                             <span className="sr-only">Notifications</span>
    //                             <svg
    //                                 xmlns="http://www.w3.org/2000/svg"
    //                                 className="h-5 w-5"
    //                                 fill="none"
    //                                 viewBox="0 0 24 24"
    //                                 stroke="currentColor"
    //                                 strokeWidth="2"
    //                             >
    //                                 <path
    //                                     strokeLinecap="round"
    //                                     strokeLinejoin="round"
    //                                     d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
    //                                 />
    //                             </svg>
    //                         </a>
    //                     </div>

    //                     <button
    //                         type="button"
    //                         className="group flex shrink-0 items-center rounded-lg transition"
    //                     >
    //                         <span className="sr-only">Menu</span>
    //                         <Image
    //                             width={40}
    //                             alt="Man"
    //                             src={SpaceShip}
    //                             className="h-10 w-10 rounded-full object-cover"
    //                         />

    //                         <p className="ms-2 hidden text-left text-xs sm:block">
    //                             <strong className="block font-medium">Eric Frusciante</strong>

    //                             <span className="text-gray-500"> eric@frusciante.com </span>
    //                         </p>

    //                         <svg
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
    //                             viewBox="0 0 20 20"
    //                             fill="currentColor"
    //                         >
    //                             <path
    //                                 fillRule="evenodd"
    //                                 d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
    //                                 clipRule="evenodd"
    //                             />
    //                         </svg>
    //                     </button>
    //                 </div>

    //                 <div className="relative hidden sm:block">
    //                     <label className="sr-only" htmlFor="search"> Search </label>

    //                     <input
    //                         className="h-10 w-full rounded-lg border-none bg-white pe-10 ps-4 text-sm shadow-sm sm:w-56"
    //                         id="search"
    //                         type="search"
    //                         placeholder="Search website..."
    //                     />

    //                     <button
    //                         type="button"
    //                         className="absolute end-1 top-1/2 -translate-y-1/2 rounded-md bg-gray-50 p-2 text-gray-600 transition hover:text-gray-700"
    //                     >
    //                         <span className="sr-only">Search</span>
    //                         <svg
    //                             xmlns="http://www.w3.org/2000/svg"
    //                             className="h-4 w-4"
    //                             fill="none"
    //                             viewBox="0 0 24 24"
    //                             stroke="currentColor"
    //                             strokeWidth="2"
    //                         >
    //                             <path
    //                                 strokeLinecap="round"
    //                                 strokeLinejoin="round"
    //                                 d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
    //                             />
    //                         </svg>
    //                     </button>
    //                 </div>
    //             </div>
    //         </div>
    //     </ header>
    // )

    return (

        <nav className="bg-white dark:bg-gray-900 sticky  w-full z-20 top-0 left-0 border-b border-gray-200 dark:border-gray-600">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                <a href="/" className="">
                    <Image src={Logo} width={50} height={50} className="h-8 mr-3" alt="Flowbite Logo" />
                </a>

                <div className="flex md:order-2 gap-x-5">
                    <button
                        type="button"
                        className="group flex shrink-0 items-center rounded-lg transition"
                    >
                        <span className="sr-only">Menu</span>
                        <Image
                            width={40}
                            alt="Man"
                            src={SpaceShip}
                            className="h-10 w-10 rounded-full object-cover"
                        />

                        <p className="ms-2 hidden text-left text-xs sm:block">
                            <strong className="block font-medium">Eric Frusciante</strong>

                            <span className="text-gray-500"> eric@frusciante.com </span>
                        </p>

                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="ms-4 hidden h-5 w-5 text-gray-500 transition group-hover:text-gray-700 sm:block"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </button>
                    <a href="/checkout" type="button" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                        <ShoppingCartIcon height={20} width={20} />
                    </a>
                    <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                    
                    
                    {/* <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                        <li>
                            <a href="#" className="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500" aria-current="page">
                                Categorias
                            </a>
                        </li>
                    </ul> */}
                </div>
            </div>
        </nav>

    )
}