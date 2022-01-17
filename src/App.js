import './css/style.css';
import Anime from './class/anime.js';
import { Route, Switch } from 'react-router-dom';
//import common component
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';
//import main component
import Visual from './components/main/Visual.js';
import News from './components/main/News.js';
import Intro from './components/main/Intro.js';
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
  const main = useRef(null);
  //useRef로 값이 변경될때마다 재렌더링을 막으면서 특정값을 컴포넌트에서 사용해야 될때
  let pos = useRef([]);

  const getPos = () => {
    //참조된 main요소 안쪽의 myScroll박스를 모두 찾아서 
    //해당 요소의 세로위치값을 배열에 담아서
    //다시 useRef로 참조한 pos변수에 옮겨담음
    const secs = main.current.querySelectorAll('.myScroll');
    let arr = [];
    for (let sec of secs) arr.push(sec.offsetTop);
    pos.current = arr;
    console.log(pos.current);
  }

  useEffect(() => {
    //처음 컴포넌트 생성시 배열값 생성
    getPos();

    //브라우저가 리사이즈 될 떄마다 getPos호출해서 배열값 갱신
    window.addEventListener('resize', getPos);
    return () => {
      window.removeEventListener('resize',getPos);
    }
  }, []);


  return (
    <div className="App">
      {/* Switch-같은 경로의 라우터가 복수개 연결되었을떄 상단의 라우터만 연결 처리 */}
      <Switch>
        <Route exact path="/">
          <Header type={'main'} />
          <div ref={main}>
            <Visual />
            <News />
            <Intro />
            <Info />
          </div>
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
