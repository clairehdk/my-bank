import logo from "../../assets/img/logo.png";

import Logo from "./Logo";
import User from "./User";

const Header = () => {
  return (
    <div class="header">
      <div>
        <Logo img={logo} />
        <User username="Claire" />
      </div>
    </div>
  );
};

export default Header;
