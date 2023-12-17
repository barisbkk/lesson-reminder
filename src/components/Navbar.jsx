import navbarStyle from "./navbar.module.css";

function Navbar() {
  return (
    <nav className={navbarStyle.container}>
      <img
        className={navbarStyle.image}
        src="https://clarusway.com/wp-content/uploads/2022/02/clarusway-new-logo-white-1024x265.png"
        alt=""
      />
      <ul className={navbarStyle.list}>
        <li>Home</li>
        <li>About Us</li>
        <li>Contact Us</li>
      </ul>
    </nav>
  );
}

export default Navbar;
