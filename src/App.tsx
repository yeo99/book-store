import Home from './Pages/Home'
import Layout from './components/layout/Layout';
import { GlobalStyle } from './style/global';
import { ThemeProvider } from 'styled-components';
import { light, dark } from './style/theme';

function App() {
  return (
    <>
      <ThemeProvider theme={dark}>
        <GlobalStyle themeName="light"/>
        <Layout>
          <Home/>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;