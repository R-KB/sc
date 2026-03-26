import { useForm } from "react-hook-form";
import { useRef } from "react";
import useAddQuestion from "../hook/useAddQuestion";
import { Alert, Button } from "react-bootstrap";

export default function AddQuestion() {
  const { apiError, isSaving, add } = useAddQuestion();
  const fileRef = useRef(null);
  const {
    register, handleSubmit, reset, formState: { errors, isSubmitted }
  } = useForm({
    defaultValues: { genreId: "", description: "", answer:"" }, mode: "onSubmit", reValidateMode: "onSubmit"
  });

  const inputGenreId = register("genreId", { required: true });
  const inputDescription = register("description", { required: true });
  const inputAnswer = register("answer", { required: true });

  const submitHandler = async(data) => {
    const formData = new FormData();
    formData.append("genreId", data.genreId);
    formData.append("description", data.description);
    formData.append("answer", data.answer);
    if (fileRef.current && fileRef.current.files[0]) {
      formData.append("img", fileRef.current.files[0]);
    }
    const success = await add(formData);
    if(success) {
      console.log("登録完了");
      reset();
      if (fileRef.current) fileRef.current.value = "";
    }
  };
  return (
    <>
      <h3>新規問題追加</h3>
      <hr />
      {isSubmitted && Object.keys(errors).length > 0 && (<Alert variant="danger">入力してください</Alert>)}
      {apiError && <Alert variant="danger">{apiError}</Alert>}

    <form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="q_genreId">ジャンルID：</label>
        <input type="number" id="q_genreId" name="q_genreId" {...inputGenreId} />

        <label htmlFor="q_img">問題画像：</label>
        <input type="file" id="q_img" name="q_img" ref={fileRef} accept="image/*" />

        <label htmlFor="q_description">問題文：</label>
        <input type="text" id="q_description" name="q_description" {...inputDescription} />

        <label htmlFor="q_answer">答え：</label>
        <input type="text" id="q_answer" name="q_answer" {...inputAnswer} />

        <Button type="submit" disabled={isSaving}>作成</Button>
    </form>



    </>
  )
}