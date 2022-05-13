import { useQuery } from "react-query";
import axios from "axios";

export default function useAudioQuery() {
  const { data, isLoading, isError } = useQuery("playlist", () =>
    axios.get("http://localhost:8000/musics").then((res) => res.data)
  );

  return {
    isLoading,
    isError,
    playlist: data,
  };
}
