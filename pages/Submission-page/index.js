import Image from "next/image"

const Submission = () =>
{
    return (
        <>
            <div>
                <div className = 'flex flex-col gap-5 justify-center items-center w-screen h-screen'>
                    <Image src='/submit-pic.png' height={96} width={96}></Image>
                    <h1> Thank you for submitting a report! </h1>
                </div>
            
            </div>
        </>
        
    )
}

export default Submission 