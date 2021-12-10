function MainHeader(){
    return(
        <main className='text-gray-600 px-16 pt-6 font-body'>
            <div className='flex justify-center md:justify-end'>
                <a href='#' className='btn text-white bg-primary-200 border-primary-200 md:border-2 hover:bg-primary-300 hover:border-primary-300 hover:shadow-sm transition ease-in-out duration-500'>Sign Up</a>
                <a href='#' className='btn text-primary-200 ml-2 border-primary-200 md:border-2 hover:bg-gray-400 hover:border-gray-400 hover:text-white hover:shadow-sm transition ease-in-out duration-500'>Log In</a>
            </div>

            <header>
                <h2 className='text-grey-700 text-6xl font-semibold'>Recipes</h2>
                <h3 className='text-2xl'>For Ninjas</h3>
            </header>
        </main>
    )
}

export default MainHeader;