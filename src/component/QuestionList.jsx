import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getQuestionByGenre } from "../api/scApi";

const QuestionList = () => {
  const { genreId } = useParams();
  const [question, setQuestion] = useState([]);

  useEffect(() => {
    getQuestionByGenre(genreId).then(res => {
      const shuffled = res.data.sort(() => 0.5 - Math.random());
      setQuestion(shuffled.slice(0, 5));
    });
  }, [genreId]);

  return (
    <div>
      <h3>関連データ</h3>
      <ul>
        {question.map((question) => (
          <li key={question.id}>
            {question.id} / {question.description} / {question.answer}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default QuestionList;
