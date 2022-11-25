let quizAnswers = []
let ansQuiz = {}


export function setDictionaryAnswers(questions, answers) {
    quizAnswers = questions;
    ansQuiz = answers
}

export function getQuizAnswers() {
    return quizAnswers;
}

export function getAnswerQuiz() {
    return ansQuiz;
}

export default setDictionaryAnswers;