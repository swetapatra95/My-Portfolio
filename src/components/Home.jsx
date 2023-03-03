import React from 'react'
import HeroImage from '../assets/heroImage.jpeg';
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
const Home = () => {
    return (
        <div name="home" className="h-screen w-full bg-gradient-to-b
        from-black via-black bg-gray-800">
            <div className="max-w-screen-lg mx-auto flex flex-col
            items-center justify-center h-full px-4 md:flex-row">
                <div className="flex flex-col justify-center h-full">
                    <h2 className="text-4xl sm:text-7xl font-bold text-white">I'am a Full Stack Developer</h2>
                    <p className="text-gray-500 py-4 max-w-md">

                        I'm a technology Professional with 4+ years of experience in software development, testing, automation, and project management.
                        I have expertise in development of applications using Java, JavaScript, Node.js, Express JS, React, NextJS,Tailwind,GraphQl,
                        PHP, SQL Server, MongoDB, Dynamo DB, HTML5 and CSS3. Excellent knowledge of Agile and Scrum development environment.
                        In addition to that I possess decent communication, interpersonal, learning and organizing skills.

                    </p>
                    <div>
                        <button className="group text-white w-fit px-6 py-3 my-2
                         flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer">
                            Portfolio
                            <span className="group-hover:rotate-90 duration-300"><MdOutlineKeyboardArrowRight size={25} />
                            </span>
                        </button>
                    </div>
                </div>
                <div>
                    <img src={HeroImage} alt="my profile" className="rounded-2xl mx-auto w-3/5 " />
                </div>
            </div>
        </div>

    )
}

export default Home