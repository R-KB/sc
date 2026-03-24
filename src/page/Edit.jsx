import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import EditQuestion from "../component/EditQuestion";
import AddQuestion from "../component/AddQuestion";
import EditGenre from "../component/EditGenre";
import MakeGenre from "../component/MakeGenre";

export default function Edit() {
  const [active, setActive] = useState(null);

  const editBody = () => {
    switch(active) {
      case "MakeGenre":
        return <MakeGenre />;
      case "EditGenre":
        return <EditGenre />;
      case "AddQuestion":
        return <AddQuestion />;
      case "EditQuestion":
        return <EditQuestion />;
    }
  }

  return (
    <>
    <Container>
    <h2>編集ページ</h2>
    <hr />
    <div className="two-by edit__btn">
    <Button variant="success" size="lg" onClick={() => setActive("MakeGenre")}>
      ジャンル作成</Button>
    <Button variant="outline-success" size="lg" onClick={() => setActive("EditGenre")}>
      ジャンル編集</Button>
    <Button variant="info" size="lg" onClick={() => setActive("AddQuestion")}>
      問題追加</Button>
    <Button variant="outline-info" size="lg" onClick={() => setActive("EditQuestion")}>
      問題編集</Button>
    </div>
    <hr />
    <div className="edit-body">
      {editBody()}
    </div>
    </Container>
    </>
  )
}