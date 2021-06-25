import ContentBody from './components/content-body/content-body'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import DropDown from './components/drop-down/drop-down';

function App() {
  return (
    <div>
      <div id="dropdown">
        <DropDown />
      </div>
      <div id="app-container">
        <ContentBody />
        <p></p>
      </div>
    </div>

  );
}

export default App;
