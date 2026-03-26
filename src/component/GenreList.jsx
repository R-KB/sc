import { useState } from "react";
import { Alert, Button, Spinner } from "react-bootstrap";
import useGetGenre from "../hook/useGetGenre";

export default function GenreList({ onSelect }) {
  const { isLoading, isError, genre } = useGetGenre();
  const [page, setPage] = useState(1);

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

  if (!genre || genre.length === 0) {
    return <Alert variant="info">データがありません</Alert>;
  }

  const perPage = 6;
  const totalPages = Math.ceil(genre.length / perPage);
  const offset = (page - 1) * perPage;
  const pageGenres = genre.slice(offset, offset + perPage);

  return (
    <>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "0.75rem" }}>
        {pageGenres.map((g) => (
          <Button key={g.id} onClick={() => onSelect(g.id)}>
            {g.name}
          </Button>
        ))}
      </div>

      {totalPages > 1 && (
        <div className="d-flex justify-content-center align-items-center mt-3" style={{ gap: "0.5rem" }}>
          <Button size="sm" onClick={() => setPage((p) => Math.max(p - 1, 1))} disabled={page === 1}>
            前へ
          </Button>
          <span>{`${page} / ${totalPages}`}</span>
          <Button size="sm" onClick={() => setPage((p) => Math.min(p + 1, totalPages))} disabled={page === totalPages}>
            次へ
          </Button>
        </div>
      )}
    </>
  );
}
