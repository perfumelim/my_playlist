import React from "react";
import AppLayout from "../components/Container";
import useAudioQuery from "../hooks/useAudioQuery";
function Main() {
  const { playlist, isError, isLoading } = useAudioQuery();
  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  return (
    <AppLayout>
      <h1>playlist</h1>
      {playlist.items.map((data: any) => (
        <div key={data.id}>
          <p>{data.title}</p>
        </div>
      ))}
    </AppLayout>
  );
}

export default Main;
