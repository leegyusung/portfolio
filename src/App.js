import { Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import CompanyProject from './pages/CompanyProject';

function App() {
  return (
    <>
      <Route component={MainPage} path="/" exact></Route>
      <Route component={AboutPage} path="/about"></Route>
      <Route component={CompanyProject} path="/project"></Route>
    </>
  );
}

export default App;
