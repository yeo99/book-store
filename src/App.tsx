import Home from './Pages/Home'
import Layout from './components/layout/layout';

function App() {
  return (
    <Layout children={<Home/>}/>
  );
}

export default App;