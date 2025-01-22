import Home from './Pages/Home'
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout children={<Home/>}/>
  );
}

export default App;