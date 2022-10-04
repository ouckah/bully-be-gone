const Login = () =>
{
    return (
        <>
            <div className='flex justify-center items-center bg-gray-500 h-20'>
                <h1>
                    Login Page
                </h1>
            </div>
            <div className='flex justify-center items-center bg-gray-300 h-96'>
                <form action="/" method="post">
                    <label for="first">Email: </label>
                    <input type="email" id="first" name= "first"/>
                    <br></br>
                    <label for="last">Password: </label>
                    <input type="password" id="last" name= "last"/> 
                    <br></br>
                    <button type="submit" className='bg-gray-400 rounded-full px-4 py-1 transition-colors duration-300 hover:bg-gray-300'>Sign In</button>
                </form>
            </div>
        </>
    )
}

export default Login

