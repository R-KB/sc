import { useQuery } from "@tanstack/react-query";
import { getQuestion } from "../api/scApi";

export default function useGetQuestion() {
const { data, isLoading, isError } = useQuery({
    queryFn: getQuestion,
    queryKey: ["question"],
    staleTime: 60 * 1000
});

  return { question: data, isLoading, isError };
}