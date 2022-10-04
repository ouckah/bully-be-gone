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
                <form action="/Student-Report-Form" method="post">
                    <label for="first">Email:</label>
                    <input type="email" id="first" name= "first"/>
                    <br></br>
                    <label for="last">Password:</label>
                    <input type="password" id="last" name= "last"/> 
                    <br></br>
                    <button type="submit">Sign In</button>
                </form>
            </div>
        </>
    )
}

export default Login

