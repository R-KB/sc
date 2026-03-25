import { Container } from "react-bootstrap";
import GenreList from "../component/GenreList";
import { useState } from "react";
import QuestionList from "../component/QuestionList";

export default function Check() {
  const [selectedGenre, setSelectedGenre] = useState(null);
  return (
    <>
    <Container>
      <h2>check</h2>
      <hr />
      <div className="two-by">
      <GenreList onSelect={setSelectedGenre} />
      {selectedGenre && <QuestionList genreId={selectedGenre.genreId} />}
      </div>
    </Container>
    </>
  )
}