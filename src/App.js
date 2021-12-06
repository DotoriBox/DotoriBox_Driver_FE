import MainPage from './page/MainPage'
import Background from './components/Background';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom' ;

function App() {
  return (
    <Router>
      <Background>
        {/* <Nav / >  */}
      </Background>
    </Router>
  );
}

export default App;
