import React from "react";
import AppLayout from "../components/Container";
import useAudioQuery from "../hooks/useAudioQuery";
import styled from "styled-components";

function Main() {
  const { playlist, isError, isLoading } = useAudioQuery();
  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  let actx = new AudioContext();
  let out = actx.destination;
  let osc = actx.createOscillator();
  let gain = actx.createGain();

  osc.connect(gain);
  gain.connect(out);
  return (
    <AppLayout>
      <Box>
        <h1>플레이리스트</h1>
        {playlist.items.map((data: any) => (
          <Card key={data.id}>
            <button onClick={() => osc.start()}>play</button>
            <button onClick={() => osc.stop()}>stop</button>
            <audio src={data.url}></audio>
            <p>{data.title}</p>
            <p>#{data.moods}</p>
            <p>{data.genre}</p>
            <p>{data.public_date}</p>
          </Card>
        ))}
      </Box>
    </AppLayout>
  );
}

export default Main;

const Box = styled.div``;

const Card = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 70vw;
  height: 45px;
  padding: 7px 15px;
  border: 1px solid #eee;
  border-radius: 10px;
`;
