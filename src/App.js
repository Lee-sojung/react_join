import './css/style.css';
import Anime from './class/anime.js';
import {Route} from 'react-router-dom';

//import common component
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

//import main component
import Visual from './components/main/Visual.js';
import Info from './components/main/Info.js';

//import sub component
import Department from './components/sub/Department.js';
import Community from './components/sub/Community.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location.js';
import Join from './components/sub/Join.js';
import { useEffect, useRef } from 'react';


function App() {
  let box = useRef(null);
  useEffect(()=>{
    window.addEventListener("scroll",test);

    return ()=>{
      console.log("컴포넌트 사라짐");
      window.removeEventListener("scroll", test);
    }
  },[]);

  function test(){
    console.log("scroll");
  }

  return (
    <div className="App">    
      <Header />

      <Route exact path="/">
        <Visual />
        {/* 해당 버튼 클릭시 useRef로 참조된 박스 이동 */}
        <button onClick={()=>{
          new Anime(box.current,{
            prop: 'margin-left',
            value: 600,
            duration: 500
          })
        }}>박스이동</button>

        {/* 해당 버튼 클릭시 window의 스크롤 이동 */}
        <button onClick={()=>{
          new Anime(window,{
            prop: 'scroll',
            value: 100,
            duration: 1000
          })
        }}>스크롤이동</button>

        <div id="box" ref={box}></div>
        <Info />
      </Route>      

      <Route  path="/department" component={Department}></Route>
      <Route  path="/community" component={Community}></Route>
      <Route  path="/gallery" component={Gallery}></Route>
      <Route  path="/youtube" component={Youtube}></Route>
      <Route  path="/location" component={Location}></Route>
      <Route  path="/join" component={Join}></Route>      

      <Footer />  
    </div>
  );
}

export default App;
