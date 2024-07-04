import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Project = () => {
    return (
        <div>
            <section className="bg-white dark:bg-gray-900">
                <div className="container px-6 py-10 mx-auto">
                    <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                        My Best 3 Project
                    </h1>



                    <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-12 md:grid-cols-2 xl:grid-cols-3">
                        <div className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{ backgroundImage: "url('https://i.ibb.co/ScYH1v0/Screenshot-2024-07-04-135851.png')" }}>
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Tour Guide website </h2>
                                <Link to={'https://tour-guide-client.surge.sh/'} className='text-5xl  text-blue-500 text-center mt-4'>Live Link </Link>
                                {/* Open the modal using document.getElementById('ID').showModal() method */}
                                


                                <div className='mt-40'>
                                <Link to={'https://github.com/rakibul561/Tour-Guide-Server'} className="btn btn-sm">Server Side <FaGithub></FaGithub> </Link>
                                <Link to={'https://github.com/rakibul561/Tour-Guide-Client-'} className="btn ml-40 btn-sm">Client Side  <FaGithub></FaGithub> </Link>
                                </div>
                            </div>
                            
                        </div>

                        <div  className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{ backgroundImage: "url('https://i.ibb.co/wRg9jnN/Screenshot-2024-07-04-141028.png')" }}>
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Hotel Booking Website</h2>
                                <Link to={'http://obtainable-name.surge.sh/'} className='text-4xl font-bold text-blue-700 text-center mt-4'>Live Link</Link>
                            
                                <div className='mt-40'>
                                <Link to={'https://github.com/rakibul561/Hotel-Booking-Server'} className="btn btn-sm">Server Side <FaGithub></FaGithub> </Link>
                                <Link to={'https://github.com/rakibul561/Hotel-Booking'} className="btn ml-40 btn-sm">Client Side  <FaGithub></FaGithub> </Link>
                                </div>
                            </div>
                        </div>

                        <div to={'https://art-store-client.web.app/'} className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Art Store Website</h2>
                                <Link to={'https://art-store-client.web.app/'} className='text-4xl font-bold text-blue-700 text-center mt-4'>Live Link </Link>
                              
                                <div className='mt-40'>
                                <Link to={'https://github.com/rakibul561/Art-Store-Server'} className="btn btn-sm">Server Side <FaGithub></FaGithub> </Link>
                                <Link to={'https://github.com/rakibul561/Art-Store-Client'} className="btn ml-40 btn-sm">Client Side  <FaGithub></FaGithub> </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
