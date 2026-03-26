import { useQuery } from "@tanstack/react-query";
import { getQuestionByGenre } from "../api/scApi";

export default function useGetQuestionByGenre(genreId) {
  const { data, isLoading, isError } = useQuery({
    queryFn: () => getQuestionByGenre(genreId),
    queryKey: ["questionByGenre", genreId],
    staleTime: 60 * 1000,
    enabled: !!genreId,
  });

  return { question: data, isLoading, isError };
}
