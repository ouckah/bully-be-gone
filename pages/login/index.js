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
                <form action="/send-data-here" method="post">
                    <label for="first">Email:</label>
                    <input type="email" id="first" name= "first"/>
                    <br></br>
                    <label for="last">Password:</label>
                    <input type="password" id="last" name= "last"/> 
                    <br></br>
                    <a href="https://www.google.com/">
                        <button type="submit">Sign In</button>
                    </a>
                </form>
            </div>
        </>
    )
}

export default Login