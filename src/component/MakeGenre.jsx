export default function MakeGenre() {
  return (
    <>
    <form onSubmit="handleSubmit">
        <label htmlFor="genre_title">タイトル：</label>
        <input type="text" id="genre_title" name="genre_title" placeholder="例：Java silver 01" />
        <input type="submit" value="作成" />
    </form>
    </>
  )
}