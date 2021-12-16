import React,{ useState } from 'react';
import styled from 'styled-components';
import * as FaIcons from "react-icons/fa";
import {ReactComponent as LogoImg} from "../img/logo_orange.svg";
import { useLocation } from 'react-router-dom';
import { SidebarData } from "./SidebarData";

const Bar = styled.div`
    position: fixed;
  width: 100%;
  height: 80px;
  display: flex;
  vertical-align: center;
  z-index: 1001;
  background-color: ${props => props.isFirst ? 'transparent' : '#FFFFFF'}
`;

const Logo = styled(LogoImg)`
  height: 17px;
  margin: auto auto auto 25px;
`;

const MenuIcon = styled(FaIcons.FaBars)`
  margin: auto 25px auto auto;
  color: #afabab;
`;

const CloseIcon = styled(FaIcons.FaTimes)`
  margin: auto 25px auto auto;
  color: #afabab;
`;

const NavMenu = styled.nav`
  position: fixed;
  top: 0;
  padding: 80px 0 0 0;
  width: 100%;
  background: white;
  border-bottom: 1.8px solid #afabab;
  z-index: 1000;
`;

const List = styled.ul`
  list-style-type: none;
  margin: 0 0 0 25px;
`;

const ListContent = styled.li`
  padding: 0 0 1.6rem 0;
`;

const ListContentText = styled.a`
  text-decoration: none;
  color: #6a707e;
  font-size: 0.938rem;
  line-height: 1.3rem;
  font-weight: 500;
`;


function NavBar(){
  const [sidebar, setSidebar] = useState(false);
  const location = useLocation();
  const showSidebar = () => setSidebar(!sidebar);

    return(
      <>
      <Bar isFirst={location.pathname === '/' } >
        <Logo fill={location.pathname === '/' && !sidebar ? '#FFF' : '#c4442a'} />
        {
          sidebar ? <CloseIcon onClick={showSidebar}/> : <MenuIcon onClick={showSidebar} />
        }
      </Bar>
      {
        sidebar &&
          <NavMenu>
            <List>
            {SidebarData.map((item, index) => {
                return (
                  <ListContent key={index}>
                    {/* 이부분 확인 */}
                      <ListContentText href="https://www.notion.so/dotoribox/b74bc4b7643e4fc08ff5d0b4100451b4">
                        {item.title}
                      </ListContentText>
                  </ListContent>
                );
              })}
            </List>
          </NavMenu>
      }
      </>
    );

}

export default NavBar;