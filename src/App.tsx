import QuizesPage from "./pages/Quizes/QuizesPage.tsx";
import {Route, Routes} from "react-router-dom";
import QuizUserDetails from "./pages/QuizUserDetails/QuizUserDetails.tsx";
import SigninPage from "./pages/SignIn/SigninPage.tsx";

function App() {

    return (
            <Routes>
                <Route path="/" element={<SigninPage />} />
                <Route path="/quizes" element={<QuizesPage />} />
                <Route path="/DetailUserQuiz/:id" element={<QuizUserDetails />} />
            </Routes>
    )
}

export default App
