// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
// import { useLocalStorage } from "usehooks-ts";
// import { defaultTheme } from "../components/themes/defaultTheme";
import { GlobalStyles } from "../styles/global";
import { theme } from "../styles/theme/theme";

function App({ Component, pageProps }: AppProps) {
  // const [theme] = useLocalStorage("theme", defaultTheme);
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
      <GlobalStyles />
    </ThemeProvider>
  );
}
export default App;
