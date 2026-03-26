import { useQuery } from "@tanstack/react-query";
import { getMemoByQuestion } from "../api/scApi";

export default function useGetMemoByQuestion(questionId) {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getMemoByQuestion(questionId),
    queryKey: ["memoByQuestion", questionId],
    staleTime: 60 * 1000,
    enabled: !!questionId,
  });

  return { memo: data, isLoading, isError };
}
