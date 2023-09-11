// pages/_app.tsx
import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
// import { useLocalStorage } from "usehooks-ts";
// import { defaultTheme } from "../components/themes/defaultTheme";
import { GlobalStyle, LayoutContainer, Main } from "../styles/global";
import { theme } from "../styles/theme/theme";

import DashboardLayout from "../components/DashboardLayout/DashboardLayout";

function App({ Component, pageProps }: AppProps) {
  // const [theme] = useLocalStorage("theme", defaultTheme);
  return (
    <ThemeProvider theme={theme}>
        {/* <Main> */}
          {/* <Sidebar /> */}
          <DashboardLayout>
        {/* <Header /> */}

          <Component {...pageProps} />
      </DashboardLayout>
        {/* </Main> */}
      <GlobalStyle />
    </ThemeProvider>
  );
}
export default App;
