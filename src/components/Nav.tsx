import React from "react";
import Logo from "./Logo.tsx";

const Nav: React.FC = () => {
    return (
        <nav className="bg-bgNavColor text-white p-4 flex items-center justify-evenly shadow-md">

            <div className="flex flex-row justify-center items-center space-x-6">

               <Logo />

                <div className="hidden md:flex space-x-8">
                    <span className="text-gray-100">
                    Quizzes
                    </span>
                </div>
            </div>


            <div className="flex items-center">
                <div className="bg-gray-700 rounded-full w-8 h-8 flex items-center justify-center">
                    <span className="text-gray-400">A</span>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
