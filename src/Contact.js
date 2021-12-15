function ContactScreen(){
    return(
        <div>
            <div className="flex items-center w-full h-screen py-10 bg-cover bg-hero-pattern justify-center">
                <div className="bg-white opacity-90 rounded overflow-hidden shadow-md relative; lg:card-side">
                    <div className="w-full card-body inline-block px-10 py-10">
                        <div>
                            <h2 className="font-siteName uppercase text-7xl text-center text-primary-200">Contact</h2> 
                            <h1 className='pt-8 font-body font-semibold text-center text-4xl text-red-700'>Hours & Location</h1>
                            <p className='text-center font-body pt-5 text-gray-800'>
                            #15, Ground Floor,<br/>
                            The Dubai Mall, Financial Center Street<br/>
                            Downtown Dubai<br/>
                            (04) 987-6543<br/>
                            info@kags.com
                            </p>

                            <h1 className='pt-8 font-body font-semibold text-center text-3xl text-red-700'>Dine In</h1>

                            <p className='text-center font-body pt-5 text-gray-800'>
                            Monday - Thursday: 5.30 - 9.30 PM <br/>
                            Saturday & Sunday : 12:30 - 10 PM <br/>
                            Closed Fridays <br/></p>
                            <p className='text-center font-body py-5 text-gray-800'> ---------------- <br/></p>
                            <p className='font-body text-gray-800'>For additional information or inquires, please email info@kags.com.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactScreen;