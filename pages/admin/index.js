import Image from 'next/image'
import StudentCard from '../../components/Student Card'

const Admin = () =>
{
    const data =
    [
        { name: 'Takekuni Woman', description: 'Bullied Marcus Hom on Tiktok.', pfp: '/student-pfps/pfp.jpg', offense: true },
        { name: 'Aidan Ouckama', description: 'Bullied Marcus Hom on Tiktok.', pfp: '/student-pfps/aidan.jpg', offense: true },
        { name: 'Aidan Ouckama', description: 'Bullied Marcus Hom on Tiktok. (2nd Offense)', pfp: '/student-pfps/aidan.jpg', offense: true },
        { name: 'Aidan Ouckama', description: 'Bullied Marcus Hom on Tiktok. (3rd Offense)', pfp: '/student-pfps/aidan.jpg', offense: true },
        { name: 'Aidan Ouckama', description: 'Bullied Marcus Hom on Tiktok. (4th Offense)', pfp: '/student-pfps/aidan.jpg', offense: true },
        { name: 'Marcus Hom', description: 'Bullied on TikTok', pfp: '/student-pfps/marcus.jpg', offense: false }
    ]

    return (
        <>
            <div className='flex flex-col w-full h-screen bg-white p-10 gap-2'>

                {
                    data.map(user => 
                    {
                        return (
                            <StudentCard
                                name={user.name}
                                description={user.description}
                                pfp={user.pfp}
                                offense={user.offense}
                            />
                        )
                    })
                }

            </div>
        </>
    )
}

export default Admin