import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addQuestion } from "../api/scApi";

export default function useAddQuestion() {
    const queryClient = useQueryClient();
    const mutation = useMutation({
        mutationFn: (question) => addQuestion(question),
        onSuccess: () => queryClient.invalidateQueries({ queryKey: ["question"] })
    });
    const isSaving = mutation.isPending;
    const apiError = mutation.isError ? "登録できませんでした" : "";

    const add = async(question) => {
        try {
            await mutation.mutateAsync(question);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    };

    return { apiError, isSaving, add }
}