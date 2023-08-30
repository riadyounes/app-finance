import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/theme/default";
import { Header } from "./components/Header";
import { Summary } from "./components/Summary";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <Header />
      <Summary />
    </ThemeProvider>
  );
}

export default App;
