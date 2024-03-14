import marketing from '../photo/marketing.webp';
import images from './../photo/images.jpeg';
import gg from './../photo/gg.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faYoutube, faTwitter } from '@fortawesome/free-brands-svg-icons';



const Tools = () => {
    return (
        <>
            <div className="relative" style={{ backgroundImage: `url(${marketing})`, backgroundSize: 'cover', height: '800px' }}>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <h1><span className="text-white text-6xl mx-10">DIGITAL</span></h1>
                    <h1 className="text-white text-4xl mx-10">marketing IN YOUR</h1>
                </div>
            </div>


            <div className=" mx-auto  p-4 bg-gray-800 py-10 ">
                <div className='flex'>
                    <div className='w-3/5'>
                        <p className="text-center text-blue-800 pt-10">SHOPIFY PLUS PLATFORM</p>
                        <p className="text-center text-white text-6xl">Flexible, customisable,</p>
                        <p className="text-center text-white text-4xl mr-10"> and super fast</p>
                        <p className="text-center text-white  ">The world’s most innovative brands don’t settle for ordinary software. They choose Shopify Plus.</p>
                        <button
                            class=" w-40 h-10 justify-center  rounded-full bg-blue-800 text-white font-bold ml-2  mt-4 hover:bg-[#156290]">
                            Get in touch </button>
                    </div>
                    <div className='w-1/4'>
                        <img src={images} alt="images" className='w-full h-72' />


                    </div>
                    <div className='w-1/4'>
                        <img src={gg} alt="gg" className='w-full h-72' />


                    </div>
                </div>

            </div>





            <div className=" mx-auto flex p-4 bg-white ">
                <div className='w-3/5'>
                    <div className='space-x-8'>
                        <p className=' font-bold text-blue-800 mr-10 py-5 mx-8'>PLATFORM RELIABILITY</p>
                        <p className=' font-bold  text-4xl'>Unlimited bandwidth and web hosting at no extra cost </p>

                        <p className=' font-bold  text-8xl text-blue-800 py-5'>99.99% </p>
                        <p className=' font-bold'>Average uptime across Shopify </p>
                        <p className=' font-bold text-blue-800'><span className="underline">See how we calculate uptime</span></p>
                    </div>
                </div>

                <div className='w-3/6 pt-32'>
                    <div class="flex ">
                        <div class="flex-none w-14 h-14">
                            <svg fill="#1916ca" width="79px" height="79px" viewBox="-13.68 -13.68 51.36 51.36" xmlns="http://www.w3.org/2000/svg" stroke="#1916ca"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#b2c5f0" stroke-width="4.8"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g></svg>
                        </div>
                        <div class="flex-initial w-64 py-8 px-4  font-bold text-blue-800 ">
                            Lightning-fast global servers
                        </div>
                    </div>

                    <div class="flex ">
                        <div class="flex-none w-14 h-14">
                            <svg fill="#1916ca" width="79px" height="79px" viewBox="-13.68 -13.68 51.36 51.36" xmlns="http://www.w3.org/2000/svg" stroke="#1916ca"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#b2c5f0" stroke-width="4.8"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g></svg>
                        </div>
                        <div class="flex-initial w-64 py-8 px-5  font-bold text-blue-800 pt-5 ">
                            Cloud-based infrastructure
                        </div>
                    </div>

                    <div class="flex ">
                        <div class="flex-none w-14 h-14">
                            <svg fill="#1916ca" width="79px" height="79px" viewBox="-13.68 -13.68 51.36 51.36" xmlns="http://www.w3.org/2000/svg" stroke="#1916ca"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#b2c5f0" stroke-width="4.8"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g></svg>
                        </div>
                        <div class="flex-initial w-64 py-8 px-4  font-bold text-blue-800 ">
                            Lightning-fast global servers
                        </div>
                    </div>

                    <div class="flex">
                        <div class="flex-none w-14 h-14">
                            <svg fill="#1916ca" width="79px" height="79px" viewBox="-13.68 -13.68 51.36 51.36" xmlns="http://www.w3.org/2000/svg" stroke="#1916ca"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#b2c5f0" stroke-width="4.8"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g><g id="SVGRepo_iconCarrier"><path d="M12,2A10,10,0,1,0,22,12,10,10,0,0,0,12,2Zm5.676,8.237-6,5.5a1,1,0,0,1-1.383-.03l-3-3a1,1,0,1,1,1.414-1.414l2.323,2.323,5.294-4.853a1,1,0,1,1,1.352,1.474Z"></path></g></svg>
                        </div>
                        <div class="flex-initial w-64 py-8 px-5 font-bold text-blue-800 ">
                            Automatic platform updates
                        </div>
                    </div>

                </div>
            </div>

            <div className='bg-gray-400 py-5 '>

                <div className=' w-1/3 flex-col text-white'>
                    <p className='mt-16 mr-20'> For more details contact us with <br /> the details below.</p>
                    <div className='flex flex-row text-center px-2 mt-8'>
                        <svg class="w-4 h-8 text-blue-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 19 18">
                            <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
                        </svg>
                        <p className='text-xl font-bold px-2 text-white'>Phone : </p>
                        <p> +250788909401 </p>
                    </div>
                    <div className='flex flex-row px-2 mt-3'>
                        <svg class="w-6 h-8 text-blue-700 dark:text-gray-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M8.6 4.7A8 8 0 0 1 19 8h-.7c-.7 0-1.2.3-1.2 1 0 .2 0 2-2 2s-2-1.8-2-2c0-1.5-.8-1.7-1.7-2L10 6.6c-1-.5-1.3-1.2-1.5-1.9ZM6 4a10 10 0 0 0-2.8 3.3A10 10 0 0 0 12.5 22 10 10 0 1 0 6 4Zm13.4 11.1-.8-.1h-.2a3.4 3.4 0 0 0-3.4 3.4v1a8 8 0 0 0 4.4-4.3ZM12 20A8 8 0 0 1 5.1 8c1 .5 1.4 1.5 1.8 2.4l.7 1.1c.5.7 1 1 1.6 1.4.5.3 1 .6 1.6 1.3 1.4 1.8 1.4 4.3 1.3 5.8Z" clip-rule="evenodd" />
                        </svg>
                        <p className='text-xl font-bold px-2 text-white '>Website: </p>
                        <p> www.juputan.tc.org</p>
                    </div>
                    <div className='flex flex-row px-2 mt-3 '>
                        <svg class="w-6 h-8 text-blue-700 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                            <path fill-rule="evenodd" d="M5 3.8A1 1 0 0 1 6 3h12c.5 0 .9.3 1 .8l1.8 8.2h-4.2a2 2 0 0 0-1.9 1.2 3 3 0 0 1-5.4 0A2 2 0 0 0 7.4 12H3.2L5 3.8ZM3 14v5a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-5h-4.4a5 5 0 0 1-9.2 0H3Z" clip-rule="evenodd" />
                        </svg>

                        <p className='text-xl font-bold px-2 text-white '> Email: </p>
                        <p> ehouse@gmail.com</p>
                    </div>
                </div>
            </div>

            <footer className="bg-gray-900 text-white p-4 flex justify-end space x-10">
                <div className="container mx-auto ">
                    <p>&copy; 2024 Your Company. All rights reserved.</p>
                </div>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FontAwesomeIcon icon={faFacebook} size="" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="mr-4">
                    <FontAwesomeIcon icon={faYoutube} size="" />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faTwitter} size="" />
                </a>
            </footer>



        </>
    )
}

export default Tools;
