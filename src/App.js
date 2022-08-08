
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import styles from './app.module.css';
import {useAppDispatch, useAppSelector} from "./store/hooks";
import {Routes, Route} from "react-router-dom";
import Home from "./pages/home";
import Login from "./pages/login";

function App() {

  return (
    <div className={styles.app}>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        {/*<Route path="/login" element={<Login />}></Route>*/}
      </Routes>
    </div>
  );
}

export default App;
