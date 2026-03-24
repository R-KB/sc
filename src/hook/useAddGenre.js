import { useMutation, useQueryClient } from "@tanstack/react-query"
import { addGenre } from "../api/scApi";

export default function useAddGenre() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (genre) => addGenre(genre),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["genre"] })
    });
    const isSaving = mutation.isPending;
    const apiError = mutation.isError ? "登録できませんでした" : "";

    const add = async(genre) => {
        try {
            await mutation.mutateAsync(genre);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    return { apiError, isSaving, add }

}