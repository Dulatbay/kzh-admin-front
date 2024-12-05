import Nav from "../../components/Header/Nav.tsx";
import SearchIcon from '@mui/icons-material/Search';
import CancelIcon from '@mui/icons-material/Cancel';
import {Link} from 'react-router-dom';

const QuizesPage = () => {
    const users = [
        {id: 1, user: "Akhan", title: "1. Независимый Казахстан", average: "70.6%", difficulty: "Easy", questions: 25},
        {
            id: 2,
            user: "Dana",
            title: "2. Великая Отечественная Война",
            average: "85.3%",
            difficulty: "Medium",
            questions: 30
        },
        {id: 3, user: "Aliya", title: "3. Реформы Абая", average: "92.1%", difficulty: "Hard", questions: 40},
    ];

    const getDifficultyColor = (difficulty: string) => {
        switch (difficulty) {
            case "Easy":
                return "text-green-500";
            case "Medium":
                return "text-yellow-500";
            case "Hard":
                return "text-red-500";
            default:
                return "text-gray-500";
        }
    }
    return (
        <>
            <Nav/>


            <section className="bg-bgColor text-white p-6 min-h-screen ">
                <h1 className="text-2xl font-bold mb-6">Quizes</h1>

                <div className=" flex justify-start items-center gap-4 ">


                    <select className="bg-innerFormColor text-gray-300 p-2 rounded-lg focus:outline-none w-54">
                        <option>Topics</option>
                        <option>Казахское ханство</option>
                        <option>Бронзовый век</option>
                        <option>Шелковый путь</option>
                    </select>
                    <select className="bg-innerFormColor text-gray-300 p-2 rounded-lg focus:outline-none w-55">
                        <option>Difficulty</option>
                        <option>Easy</option>
                        <option>Medium</option>
                        <option>Hard</option>
                    </select>
                    <select className="bg-innerFormColor text-gray-300 p-2 rounded-lg focus:outline-none w-54">
                        <option>Status</option>
                        <option>Active</option>
                        <option>Inactive</option>
                    </select>


                    <div className=" flex items-center bg-innerFormColor rounded-lg">
                        <SearchIcon className="text-gray-400 ml-2"/>
                        <input
                            type="text"
                            placeholder="Search"
                            className="bg-innerFormColor text-gray-300 p-2 rounded-lg w-full  focus:outline-none"
                        />
                    </div>
                </div>
                <div className="tags   mt-2 text-gray-200 p-1 rounded-lg flex gap-2 ">
                    <a href="" className="flex gap-2 ">

                        <div
                            className=" rounded-lg  p-2 bg-formColor w-40 flex justify-evenly hover:bg-innerFormColor">Древний
                            век <CancelIcon/></div>
                        <div
                            className=" rounded-lg  p-2 bg-formColor text-green-500 w-20 flex justify-evenly hover:bg-innerFormColor ">Easy <CancelIcon/>
                        </div>
                    </a>
                </div>

                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                        <tr className="border border-gray-300">
                            <th className="p-4  text-gray-400">User</th>
                            <th className="p-4 text-gray-400">Title</th>
                            <th className="p-4 text-gray-400">Average</th>
                            <th className="p-4 text-gray-400">Difficulty</th>
                            <th className="p-4 text-gray-400">Questions</th>
                        </tr>
                        </thead>
                        <tbody>

                        {users.map((user, index) => (




                                <tr key={index} className=" hover:bg-innerFormColor">
                                    <Link to={`/details/${user.id}`} key={user.id}>
                                    <td className="p-4">{user.user}</td>
                                    <td className="p-4">{user.title}</td>
                                    <td className="p-4  ">{user.average}</td>
                                    <td className={`p-4 font-bold ${getDifficultyColor(user.difficulty)}`}>{user.difficulty}</td>
                                    <td className="p-4">{user.questions}</td>
                                        </Link>
                                </tr>

                        ))}
                        </tbody>
                    </table>
                </div>

            </section>

        </>
    )
        ;
};
export default QuizesPage;