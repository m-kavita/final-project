import interiors from './assets/interiors.jpg'

function MainHeader(){
    return(
        <div className='card-header'>
                    <img src={interiors} className='w-full h-screen object-cover' alt='interiors' />
                    <div className='m-4'>
                        <div className='flex justify-center md:justify-end signup-badge text-gray-600 px-7 pt-3 font-body sticky right-0 ml-2 mt-2'>
                            <a href='#' className='btn text-white bg-primary-300 border-primary-300 md:border-2 hover:bg-primary-100 hover:border-primary-100 hover:shadow-sm transition ease-in-out duration-500'>Sign Up</a>
                            <a href='#' className='btn ml-2 text-white bg-gray-400 border-gray-400 md:border-2 hover:bg-gray-200 hover:border-gray-200 hover:text-primary-300 hover:shadow-sm transition ease-in-out duration-500'>Log In</a>
                        </div>
                    </div>
                </div>
    )
}

export default MainHeader;

{/* card-1 */}
                <div className='card hover:shadow-lg'>
                    <img src={interiors} className='w-full h-screen object-cover' alt='interiors' />
                    <div className='m-4'>
                        <div className='flex justify-center md:justify-end signup-badge text-gray-600 px-16 pt-6 font-body sticky right-3 ml-2 mt-2'>
                            <a href='#' className='btn text-white bg-primary-300 border-primary-300 md:border-2 hover:bg-primary-100 hover:border-primary-100 hover:shadow-sm transition ease-in-out duration-500'>Sign Up</a>
                            <a href='#' className='btn ml-2 text-white bg-gray-400 border-gray-400 md:border-2 hover:bg-gray-200 hover:border-gray-200 hover:text-primary-300 hover:shadow-sm transition ease-in-out duration-500'>Log In</a>
                        </div>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>