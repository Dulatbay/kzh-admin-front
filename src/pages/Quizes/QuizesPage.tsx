    import { useEffect, useState } from "react";
    import { useNavigate } from "react-router-dom";
    import Nav from "../../components/Nav.tsx";
    import SearchIcon from "@mui/icons-material/Search";

    // Определение интерфейса для типа Quiz
    interface Quiz {
        id: string;
        author: string;
        title: string;
        average: number;
        difficulty: string;
        questions: string[];
        topics: string[];
    }

    const QuizesPage = () => {
        const navigate = useNavigate();
        const [quizzes, setQuizzes] = useState<Quiz[]>([]);
        const [error, setError] = useState<string>("");
        const [filter, setFilter] = useState<{
            page: number;
            size: number;
        }>({
            page: 0,
            size: 1,
        });

        const [availableTopics, setAvailableTopics] = useState<string[]>([]);
        const [availableDifficulties, setAvailableDifficulties] = useState<string[]>([]);

        // Функция для сборки query-параметров
        const buildQueryParams = (filter: Record<string, any>): string => {
            const params = new URLSearchParams();

            Object.keys(filter).forEach((key) => {
                const value = filter[key];
                if (Array.isArray(value) && value.length > 0) {
                    params.append(key, JSON.stringify(value));
                } else if (value !== "" && value !== null) {
                    params.append(key, value.toString());
                }
            });

            return params.toString();
        };

        useEffect(() => {
            const fetchQuizzes = async () => {
                try {
                    const token = localStorage.getItem("authToken");

                    const queryParams = buildQueryParams(filter);
                    const url = `http://35.244.23.124:8080/api/admin/quizzes?${queryParams}`;

                    const response = await fetch(url, {
                        method: "GET",
                        headers: {
                            Authorization: `Bearer ${token}`,
                            "Accept-Language": "RU",
                            Accept: "*/*",
                        },
                    });

                    if (!response.ok) {
                        throw new Error("Не удалось загрузить квизы. Попробуйте позже.");
                    }

                    const data = await response.json();

                    // Проверка наличия data.content
                    const content = data.content || [];
                    setQuizzes(content);

                    // Извлекаем уникальные темы и сложности
                    const topics = new Set<string>();
                    const difficulties = new Set<string>();

                    content.forEach((quiz: Quiz) => {
                        if (quiz.topics) {
                            quiz.topics.forEach((topic) => topics.add(topic));
                        }
                        if (quiz.difficulty) {
                            difficulties.add(quiz.difficulty);
                        }
                    });

                    setAvailableTopics(Array.from(topics));
                    setAvailableDifficulties(Array.from(difficulties));
                } catch (err) {
                    const errorMessage = (err as Error).message || "Произошла ошибка";
                    setError(errorMessage);
                }
            };


            fetchQuizzes();
        }, [filter]);

        const getDifficultyColor = (difficulty: string): string => {
            switch (difficulty) {
                case "EASY":
                    return "text-green-500";
                case "MEDIUM":
                    return "text-yellow-500";
                case "HARD":
                    return "text-red-500";
                default:
                    return "text-gray-500";
            }
        };

        const handleRowClick = (id: string) => {
            navigate(`/DetailUserQuiz/${id}`);
        };

        const handleFilterChange = (key: string, value: any) => {
            setFilter((prev) => ({
                ...prev,
                [key]: value,
            }));
        };

        return (
            <>
                <Nav />
                <section className="bg-bgColor text-white p-6 min-h-screen">
                    <h1 className="text-2xl font-bold mb-6">Квизы</h1>

                    {error && <p className="text-red-500">{error}</p>}

                    <div className="flex justify-between items-center gap-4">
                        <div className="flex gap-4">
                            <select
                                className="bg-innerFormColor text-gray-300 p-2 rounded-lg focus:outline-none w-54"
                                onChange={(e) =>
                                    handleFilterChange("topics", [...filter.topics, e.target.value])
                                }
                            >
                                <option value="">Темы</option>
                                {availableTopics.map((topic) => (
                                    <option key={topic} value={topic}>
                                        {topic}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="bg-innerFormColor text-gray-300 p-2 rounded-lg focus:outline-none w-55"
                                onChange={(e) => handleFilterChange("level", e.target.value)}
                            >
                                <option value="">Сложность</option>
                                {availableDifficulties.map((difficulty) => (
                                    <option key={difficulty} value={difficulty}>
                                        {difficulty}
                                    </option>
                                ))}
                            </select>
                            <select
                                className="bg-innerFormColor text-gray-300 p-2 rounded-lg focus:outline-none w-54"
                                onChange={(e) =>
                                    handleFilterChange("status", e.target.value === "Active")
                                }
                            >
                                <option value="Active">Активен</option>
                                <option value="Inactive">Неактивен</option>
                            </select>
                        </div>

                        <div className="flex items-center bg-innerFormColor rounded-lg w-72">
                            <SearchIcon className="text-gray-400 ml-2" />
                            <input
                                type="text"
                                placeholder="Поиск"
                                className="bg-innerFormColor text-gray-300 p-2 rounded-lg w-full focus:outline-none"
                                onChange={(e) => handleFilterChange("searchText", e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="overflow-x-auto mt-4">
                        <table className="table-auto w-full text-left border-collapse">
                            <thead>
                            <tr className="border border-gray-300">
                                <th className="p-4 text-gray-400">Автор</th>
                                <th className="p-4 text-gray-400">Название</th>
                                <th className="p-4 text-gray-400">Средняя оценка</th>
                                <th className="p-4 text-gray-400">Сложность</th>
                                <th className="p-4 text-gray-400">Вопросы</th>
                            </tr>
                            </thead>
                            <tbody>
                            {quizzes.map((quiz) => (
                                <tr
                                    key={quiz.id}
                                    className="hover:bg-innerFormColor cursor-pointer"
                                    onClick={() => handleRowClick(quiz.id)}
                                >
                                    <td className="p-4">{quiz.author || "N/A"}</td>
                                    <td className="p-4">{quiz.title}</td>
                                    <td className="p-4">{quiz.average || "N/A"}</td>
                                    <td
                                        className={`p-4 font-bold ${getDifficultyColor(
                                            quiz.difficulty
                                        )}`}
                                    >
                                        {quiz.difficulty}
                                    </td>
                                    <td className="p-4">{quiz.questions?.length || 0}</td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </section>
            </>
        );
    };

    export default QuizesPage;
