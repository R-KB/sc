import { useQuery } from "@tanstack/react-query";
import { getGenre } from "../api/scApi";

export default function useGetGenre() {
const { data, isLoading, isError } = useQuery({
    queryFn: getGenre,
    queryKey: ["genre"],
    staleTime: 60 * 1000
});

  return { genre: data, isLoading, isError };
}