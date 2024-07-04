import React, { useState } from 'react';
import 'tailwindcss/tailwind.css';
import js from '../../../assets/Skils/Group.png'

const Skils = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <header className="bg-white mt-8 dark:bg-gray-900">
                <nav className="relative bg-white dark:bg-gray-900">
                    <div className="container px-6 py-4 mx-auto md:flex md:justify-between md:items-center">


                        {/* Mobile Menu open: "block", Menu closed: "hidden" */}

                    </div>
                </nav>
                <div className='space-y-4 mb-8'>
                    <h2 className='text-center font-bold text-3xl'>My Skils</h2>
                    <p className='text-center'>"I am proficient in a wide range of technologies essential for modern  web development. My skills include HTML, CSS for styling, <br /> and advanced CSS frameworks such as Tailwind CSS and Bootstrap for efficient and responsive design.  I am adept in Vanilla <br />JavaScript for interactive  front-end functionalities and have hands-on experience with React.js, a powerful library for building user interfaces. <br />

                        In terms of design tools, I use Figma extensively for creating intuitive and user-friendly UI/UX designs.  GitHub is my go-to platform for <br /> version control and collaborative projects, ensuring seamless integration and efficient workflow management. I have practical experience with Firebase for <br /> backend services and deployment, coupled with Node.js for server-side scripting and MongoDB for database management.</p>
                </div>

                <div className="container px-6 py-16 border rounded-2xl mx-auto">
                    <div className="items-center lg:flex">
                        <div className="w-full mb-32 lg:w-1/2">

                            <div className="lg:w-full ">
                                <h2 className='text-5xl font-bold  border-blue-600 border-b-4'>Skills:  </h2>
                                <h2 className='text-2xl mt-4'>Technology and Tools</h2>
                                <div className='ml-14 mt-8'>
                                    <li className='text-xl'>Html</li>
                                    <li className='text-xl'>Css</li>
                                    <li className='text-xl'>tailwind</li>
                                    <li className='text-xl'>Bostrap</li>
                                    <li className='text-xl'>Vanila js</li>
                                    <li className='text-xl'>React.js</li>
                                    <li className='text-xl'>Figma</li>
                                    <li className='text-xl'>Github</li>
                                    <li className='text-xl'>Firebase</li>
                                    <li className='text-xl'>Visual Studio code</li>
                                    <li className='text-xl'>node.js</li>
                                    <li className='text-xl'>mongoDb</li>
                                </div>
                            </div>


                        </div>

                        <div className=" border-l-4  border-blue-600  space-x-8 ml-8 space-y-2 w-full mt-6 lg:mt-0 lg:w-1/2">
                            <h2 className='text-5xl'>Education </h2>
                            <h3 className='text-blue-700 font-bold text-3xl'>S.S.C</h3>
                            <p>january 2020 - December 2022</p>
                            <h1 className='text-4xl font-bold'>Mir KandaPara High School, Mymenshingh</h1>
                            <p>Mir KandaPara High School, located in Mymensingh, is known for its commitment to providing quality education and fostering a conducive learning environment. The school offers a comprehensive curriculum and various extracurricular activities to ensure the holistic development of its students.!</p>
                            <br />
                            <h1 className='text-3xl font-bold text-blue-700'>Diploma in Computer Science and Technology</h1>
                            <p>Expected Graduation: 2026</p>

                            <h1 className='text-3xl font-bold text-green-700'>Moulovibazar Polytechnic institute</h1>
                            <p>"I have successfully completed a Diploma in Computer Science and Technology, starting my journey which has equipped me with essential skills in programming, software development, and technology management."</p>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    );
};

export default Skils;
