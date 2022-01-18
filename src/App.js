import './css/style.css';
import { Route, Switch } from 'react-router-dom';

//import common component
import Header from './components/common/Header.js';
import Footer from './components/common/Footer.js';

//import main component
import Main from './components/main/Main.js';

//import sub component
import Department from './components/sub/Department.js';
import Community from './components/sub/Community.js';
import Gallery from './components/sub/Gallery.js';
import Youtube from './components/sub/Youtube.js';
import Location from './components/sub/Location.js';
import Join from './components/sub/Join.js';


function App() {
  return (
    <div className="App">
      {/* Switch-같은 경로의 라우터가 복수개 연결되었을떄 상단의 라우터만 연결 처리 */}
      <Switch>
        <Route exact path="/">

          <Main />
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
