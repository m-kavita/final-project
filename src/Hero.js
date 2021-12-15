import interiors from './assets/interiors.jpg'

function Hero(){
    return(
        <div className='bg-gray-100'>
            <div className='card-header'>
                <img src={interiors} className='w-screen h-screen object-cover' alt='interiors'/>
                <div className="items-center absolute bottom-80 md:left-1/4 md:right-1/4 justify-center">
                    <h4 className="mb-3 text-7xl lg:text-8xl font-siteName break-normal text-center uppercase drop-shadow-lg text-gray-100">Serving up Soul</h4>
                    <p className="leading-relaxed text-gray-100 break-words text-center text-xl mt-4 font-body">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud. Vestibulum feugiat mattis semper.</p>
                </div>
            </div>
        </div>
    )

}

export default Hero;