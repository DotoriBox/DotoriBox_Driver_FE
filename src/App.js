import Background from './components/Background';
import {BrowserRouter as Router, Routes, Route, useLocation} from 'react-router-dom' ;
import NavBar from './components/NavBar';
import styled from 'styled-components';

//test
import MainPage from './page/MainPage'
import JoinPageFirst from './page/JoinPageFirst';

const Page = styled.div`
  width: calc(100% - 50px);
  min-height: calc(100vh - 105px);
  height: calc(100vh - 105px);
  padding: 0 25px 25px 25px;
  position: relative;
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
            <Route path='/' element={<MainPage/>}/>
            <Route path='/joinpage1' element={<JoinPageFirst/>}/>
            {/* <Route path='/selectInfo' component={pages.SelectInfoPage}/> 
            <Route path='/recommend' component={pages.RecommendPage}/>
            <Route path='/thanks' component={pages.ThanksPage}/>
            <Route path='/experience'  component={pages.ExperiencePage}/>
            <Route path='/information' component={pages.InformPage} /> */}
          </Routes> 
        </Page> 
      </Background>
    </Router>
  );
}

export default App;
