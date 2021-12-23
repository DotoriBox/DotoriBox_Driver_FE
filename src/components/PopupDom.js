 // https://ddeck.tistory.com/41 

import ReactDom from 'react-dom';

const PopupDom = ({ children }) => {
    const element = document.getElementById('parentDom');
    return ReactDom.createPortal(children, element); 
};

export default PopupDom;