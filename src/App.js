import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './Components/Header/header';
import store from './configureStore';
import Rocket from './Components/Rockets/Rocket';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Header />

          <hr />
          <div className="content">
            <Routes>
              <Route path="/" element={<>Missions</>} />
              <Route path="/Rockets" element={<>Rockets</>} />
              <Route path="/Profile" element={<>Profile</>} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;
