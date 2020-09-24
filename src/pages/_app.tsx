import { ReactQueryCacheProvider, QueryCache } from "react-query";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";

const queryCache = new QueryCache();

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <CSSReset />
      <ReactQueryCacheProvider queryCache={queryCache}>
        <Component {...pageProps} />
      </ReactQueryCacheProvider>
    </ThemeProvider>
  );
}
