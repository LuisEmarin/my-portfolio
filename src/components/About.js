import { IdentificationIcon } from "@heroicons/react/solid";
import React from "react";

export default function About() {
    return (
        <section id='about'>
            <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
                <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
                        Hello, My name is 
                        <h1 className="lg:inline-block text-green-500"> Luis Marin!</h1> 
                        
                        <br className="hidden lg:inline-block" /> I love to build amazing
                        apps.
                    </h1>
                    <p className="mb-8 leading-relaxed ">
                        I'm a software developer specializing in building (and occasionally designing) exceptional digital experiences. Currently I'm focused on building quality, student-centered projects at Coding Temple.
                    </p>
                    <div className="flex justify center">
                        <a
                        href="#contact"
                        className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
                        Work with me!
                        </a>
                        <a
                        href="#projects"
                        className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                        See My Past Work
                        </a>
                    </div>
                </div>
                <div className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
                    <img
                        className="object-cover object-center rounded"
                        alt="hero"
                        src="./coding.svg"
                    />
                </div>
            </div>
            <div className='conatainer px-5 py-10 mx-auto text-center lg:px-40'>
                <IdentificationIcon  className='mx-auto inline block w-10 mb-4'/>
                <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        About Me
                </h1>
            </div>
        </section>
    )
}