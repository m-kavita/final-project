import Registration from './Registration.js'
import interiors from './assets/interiors.jpg'

function Hero(){
    return(
        <div className='card-header'>
            <img src={interiors} className='w-screen h-screen object-cover' alt='interiors'/>
            <div class="items-center absolute bottom-96 md:left-1/4 md:right-1/4 justify-center">
                <h4 class="mb-3 text-6xl text-center uppercase font-bold drop-shadow-lg tracking-tight text-white">Artisinal. Sustainable. Delicious.</h4>
                <p class="leading-normal text-gray-100 text-center text-xl">Lorem ipsum dolor, sit amet cons ectetur adipis icing elit. Praesen tium, quibusdam facere quo laborum maiores sequi nam tenetur laud.</p>
            </div>
            <Registration />
        </div>
    )

}

export default Hero;