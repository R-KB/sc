import { Alert, Spinner } from "react-bootstrap";
import useGetQuestion from "../hook/useGetQuestion"

export default function EditQuestion() {
  const { isLoading, isError, question } = useGetQuestion();
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

  return (<>
    <h3>問題編集</h3>
    <hr />
    <ul>
      {question.map((question) => (
        <li key={question.id} className="question__edit--p">
          {question.genreId}-{question.id}. {question.description}
          {question.answer}
        </li>
      ))}
    </ul>
    </>
  );
}