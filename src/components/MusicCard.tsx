import React from "react";
import { arrayBuffer } from "stream/consumers";
import styled from "styled-components";
import useAudioQuery from "../hooks/useAudioQuery";

function MusicCard() {
  const { playlist, isError, isLoading } = useAudioQuery();
  if (isLoading) return <div> ...loading</div>;
  if (isError) return <div>요청에 실패했습니다.</div>;

  const audioCtx = new AudioContext();
  let out = audioCtx.destination;
  let osc = audioCtx.createOscillator();
  let gain = audioCtx.createGain();

  osc.connect(gain);
  gain.connect(out);
  return (
    <Container>
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
    </Container>
  );
}

export default MusicCard;

const Container = styled.div``;

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
