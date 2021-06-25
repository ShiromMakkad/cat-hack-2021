import './header.css'
import DropDownComp from '../drop-down/drop-down'


function Header() {
  return (
    <div id="header-container">
      <p id="header-name">CatHack</p>
      <div class="pull-right">
        <DropDownComp id="dropdown" />
      </div>
    </div>
  );
}

export default Header;
