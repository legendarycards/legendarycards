// import Header from './Header';

import Navbar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = (props: Props) => {
  const navbarProps = {
    logo: "/legendary.svg",
    logoAlt: "/legendary.svg",
  };

  return (
    <>
      <div className="antialiased text-gray-800 dark:bg-black dark:text-gray-400">
        <Navbar {...navbarProps} />
        <div>{props.children}</div>

        <Footer {...props} />
      </div>
    </>
  )
}

export default Layout;
