import React from 'react';
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
                                <button className="btn btn-success mt-4 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>protfulio details</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Tour Guide Website</h3>
                                        <h1 className='text-3xl font-bold'>Used Tolls    : </h1>
                                        <li>Html</li>
                                        <li>css</li>
                                        <li>tailwind</li>
                                        <li>mamba ui</li>
                                        <li>Meraki ui</li>
                                        <li>daisy ui</li>
                                        <li>MongoDb</li>
                                        <li>Expres.js</li>
                                        <li>Node.js</li>
                                        <li>react.icon</li>
                                        <li>react-toast</li>
                                                                                <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>


                            </div>
                        </div>

                        <div  className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{ backgroundImage: "url('https://i.ibb.co/wRg9jnN/Screenshot-2024-07-04-141028.png')" }}>
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Hotel Booking Website</h2>
                                <Link to={'http://obtainable-name.surge.sh/'} className='text-4xl font-bold text-blue-700 text-center mt-4'>Live Link</Link>
                            
                              <button className="btn btn-success mt-4 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>protfulio details</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>

                        <div to={'https://art-store-client.web.app/'} className="overflow-hidden bg-cover rounded-lg cursor-pointer h-96 group"
                            style={{ backgroundImage: "url('https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')" }}>
                            <div className="flex flex-col justify-center w-full h-full px-8 py-4 transition-opacity duration-700 opacity-0 backdrop-blur-sm bg-gray-800/60 group-hover:opacity-100">
                                <h2 className="mt-4 text-xl font-semibold text-white capitalize">Art Store Website</h2>
                                <Link to={'https://art-store-client.web.app/'} className='text-4xl font-bold text-blue-700 text-center mt-4'>Live Link </Link>
                              
                               <button className="btn btn-success mt-4 text-white" onClick={() => document.getElementById('my_modal_5').showModal()}>protfulio details</button>
                                <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                                    <div className="modal-box">
                                        <h3 className="font-bold text-lg">Hello!</h3>
                                        <p className="py-4">Press ESC key or click the button below to close</p>
                                        <div className="modal-action">
                                            <form method="dialog">
                                                {/* if there is a button in form, it will close the modal */}
                                                <button className="btn">Close</button>
                                            </form>
                                        </div>
                                    </div>
                                </dialog>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Project;
