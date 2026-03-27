import { useMutation, useQueryClient } from "@tanstack/react-query";
import { editGenre } from "../api/scApi";

export default function useEditGenre() {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: (genre) => editGenre(genre),
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["genre"] }),
  });

  const isSaving = mutation.isPending;
  const apiError = mutation.isError ? "更新できませんでした" : "";

  const edit = async (genre) => {
    try {
      await mutation.mutateAsync(genre);
      return true;
    } catch (e) {
      console.error(e);
      return false;
    }
  };

  return { apiError, isSaving, edit };
}
