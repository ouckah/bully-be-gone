const Block = ({ title, text, image, direction, primary }) =>
{
    if (!primary)
    {
        if (direction == 'left')
        {
            return (
                <div className='flex flex-row items-center w-full h-96 bg-gray-200 p-10 gap-10'>
                    <img className='w-1/2 h-full' src={image}></img>
                    <div className='flex flex-col w-4/5 gap-5'>
                        <h1 className='text-gray-900 font-semibold text-4xl'>{title}</h1>
                        <h1 className='text-gray-600 font-small text-xl'>
                            {text}
                        </h1>
                    </div>
                </div>
            ) 
        }

        else
        {
            return (
                <div className='flex flex-row items-center w-full h-96 bg-gray-200 p-10 gap-10'>
                    <div className='flex flex-col w-4/5 gap-5'>
                        <h1 className='text-gray-900 font-semibold text-4xl'>{title}</h1>
                        <h1 className='text-gray-600 font-small text-xl'>
                            {text}
                        </h1>
                    </div>
                    <img className='w-1/2 h-full' src={image}></img>
                </div>
            )
        }
    }

    else
    {
        if (direction == 'left')
        {
            return (
                <div className='flex flex-row items-center w-full h-96 bg-gray-100 p-10 gap-10'>
                    <img className='w-1/2 h-full' src={image}></img>
                    <div className='flex flex-col w-4/5 gap-5'>
                        <h1 className='text-gray-900 font-semibold text-4xl'>{title}</h1>
                        <h1 className='text-gray-600 font-small text-xl'>
                            {text}
                        </h1>
                    </div>
                </div>
            ) 
        }

        else
        {
            return (
                <div className='flex flex-row items-center w-full h-96 bg-gray-100 p-10 gap-10'>
                    <div className='flex flex-col w-4/5 gap-5'>
                        <h1 className='text-gray-900 font-semibold text-4xl'>{title}</h1>
                        <h1 className='text-gray-600 font-small text-xl'>
                            {text}
                        </h1>
                    </div>
                    <img className='w-1/2 h-full' src={image}></img>
                </div>
            )
        }
    }
}

export default Block