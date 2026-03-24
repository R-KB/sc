import axios from "axios";

const ax = axios.create({
    baseURL: "http://localhost:8080/api",
    headers: { "Content-Type": "application/json"}
});

export async function getGenre() {
    const getG = await ax.get("/genre");
    return getG.data;
}

export async function getGenreById(id) {
    const getGI = await ax.get(`/genre/${id}`);
    return getGI.data;
}

export async function addGenre(genre) {
    await ax.post("/genre", genre);
}

export async function editGenre(genre) {
    await ax.put("/genre", genre);
}

export async function deleteGenre(id) {
    await ax.delete(`/genre/${id}`);
}


export async function getQuestion() {
    const getQ = await ax.get("/question");
    return getQ.data;
}

export async function getQuestionById(id) {
    const getQI = await ax.get(`/question/${id}`);
    return getQI.data;
}

export async function getQuestionByGenre(genreId) {
    const getQG = await ax.get(`/question/g/${genreId}`);
    return getQG.data;
}

export async function addQuestion(question) {
    await ax.post("/question", question);
}

export async function editQuestion(question) {
    await ax.put("/question", question);
}

export async function deleteQuestion(id) {
    await ax.delete(`/question/${id}`);
}

export async function getMemo() {
    const getM = await ax.get("/memo");
    return getM.data;
}

export async function getMemoById(id) {
    const getMI = await ax.get(`/memo/${id}`);
    return getMI.data;
}

export async function getMemoByQuestion(qId) {
    const getMQ = await ax.get(`/memo/g/${qId}`);
    return getMQ.data;
}

export async function addMemo(memo) {
    await ax.post("/memo", memo);
}

export async function editMemo(memo) {
    await ax.put("/memo", memo);
}

export async function deleteMemo(id) {
    await ax.delete(`/memo/${id}`);
}

