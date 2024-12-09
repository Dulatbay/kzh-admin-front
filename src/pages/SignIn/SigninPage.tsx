import {Link} from "react-router-dom";
import Logo from "../../components/Logo.tsx";

const SigninPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-bgColor px-4">
            <div className="bg-formColor p-6 rounded-lg shadow-lg w-full max-w-[350px] pt-12 pb-16">
                <Logo logoSize={'big'}/>
                <h2 className="text-white text-2xl sm:text-3xl font-bold text-center mb-6 mt-2">
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
                    <Link to="/quizes">

                        <button
                            type="submit"
                            className="w-full bg-primaryTextColor text-white py-2 rounded-md hover:bg-blue-700 transition duration-300"
                        >
                            LOGIN
                        </button>
                    </Link>
                </form>
            </div>
        </div>
    );
};

export default SigninPage;
