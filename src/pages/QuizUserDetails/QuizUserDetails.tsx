import Nav from "../../components/Header/Nav.tsx";
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import {
    Button,
    Card,
    CardContent,
    Typography,
    Stack,
} from "@mui/material";
import {Link} from "react-router-dom";

const QuizUserDetails = () => {
    const questions = [
        {
            id: 1,
            question: "В каком году возродилось Казахское ханство?",
            options: ["1465", "1234", "1589", "1991"],
            correctAnswer: "1465",
        },
        {
            id: 2,
            question: "Кто был первым ханом Казахского ханства?",
            options: ["Абылай хан", "Жанибек хан", "Касым хан", "Тауке хан"],
            correctAnswer: "Жанибек хан",
        },
        {
            id: 3,
            question: "Какой город является столицей Казахстана?",
            options: ["Алматы", "Астана", "Шымкент", "Караганда"],
            correctAnswer: "Астана",
        },
    ];


    return (
        <>
            <Nav/>

            <section className="bg-bgColor text-white p-6 min-h-screen ">

                <div className="flex justify-evenly">
                    <Link to="/quizes">

                    <Button variant="outlined" style={{color: "grey", border: "0.1px solid grey"}}
                            startIcon={<KeyboardReturnIcon/>} scolor="error">Back</Button>
                    </Link>
                    <Button variant="contained" color="success">VERIFY ALL</Button>
                    <Button variant="outlined" color="error">REMOVE ALL</Button>
                </div>
                <div className="text-center  mt-custom-40">
                    <span>Quiz Title</span>
                    <p className="text-innerFormTextColor">At Microsoft, you’ll take risks, push boundaries, and grow
                        more than you thought possible. And you won’t be alone on that journey. </p>
                </div>


                <Stack spacing={3} width="70%" margin="0 auto">
                    {questions.map((q) => (
                        <Card key={q.id} sx={{p: 2, backgroundColor:'transparent',color: "white"}}>
                            <CardContent sx={{backgroundColor: "#282828"}}>
                                <Typography sx={{fontWeight: '300'}}
                                            fontWeight="bold"
                                            mb={4} textAlign="center"
                                >
                                    {q.id}. {q.question}
                                </Typography>
                                <Stack
                                    direction="row"
                                    spacing={2}
                                    justifyContent="space-evenly"
                                >
                                    {q.options.map((option, idx) => (
                                        <Typography
                                            key={idx}
                                            sx={{
                                                p: 1,
                                                borderRadius: "4px",


                                                color:
                                                    option === q.correctAnswer
                                                        ? "green"
                                                        : "white",
                                                borderColor:
                                                    option === q.correctAnswer
                                                        ? "green"
                                                        : "white",
                                                cursor: "pointer",
                                                transition: "0.3s",
                                                backgroundColor:
                                                    option === q.correctAnswer ? "transparent" : "#5A5757",
                                                width: '20%', textAlign:'center'
                                            }}
                                        >
                                            {option}
                                        </Typography>
                                    ))}
                                </Stack>

                            </CardContent>
                            <Stack
                                direction="row"
                                spacing={2}
                                justifyContent="space-between"
                                mt={2}
                            >
                                <Button
                                    variant="outlined"
                                    color="error"
                                    size="small"
                                >
                                    Remove
                                </Button>
                                <Button
                                    variant="contained"
                                    color="success"
                                    size="small"
                                >
                                    Verify
                                </Button>
                            </Stack>
                        </Card>
                    ))}
                </Stack>


            </section>
        </>
    );
};

export default QuizUserDetails;
