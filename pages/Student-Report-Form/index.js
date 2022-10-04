const Report =() =>
{
    return(
        <div className = 'flex flex-col gap-5 items-evenly w-screen h-screen p-2'>
            <h1>Report a concern</h1>
            <input 
                className = ' w-2/4 border-2 border-black p-2'
                id='name'
                name='name'
                type='text'
                autocomplete='name'
                required
                /*I'm not sure if this extra stuff is required, I just got it off the internet, may be useful for backend stuff to connect info to an individual profile? */
                />
            <h1>Name of Person report is being filed on: </h1> 
            <input className = 'w-1/4 border-2 border-black p-2'
            />
            <h1>File attachments, screenshots, etc...</h1>
            <button
                type ='files'
                className='w-20 h-8 text-black bg-gray-300 hover:bg-gray-400'
                >
                    Add file +
                </button>
            <button
                type='submit'
                className='w-36 px-4 py-2 font-bold text-white bg-blue-500 rounded-full hover:bg-blue-700'
            >
                Submit 
            </button>

            
        </div>
    )
}

export default Report