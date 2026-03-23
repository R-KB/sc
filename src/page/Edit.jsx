import { Button, Container } from "react-bootstrap";
import { useState } from "react";
import EditContent from "../component/EditContent";
import AddContent from "../component/AddContent";
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
      case "AddContent":
        return <AddContent />;
      case "EditContent":
        return <EditContent />;
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
    <Button variant="info" size="lg" onClick={() => setActive("AddContent")}>
      問題追加</Button>
    <Button variant="outline-info" size="lg" onClick={() => setActive("EditContent")}>
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