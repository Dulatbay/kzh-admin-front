import React from "react";

const Nav: React.FC = () => {
    return (
        <nav className="bg-bgNavColor text-white p-4 flex items-center justify-evenly shadow-md">

            <div className="flex flex-row justify-center items-center space-x-6">

                <div className="flex flex-col justify-center items-center space-x-1">
                    <span className="text-xl font-bold  text-primaryTextColor">KzH</span>
                    <span className="text-sm text-gray-400">admin</span>
                </div>

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
