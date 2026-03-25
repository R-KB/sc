import { Alert, Button, Spinner } from "react-bootstrap";
import useGetGenre from "../hook/useGetGenre";

export default function GenreList({ onSelect }) {
  const { isLoading, isError, genre } = useGetGenre();
  if (isError) {
    return <Alert variant="danger">データ取得エラー</Alert>;
  }

  if (isLoading) {
    return (
      <Alert className="d-flex justify-content-center">
        <Spinner animation="border" />
      </Alert>
    );
  }

  if (genre.length === 0) {
    return <Alert variant="info">データがありません</Alert>;
  }
  return (
    <ul>
      {genre.map((genre) => (
        <li key={genre.id}>
          <Button onClick={() => onSelect({ genreId: genre.id })}>{genre.name}</Button>
        </li>
      ))}
    </ul>
  );
}
