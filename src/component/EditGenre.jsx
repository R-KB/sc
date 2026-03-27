import { Alert, Button, Spinner } from "react-bootstrap";
import { useState } from "react";
import useGetGenre from "../hook/useGetGenre";
import useEditGenre from "../hook/useEditGenre";

export default function EditGenre() {
  const { isLoading, isError, genre } = useGetGenre();
  const { edit, isSaving, apiError } = useEditGenre();

  const [editingId, setEditingId] = useState(null);
  const [editingName, setEditingName] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const startEdit = (item) => {
    setEditingId(item.id);
    setEditingName(item.name);
    setErrorMessage("");
  };

  const cancelEdit = () => {
    setEditingId(null);
    setEditingName("");
    setErrorMessage("");
  };

  const saveEdit = async () => {
    const trimmed = editingName.trim();
    if (!trimmed) {
      setErrorMessage("ジャンル名は空白以外の文字で入力してください。");
      return;
    }

    const success = await edit({ id: editingId, name: trimmed });
    if (success) {
      cancelEdit();
    } else {
      setErrorMessage("ジャンルの更新に失敗しました。");
    }
  };

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

  return (
    <>
      <h3>ジャンル編集</h3>
      <hr />
      {errorMessage && <Alert variant="danger">{errorMessage}</Alert>}
      {apiError && <Alert variant="danger">{apiError}</Alert>}
      <ul>
        {genre.map((item) => (
          <li
            key={item.id}
            className="genre__edit--p"
            style={{ cursor: "pointer" }}
            onClick={() => startEdit(item)}
          >
            {editingId === item.id ? (
              <>
                <input
                  value={editingName}
                  onChange={(e) => setEditingName(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      e.stopPropagation();
                      saveEdit();
                    }
                    if (e.key === "Escape") {
                      e.stopPropagation();
                      cancelEdit();
                    }
                  }}
                  autoFocus
                  disabled={isSaving}
                />
                <Button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    saveEdit();
                  }}
                  disabled={isSaving}
                >
                  変更
                </Button>
                <Button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    cancelEdit();
                  }}
                  disabled={isSaving}
                >
                  キャンセル
                </Button>
              </>
            ) : (
              <span>{item.id}. {item.name}</span>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}
