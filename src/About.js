import imgabout from './assets/imgabout.jpg'

function AboutScreen(){
    return(
        <div className='bg-gray-100 transition-opacity duration-500'>
            <div className='card-header'>
                <img src={imgabout} className='w-screen h-screen object-cover' alt='kitchen'/>
                <div className="items-center absolute bottom-1/2 md:left-1/4 md:right-1/4 justify-center">
                    <h4 className="mb-3 text-3xl lg:text-8xl font-siteName break-normal text-center uppercase drop-shadow-lg text-primary-300">Our&nbsp; Story</h4>
                    <p className="leading-relaxed text-white break-words text-center text-xl mt-4 font-body">Morbi mollis quam at tristique consectetur. Curabitur bibendum eros a libero dignissim, in pellentesque metus finibus. Curabitur tempor ipsum in nisl egestas, vitae blandit neque aliquet.</p>

                </div>
            
                <div className='my-14 px-56'>
                    <p className="leading-relaxed break-normal text-gray-800 break-words text-center text-xl mt-4 font-body">Curabitur condimentum urna est, et tincidunt est gravida ac. Sed non maximus ex, in porttitor turpis. Praesent efficitur augue et hendrerit mattis. Nam porta vitae ex id porttitor. Mauris semper elementum elit, a eleifend nisi tincidunt eu. Vivamus egestas vulputate metus. Maecenas sit amet pellentesque mauris. Fusce non viverra felis, et luctus ipsum. Vestibulum id felis at nisi venenatis volutpat bibendum vel ligula. Maecenas eu rhoncus purus. Quisque pretium rutrum pretium. In dictum dui vitae malesuada porta. Aliquam erat volutpat. Aenean leo purus, placerat quis ipsum vitae, posuere suscipit risus. Donec convallis lacinia odio a tincidunt. Praesent tempor quam nec facilisis venenatis. <br />

                    <br/>
                    Nullam sollicitudin cursus arcu quis molestie. Donec efficitur ipsum vel sollicitudin mollis. Donec eu imperdiet est. Donec vel vulputate augue. Fusce id ipsum risus. Duis non ex nisi. Phasellus pulvinar feugiat urna eget efficitur. Fusce maximus, arcu a accumsan blandit, eros leo fermentum enim, at feugiat mi ex et dolor. Quisque faucibus in mauris vitae auctor. </p>
                </div>
            </div>
        </div>
    )

}

export default AboutScreen;