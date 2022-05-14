import React from "react";
import AppLayout from "../components/Container";
import styled from "styled-components";
import MusicCard from "../components/MusicCard";

function Main() {
  return (
    <AppLayout>
      <Box>
        <h1>플레이리스트</h1>
        <MusicCard />
      </Box>
    </AppLayout>
  );
}

export default Main;

const Box = styled.div``;
