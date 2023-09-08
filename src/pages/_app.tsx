// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
// import { useLocalStorage } from "usehooks-ts";
// import { defaultTheme } from "../components/themes/defaultTheme";
import { GlobalStyle, LayoutContainer } from "../styles/global";
import { defaultTheme } from "../styles/theme/theme";
import { Header } from "../components/Header";

function App({ Component, pageProps }: AppProps) {
  // const [theme] = useLocalStorage("theme", defaultTheme);
  return (
    <ThemeProvider theme={defaultTheme}>
      <LayoutContainer>
        <Header />
        <Component {...pageProps} />
      </LayoutContainer>
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
