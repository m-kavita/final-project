import drink1 from './assets/drink1.jpg'
import drink2 from './assets/drink2.jpg'
import drink3 from './assets/drink3.jpg'
import drink4 from './assets/drink4.jpg'
import drink5 from './assets/drink5.jpg'
import drink6 from './assets/drink6.jpg'
import drink7 from './assets/drink7.jpg'

function BeverageCards(){
    return(
        <div className='text-gray-600 px-16 pb-6 font-body'>
            <h4 className='font-bold mt-12 pb-2 border-b text-xl text-primary-200 border-gray-200'>Drinks</h4>

            {/* card grid #1 */}
            <div className='mt-8 grid lg:grid-cols-4 gap-7'>
                {/* card-1 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink1} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Aliquam Rutrum Augue</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-2 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink2} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Ac Tincidunt Lorem</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-3 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink3} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Nam Hendrerit Libero</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-4 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink4} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Nulla Suscipit</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-5 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink5} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Mauris Et Hendrerit</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-6 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink6} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Class Aptent Taciti Sociosqu</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                {/* card-7 */}
                <div className='card hover:shadow-lg'>
                    <img src={drink7} className='w-full h-32 sm:h-48 object-cover' alt='logoplacement' width='300px' />
                    <div className='m-4'>
                        <span className='font-bold text-red-700'>Litora Torquent</span>
                        <span className='block text-gray-500 text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla et imperdiet arcu. Sed mattis erat quis nunc interdum mattis.</span>
                    </div>
                    <div className='badge'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BeverageCards;