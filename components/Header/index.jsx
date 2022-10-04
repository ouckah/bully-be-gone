import Link from 'next/link'

const Header = () =>
{
    return (
        <>
        
            <div className='flex flex-row justify-evenly items-center w-full h-20 bg-gray-100'>
                <Link href='/'>
                    <h1 className='font-medium text-gray-600 uppercase cursor-pointer transition-colors duration-300 hover:text-gray-400'>
                        Home
                    </h1>
                </Link>
                <Link href='/student-report-form'>
                    <h1 className='font-medium text-gray-600 uppercase cursor-pointer transition-colors duration-300 hover:text-gray-400'>
                        Report
                    </h1>
                </Link>
                <Link href='/login'>
                    <h1 className='font-medium text-gray-600 uppercase cursor-pointer transition-colors duration-300 hover:text-gray-400'>
                        Login
                    </h1>
                </Link>
            </div>

        </>
    )
}

export default Header