import React from 'react'
import Header from './Header'
import Banner from './Banner'
import Footer from './Footer'
import ayushi from './assets/ayushi.jpg';
import ankit from './assets/ankit.jpg'
import abhishek from './assets/abhishek.jpeg'



const About = () => {

    return (
            <div className=' bg-slate-100 '>
                <div className=''>
            <Header />
            <Banner />
            <div className='w-full mt-4 flex bg-slate-100'>
                <div className='mt-2 mb-2 w-90 ml-36 h-85 '>
                    <img src='https://plus.unsplash.com/premium_photo-1681487924146-c091598b7e8a?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1
        .0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' className='ml-2 w-100 h-100' />
                </div>
                <div className=' w-full lg:w-[60%] h-auto mt-4 lg:mt-2 lg:ml-12 bg-slate-100'>
                    <div>
                        <h1 className='text-2xl font-semibold text-center lg:text-left ml-0 lg:ml-20'>ABOUT COMPANY</h1>
                        <p className='mt-2 ml-0 lg:ml-2 text-[16.5px] text-justify'>Welcome to TravelSite, your trusted travel companion! 
                            We specialize in crafting unforgettable travel experiences tailored to your dreams.
                             Whether it's serene beaches, bustling cities, or adventurous mountain getaways, 
                             we bring your travel vision to life with seamless planning and personalized service.
                              With a network of global partners, affordable packages, and 24/7 customer support,
                               TravelSite ensures every journey is stress-free and memorable. Our mission is
                                to inspire and enable people to explore the world with ease and joy. 
                                Discover new destinations, create lasting memories, and travel 
                                smarter with Travelsire – where your adventure begins. Let’s go places, together!</p>
                    </div>
                </div>
            </div>
            <div className='mt-4  '>
                <div className='flex  justify-center items-center'><h1 className='text-3xl underline ' >OUR TEAM</h1></div>
                <div className="flex justify-center gap-6 mt-6">
                    <div className="flex flex-col items-center  p-4 border-2 shadow-md  bg-slate-100">
                        <img src={ayushi} className="w-24 h-30 object-cover " alt="Ayushi Jain" />
                        <span className="mt-2 font-semibold text-amber-400">Ayushi Jain</span>
                    </div>
                    <div className="flex flex-col items-center border-2 p-4  shadow-md">
                        <img src={abhishek} className="w-24 h-30 object-cover " alt="Abhishek Sharma" />
                        <span className="mt-2 font-semibold text-amber-400">Abhishek Sharma</span>
                    </div>
                    <div className="flex flex-col items-center border-2 p-4 shadow-md">
                        <img src={ankit} className="w-24 h-24 object-cover " alt="Ankit Viskarma" />
                        <span className="mt-2 font-semibold text-amber-400">Ankit Vishwakarma</span>
                    </div>
                </div>

            </div>
            <Footer />

        </div>
        </div>
    )
}

export default About
