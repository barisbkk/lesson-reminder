import headerStyle from "./header.module.css";

const Header = () => {
  return (
    <header className={headerStyle.container}>
      <h1 className={headerStyle.header}>Lesson Reminder</h1>
    </header>
  );
};

export default Header;
