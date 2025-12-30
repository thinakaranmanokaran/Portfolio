import React from 'react'
import { GoArrowUpRight } from "react-icons/go";
import { FiGithub } from "react-icons/fi";
import { BsLinkedin } from "react-icons/bs";
import { FaFire } from "react-icons/fa";

const Home = () => {
    return (
        <div className="bg-light text-dark selection:bg-sky-500/20 dark:bg-dark min-h-screen flex flex-col dark:text-textlight font-creato pt-6 pb-2 md:py-6">
            <section className="flex flex-col items-center mt-4 xl:mt-28 flex-1">
                <p className="text-3xl xl:text-4xl max-w-[90vw] xl:max-w-4/5 leading-tight text-dark/80 dark:text-textlight/70">
                    I’m <h1 className="font-medium inline-flex text-black dark:text-textlight">Thinakaran Manokaran</h1>, a Developer, Designer, Lecturer, and Trainer who enjoys building clean, practical, and user-friendly digital products. I work mainly with modern web technologies and love turning ideas into real-world applications. Along with development, I’m <span className="text-dark underline dark:text-textlight">passionate</span> about teaching and guiding <span className="text-dark underline dark:text-textlight">students</span> and <span className="text-dark underline dark:text-textlight">developers</span> through hands-on learning. I believe in continuous learning, sharing knowledge, and improving every day. My work reflects a balance of <span className="text-dark underline dark:text-textlight">creativity</span>, logic, and real-world problem solving.
                </p>

                <p className="text-3xl xl:text-4xl w-[90vw] xl:max-w-4/5 leading-tight text-dark/80 dark:text-textlight/70 mt-8 xl:mt-12">
                    Currently living in Thanjavur, India.
                </p>

                <p className="text-3xl xl:text-4xl md:mt-0 mt-3 w-[90vw] xl:max-w-4/5 leading-tight text-dark/80 dark:text-textlight/70">
                    Feel free to reach out.
                </p>
            </section>
            <footer className="flex text-2xl md:text-3xl lg:text-4xl space-x-2 md:space-x-3 justify-end xl:max-w-5/6 mt-12 md:mt-0 text-dark/50 dark:text-textlight/50">
                <a href="https://github.com/thinakaranmanokaran" target="_blank" rel="noopener noreferrer" className='text-dark/50 dark:text-textlight/50 hover:text-dark dark:hover:text-textlight transition-all duration-300 cursor-pointer '><FiGithub /></a>
                <a href="https://linkedin.com/in/thinakaran-manohar" target="_blank" rel="noopener noreferrer" className='text-dark/50 dark:text-textlight/50 hover:text-dark dark:hover:text-textlight transition-all duration-300 cursor-pointer '><BsLinkedin /></a>
                <a href="https://thinakaran.dev/" target="_blank" rel="noopener noreferrer" className='text-dark/50 dark:text-textlight/50 hover:text-dark dark:hover:text-textlight transition-all duration-300 cursor-pointer '><FaFire /></a>
            </footer>
        </div>
    )
}

export default Home