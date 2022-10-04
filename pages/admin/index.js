import Image from 'next/image'

const Admin = () =>
{
    return (
        <>
            <div className='w-full h-screen bg-white p-10'>
                <div className='flex justify-evenly items-center w-full h-20 bg-gray-100 rounded-full px-10 gap-20'>
                    <Image src='/pfp.jpg' width={60} height={60} className='object-cover rounded-full'/>
                    <h1 className='w-1/3 text-gray-400 font-semibold text-xl uppercase'>Takekuni Woman</h1>
                    <h1 className='w-1/3 text-gray-400 font-md text-md'>Bullied Marcus Hom on TikTok.</h1>
                    <h1 className='justify-self-end text-red-500'>*</h1>
                </div>
            </div>
        </>
    )
}

export default Admin