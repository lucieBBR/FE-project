import React, { useState } from 'react';


function LoginView(props) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function handleChange(event) {
        let { name, value } = event.target;
        switch (name) {
            case 'usernameInput':
                setUsername(value);
                break;
            case 'passwordInput':
                setPassword(value);
                break;
            default:
                break;
        }
    }

    function handleSubmit(event) {
        event.preventDefault();
        props.loginCb(username, password);
    }

    return (
    <section className="h-screen">

        {props.loginError && (
            <div className="alert alert-danger">
                {props.loginError}
            </div> 
        )}

        {/* <div className="container px-3 py-6 h-full"> */}
            <div className="flex justify-center items-center flex-wrap p-20 g-6 text-gray-800 bg-[#FFFFFF] bg-opacity-20">
            <div className="md:w-8/12 lg:w-5/12 lg:ml-20">
                <h2 className="flex flex-col text-center font-medium leading-tight text-4xl mt-0 mb-2 text-white">
                    LOGIN
                </h2>

                <form onSubmit={handleSubmit}>
                {/* <!-- Username input --> */}
                <div className="mb-6">
                    <input
                    type="text"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Username"
                    name="usernameInput"
                    required
                    value={username}
                    onChange={handleChange}
                    />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                    <input
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    placeholder="Password"
                    name="passwordInput"
                    required              
                    value={password}
                    onChange={handleChange}
                    />

                </div>
                {/* <!-- Submit button --> */}
                <button
                    type="submit"
                    className="inline-block px-7 py-3 bg-[#c57e13] text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-[#D49331] hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out w-full"
                    data-mdb-ripple="true"
                    data-mdb-ripple-color="light"
                >
                    Sign in
                </button>
                </form>
            </div>
            </div>
        {/* </div> */}
 </section>
 );
}

export default LoginView;