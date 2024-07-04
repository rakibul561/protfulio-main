import React from 'react';
import Navbar from './Navbar';
import { FaCloudDownloadAlt } from 'react-icons/fa';
import pdf from '../../assets/Skils/resume.jpeg'

const About = () => {
    return (
        <div>

            <header className="bg-white dark:bg-gray-900 mt-8">
                <nav className="bg-white dark:bg-gray-900">

                </nav>

                <div className="container flex flex-col px-6 py-4 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
                    <div className="flex flex-col items-center w-full lg:flex-row lg:w-1/2">
                        <div className="max-w-lg lg:mx-12 space-y-4 lg:order-2">
                            <h1 className="text-3xl font-semibold tracking-wide text-gray-800 dark:text-white lg:text-4xl">Hi there! I'm Rakibul Hasan</h1>
                            <p className='text-blue-700 text-xl '>Front End Web Devoloper</p>
                            <p className="mt-4 text-gray-600 dark:text-gray-300">A dedicated  Front-end devoloper with 1 years of expreience. <br />
                                i am committed to continually updating my skils with the latest <br /> technologies and writing clean,efficient code. i take pride in completing projects to the higjest standrad ,always striving to <br />
                                improve with each new chellenge
                            </p>
                            <div>
                                <h2 className='mt-4'>
                                    Birthday <span className='ml-4'>  :  15-7-2004</span>
                                </h2>
                                <h2>
                                    Website   <span className='ml-5'>: www.exampole.com</span>
                                </h2>

                                <h2>
                                    Phone   <span className='ml-8'>: 01982535062</span>
                                </h2>
                                <h2>
                                    Email   <span className='ml-10'>: rakibulhasan3929@gmail.com</span>
                                </h2>


                                <h2>
                                    Phone   <span className='ml-8'>:
                                        Mymenshingh, Bangladesh
                                    </span>
                                </h2>

                            </div>

                            <div className="mt-6">
                                <a
                                    href={pdf}
                                    className="btn btn-secondary flex items-center   hover:bg-purple-700"
                                    download={"resume"}
                                >
                                    <FaCloudDownloadAlt></FaCloudDownloadAlt> Download CV
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
                        <img className="object-cover border border-2xl border-blue-600 w-full h-full max-w-2xl rounded-md" src="https://i.ibb.co/6RSvG1J/426205113-273556179091518-2688297409218607641-n.jpg" alt="Apple Watch" />
                    </div>
                </div>
            </header>
        </div>
    );
};

export default About;
