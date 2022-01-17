import './css/style.css';
import Anime from './class/anime.js';
import { Route, Switch } from 'react-router-dom';

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
  useEffect(() => {
    window.addEventListener("scroll", test);

    return () => {
      console.log("컴포넌트 사라짐");
      window.removeEventListener("scroll", test);
    }
  }, []);

  function test() {
    console.log("scroll");
  }

  return (
    <div className="App">
      {/*switch-같은 경로의 라우터가 복수개 연결되었을때 상단의 라우터만 연결 처리*/}
      <Switch>
        <Route exact path="/">
          <Header type={'main'} />
          <Visual />
          <Info />
        </Route>

        <Route path='/'>
        <Header type={'sub'} />
      </Route>

      </Switch>




      <Route path="/department" component={Department}></Route>
      <Route path="/community" component={Community}></Route>
      <Route path="/gallery" component={Gallery}></Route>
      <Route path="/youtube" component={Youtube}></Route>
      <Route path="/location" component={Location}></Route>
      <Route path="/join" component={Join}></Route>

      <Footer />
    </div>
  );
}

export default App;
