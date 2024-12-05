
const SigninPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-bgColor px-4">
            <div className="bg-formColor p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm sm:max-w-md">
                <div className="text-center mb-6">
                    <h1 className="text-primaryTextColor text-2xl font-bold">KzH</h1>
                    <p className="text-gray-400 text-sm">admin</p>
                </div>
                <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6">
                    SIGN IN
                </h2>
                <form>
                    <div className="mb-4">
                        <input
                            type="email"
                            placeholder="Email"
                            className="w-full px-4 py-2 bg-innerFormColor text-gray-300 placeholder-innerFormTextColor rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="mb-6">
                        <input
                            type="password"
                            placeholder="Password"
                            className="w-full px-4 py-2 bg-innerFormColor text-gray-300 placeholder-innerFormTextColor rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primaryTextColor text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                    >
                        LOGIN
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SigninPage;
