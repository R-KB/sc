import { Alert, Spinner } from "react-bootstrap";
import useGetGenre from "../hook/useGetGenre"

export default function EditGenre() {
  const { isLoading, isError, genre } = useGetGenre();
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

  if(genre.length === 0) {
    return <Alert variant="info">データがありません</Alert>;
  }

  return (<>
    <h3>ジャンル編集</h3>
    <hr />
    <ul>
      {genre.map((genre) => (
        <li key={genre.id} className="genre__edit--p">
          {genre.id}. {genre.name}
        </li>
      ))}
    </ul>
    </>
  );
}