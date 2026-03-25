import useGetQuestionByGenre from "../hook/useGetQuestionByGenre";
import { Alert, Spinner } from "react-bootstrap";

export default function QuestionList(genreId) {
  const [question, isLoading, isError] = useGetQuestionByGenre(genreId);
  if(isError) {
    return <Alert variant="danger">データ取得エラー</Alert>;
  }

  if(isLoading) {
    return (
      <Alert className="d-flex justify-content-center">
        <Spinner animation="border" />
      </Alert>
    );
  }

  if(question.length === 0) {
    return <Alert variant="info">データがありません</Alert>;
  }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>問題</th>
          <th>答え</th>
        </tr>
      </thead>
      <tbody>
        {question.map((question) => (
          <tr key={question.id}>
            <td>{question.id}</td>
            <td>{question.description}</td>
            <td>{question.answer}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
