// import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addGenre } from "../api/scApi";
import { useState } from "react";

export default function useAddGenre() {
//     const queryClient = useQueryClient();
//     const mutation = useMutation({
//         mutationFn: (genre) => addGenre(genre),
//         onSuccess: () => queryClient.invalidateQueries({ queryKey: ["genre"] })
//     });
//     const isSaving = mutation.isPending;
//     const apiError = mutation.isError ? "登録できませんでした" : "";

//     const add = async(genre) => {
//         try {
//             await mutation.mutateAsync(genre);
//             return true;
//         } catch (e) {
//             console.log(e);
//             return false;
//         }
//     };

//   return { apiError, isSaving, add }


 const [isSaving, setIsSaving] = useState(false);
 const [apiError, setApiError] = useState("");
 // 製品情報の追加処理。追加の成否を真偽値で返す
 const add = async (genre) => {
 setIsSaving(true);
 setApiError("");
 try {
 await addGenre(genre);
 return true;
 } catch (e) {
 console.log(e);
 setApiError("登録に失敗しました");
 return false;
 } finally {
 setIsSaving(false);
 }
 };
 return { apiError, isSaving, add };

}