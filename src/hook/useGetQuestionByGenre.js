import { useQuery } from "@tanstack/react-query"
import { getQuestionById } from "../api/scApi"

export default function useGetQuestionByGenre(genreId) {
    const { data, isLoading, isError } = useQuery({
        queryFn: getQuestionById(genreId),
        queryKey: ["question", genreId]
    })
  return {question: data, isLoading, isError};
}