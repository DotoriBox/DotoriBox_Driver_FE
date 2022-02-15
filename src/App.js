import Background from './components/Background';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom' ;
import NavBar from './components/NavBar';
import styled from 'styled-components';

//test
import RandingPage from './page/RandingPage'
import JoinPageFirst from './page/JoinPageFirst';
import JoinPageSecond from './page/JoinPageSecond';
import SuccessJoin from './page/SuccessJoin';
import MainPage from './page/MainPage';
import Auth from './page/Auth';

const Page = styled.div`
  width: calc(100% - 50px);
  min-height: calc(100vh - 105px);
  height: calc(100vh - 105px);
  padding: 0 25px 25px 25px;
  top: 0;
  right: 0;
`;

const Nav = styled(NavBar)`
  height: 80px;
  width: 100%;
`;

const Block = styled.div`
    height: 80px;
`;

function App() {
  return (
    <Router>
      <Background>
        <Nav/>
        <Page>
          <Block/>
          <Routes>
            <Route path='/' element={<RandingPage/>}/>
            <Route path='/joinpage1' element={<JoinPageFirst/>}/>
            <Route path='/joinpage2' element ={<JoinPageSecond/>}/>
            <Route path='/successjoin' element ={<SuccessJoin/>}/>
            <Route path='/mainpage' element={<MainPage/>}/>
            <Route path='/auth' element={<Auth/>} />
          </Routes> 
        </Page> 
      </Background>
    </Router>
  );
}

export default App;
