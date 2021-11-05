import type { NextPage } from "next";
import Head from "next/head";
import { ThemeProvider } from "@material-ui/core";

import theme from "../app/theme";
import { PageWrap } from "../styles/styles";
import { Example } from "../components/Examples";
import { Content } from "../components/Content";

const Home: NextPage = () => (
  <>
    <Head>
      <title>Knife</title>
      <meta name="description" content="Knife typography" />
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <ThemeProvider theme={theme}>
      <PageWrap>
        <Content />
        <Example />
      </PageWrap>
    </ThemeProvider>
  </>
);

export default Home;
