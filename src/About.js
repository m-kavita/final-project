import imgabout from './assets/imgabout.jpg'

function AboutScreen(){
    return(
        <div className='bg-gray-100 transition-opacity duration-500'>
            <div className='card-header'>
                <img src={imgabout} className='w-screen h-screen object-cover' alt='kitchen'/>
                <div className="items-center absolute top-1/4 md:left-1/4 md:right-1/4 justify-center">
                    <h4 className="mb-3 text-3xl lg:text-8xl font-siteName break-normal text-center uppercase drop-shadow-lg text-primary-300">Our&nbsp; Story</h4>
                    <p className="leading-relaxed text-white break-words text-center text-xl mt-4 font-body">Morbi mollis quam at tristique consectetur. Curabitur bibendum eros a libero dignissim, in pellentesque metus finibus. Curabitur tempor ipsum in nisl egestas, vitae blandit neque aliquet.</p>

                </div>

                <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                    <div className="mx-auto mb-10 lg:max-w-xl sm:text-center">
                        <p className="font-body font-bold inline-block px-3 py-px mb-4 text-s font-semibold tracking-wider text-primary-200 uppercase rounded-full bg-teal-accent-400"> Know Our Team</p>
                        <p className="font-body text-base text-gray-700 md:text-lg"> Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.</p>
                    </div>

                    <div className="grid gap-10 mx-auto lg:grid-cols-2 lg:max-w-screen-lg">
                        <div className="grid sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                                alt="Person"
                                />
                            </div>

                            <div className="font-body flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-lg text-primary-200 font-bold">Oliver Aguilerra</p>
                                <p className="mb-4 text-xs text-gray-800">Owner & Executive Chef</p>
                                <p className="mb-4 text-sm tracking-wide text-gray-800">Vincent Van Gogh’s most popular painting, The Starry Night.</p>
                                <div className="flex items-center space-x-3">
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                        </svg>
                                    </a>
                                    <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                        <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                        <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div className="grid sm:grid-cols-3">
                            <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                                <img
                                className="absolute object-cover w-full h-full rounded"
                                src="https://images.pexels.com/photos/3931603/pexels-photo-3931603.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                                alt="Person"
                                />
                            </div>

                            <div className="font-body flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                                <p className="text-primary-200 text-lg font-bold">John Gilmore</p>
                                <p className="mb-4 text-xs text-gray-800">General Manager</p>
                                <p className="mb-4 text-sm tracking-wide text-gray-800">Amet I love liquorice jujubes pudding croissant I love pudding.</p>
                                <div className="flex items-center space-x-3">
                                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3">
                        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                            <img
                            className="absolute object-cover w-full h-full rounded"
                            src="https://images.unsplash.com/photo-1556157382-97eda2d62296?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzh8fGJhciUyMG1hbmFnZXJ8ZW58MHx8MHx8&auto=format&fit=crop&w=800&q=60"
                            alt="Person"/>
                        </div>

                        <div className="font-body flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-primary-200 text-lg font-bold">Austin Distel</p>
                            <p className="mb-4 text-xs text-gray-800">Bar Manager</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800"> Lorizzle ipsum bling bling sit amizzle, consectetuer adipiscing elit.</p>
                            <div className="flex items-center space-x-3">
                                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                    </svg>
                                </a>
                                <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                    <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div className="grid sm:grid-cols-3">
                        <div className="relative w-full h-48 max-h-full rounded shadow sm:h-auto">
                            <img
                            className="absolute object-cover w-full h-full rounded"
                            src="https://images.unsplash.com/photo-1573497491765-dccce02b29df?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
                            alt="Person"/>
                        </div>

                        <div className="font-body flex flex-col justify-center mt-5 sm:mt-0 sm:p-5 sm:col-span-2">
                            <p className="text-primary-200 text-lg font-bold">Marta Clermont</p>
                            <p className="mb-4 text-xs text-gray-800">Restaurant Manager</p>
                            <p className="mb-4 text-sm tracking-wide text-gray-800"> Bacon ipsum dolor sit amet salami jowl corned beef, andouille flank. </p>
                            <div className="flex items-center space-x-3">
                            <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M24,4.6c-0.9,0.4-1.8,0.7-2.8,0.8c1-0.6,1.8-1.6,2.2-2.7c-1,0.6-2,1-3.1,1.2c-0.9-1-2.2-1.6-3.6-1.6 c-2.7,0-4.9,2.2-4.9,4.9c0,0.4,0,0.8,0.1,1.1C7.7,8.1,4.1,6.1,1.7,3.1C1.2,3.9,1,4.7,1,5.6c0,1.7,0.9,3.2,2.2,4.1 C2.4,9.7,1.6,9.5,1,9.1c0,0,0,0,0,0.1c0,2.4,1.7,4.4,3.9,4.8c-0.4,0.1-0.8,0.2-1.3,0.2c-0.3,0-0.6,0-0.9-0.1c0.6,2,2.4,3.4,4.6,3.4 c-1.7,1.3-3.8,2.1-6.1,2.1c-0.4,0-0.8,0-1.2-0.1c2.2,1.4,4.8,2.2,7.5,2.2c9.1,0,14-7.5,14-14c0-0.2,0-0.4,0-0.6 C22.5,6.4,23.3,5.5,24,4.6z" />
                                </svg>
                            </a>
                            <a href="/" className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400">
                                <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
                                <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    )

}

export default AboutScreen;