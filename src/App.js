
import './App.css';
import AmpleIcon from "./ample-icon/ample-icon";

function App() {

    return (
    <div className="App">
        <h1>Ample icons</h1>
        <div className="content-wrapper">
          <div className="icons">
              <AmpleIcon icon="data-2"/>
              <AmpleIcon icon="heart"/>
              <AmpleIcon icon="calendar-remove"/>
              <AmpleIcon icon="refresh"/>
              <AmpleIcon icon="align-left"/>
              <AmpleIcon icon="clipboard-text"/>
            <AmpleIcon icon="archive"/>
            <AmpleIcon icon="home"/>
            <AmpleIcon icon="clock"/>
            <AmpleIcon icon="notification"/>
            <AmpleIcon icon="candle"/>
          </div>
        </div>
    </div>
  );
}

export default App;
