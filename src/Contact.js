import imgcontact from './assets/imgcontact.jpg';

function ContactScreen(){
    return(
        <div className='card-header'>
            <img src={imgcontact} className='w-screen h-screen object-cover' alt='imginteriors'/>
            <div className='items-center justify-center grid md:grid-cols-6'>
                <div className='md:col-span-1'>
                </div>
                <div className='md:col-span-4'>
                    <div className='bg-red-700 text-secondary-200 text-xs uppercase font-semibold rounded-full p-2'>
                        <svg className="w-4 inline-block mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                        <span className='cursor-pointer'>Add to Cart</span>
                    </div>
                </div>
                <div className='md:col-span-1'>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen;