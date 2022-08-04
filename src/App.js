
import Sidebar from "./components/sidebar/sidebar";
import Main from "./components/main/main";
import styles from './app.module.css';
import {useAppDispatch, useAppSelector} from "./store/hooks";

function App() {

  return (
    <div className={styles.app}>
      <Sidebar />
      <Main />
    </div>
  );
}

export default App;
