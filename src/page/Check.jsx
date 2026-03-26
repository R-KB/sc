import { Container } from "react-bootstrap";
import GenreList from "../component/GenreList";
import { useState } from "react";
import QuestionList from "../component/QuestionList";

export default function Check() {
  const [selectedGenreId, setSelectedGenreId] = useState(null);

  return (
    <>
      <Container>
        <h2>check</h2>
        <hr />
        <GenreList onSelect={setSelectedGenreId} />
        <QuestionList genreId={selectedGenreId} />
      </Container>
    </>
  );
}