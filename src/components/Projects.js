import {CodeIcon} from '@heroicons/react/solid';
import {projects} from '../data';
import React from 'react';

export default function Projects() {
    return (
        <section id='projects' className='text-gray-400 bg-gray-900 body-font'>
            <div className='conatainer px-5 py-10 mx-auto text-center lg:px-40'>
                <div className='flex flex-col w-full mb-20'>
                    <CodeIcon className='mx-auto inline block w-10 mb-4'/>
                    <h1 className='sm:text-4xl text-3xl font-medium title-font mb-4 text-white'>
                        Apps I've Built
                    </h1>
                    <p className='lg:w-2/3 mx-auto leading-relaxed text base'>
                        Checkout some of the work that I have compiled to showcase my capabilities. Feel free to "hover" around and watch a clip of the project.
                    </p>
                </div>
                <div className='flex flex-wrap -m-4'>
                    {projects.map((project) => (
                        <a
                        href={project.link}
                        key={project.image}
                        className='sm:w-1/2 w-100 p-4 px-16 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 '>
                            {/* opacity-0 group-hover hover:opacity-100 */}
                            <div className='flex-relative'>
                                <img 
                                alt='gallery' 
                                src={project.image}
                                />
                                <div>
                                    <h2 className='tracking-widest text-sm title-font font-medium text-green-400 mb-1'>
                                        {project.subtitle}
                                    </h2>
                                    <h1 className='title-font text-lg font-medium  text-white mb-3'>
                                        {project.title}
                                    </h1>
                                    <p className='leading-relaxed'>
                                        {project.description}
                                    </p>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}