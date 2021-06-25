import './header.css'
import DropDownComp from '../drop-down/drop-down'


function Header() {
  return (
    <div id="header-container">
      <p id="header-name">CatHack</p>
      <DropDownComp id="dropdown" />
    </div>
  );
}

export default Header;
