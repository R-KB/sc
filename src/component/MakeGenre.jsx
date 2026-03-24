import { useForm } from "react-hook-form";
import useAddGenre from "../hook/useAddGenre"
import { Alert, Button } from "react-bootstrap";

export default function MakeGenre() {
  const { apiError, isSaving, add } = useAddGenre();
  const {
    register, handleSubmit, reset, formState: { errors, isSubmitted }
  } = useForm({
    defaultValues: { name: "" }, mode: "onSubmit", reValidateMode: "onSubmit"
  });

  const inputName = register("name", { required: true});

  const submitHandler = async(data) => {
    const success = await add(data);
    if(success) {
      console.log("登録完了");
      reset();
    }
  };
  return (
    <>
      {isSubmitted && Object.keys(errors).length > 0 && (<Alert variant="danger">入力してください</Alert>)}
      {apiError && <Alert variant="danger">{apiError}</Alert>}

    <form onSubmit={handleSubmit(submitHandler)}>
        <label htmlFor="genre_title">タイトル：</label>
        <input type="text" id="genre_title" name="genre_title" placeholder="例：Java silver 01" {...inputName} />
        <Button type="submit" disabled={isSaving}>作成</Button>
    </form>



    </>
  )
}