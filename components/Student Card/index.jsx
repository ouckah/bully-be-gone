import Image from 'next/image'

const StudentCard = ({ name, description, pfp, offense }) =>
{
    if (offense)
    {
        return (
            <div className='flex justify-evenly items-center w-full h-20 bg-gray-100 rounded-full px-10 gap-20'>
                <Image src={pfp} width={60} height={60} className='object-cover rounded-full'/>
                <h1 className='w-1/3 text-gray-400 font-semibold text-xl uppercase'>{name}</h1>
                <h1 className='w-1/3 text-gray-400 font-md text-md'>{description}</h1>
                <h1 className='justify-self-end text-red-500 font-black'>*</h1>
            </div>
        )
    }

    else
    {
        return (
            <div className='flex justify-evenly items-center w-full h-20 bg-gray-100 rounded-full px-10 gap-20'>
                <Image src={pfp} width={60} height={60} className='object-cover rounded-full'/>
                <h1 className='w-1/3 text-gray-400 font-semibold text-xl uppercase'>{name}</h1>
                <h1 className='w-1/3 text-gray-400 font-md text-md'>{description}</h1>
                <h1 className='justify-self-end text-blue-500 font-black'>*</h1>
            </div>
        ) 
    }
}

export default StudentCard