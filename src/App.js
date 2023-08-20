import './App.css';

import { useState } from 'react';

import { isMobile } from 'react-device-detect';
import { Header } from './layout/web/header/Header';
import { Left } from './layout/web/left/Left';
import { Content } from './layout/web/content/Content';
import { Footer } from './layout/web/footer/Footer';

import { Header as MHeader } from './layout/mobile/header/Header';
import { Left as MLeft } from './layout/mobile/left/Left';
import { Content as MContent } from './layout/mobile/content/Content';
import { Footer as MFooter } from './layout/mobile/footer/Footer';

function App() {

  const [ selectMenu, setSelectMenu ] = useState('');

  const menuChange = (menu) => {
    setSelectMenu(menu);
  }

  if(!isMobile) {
    return (
      <>
        <Header/>
        <Left menuChange={menuChange} selectMenu={selectMenu} />
        <Content selectMenu={selectMenu} />
        <Footer/>
      </>
    );
  } else {
    return (
      <>
        <MHeader/>
        <MLeft/>
        <MContent/>
        <MFooter/>
      </>
    );
  }
}

export default App;
