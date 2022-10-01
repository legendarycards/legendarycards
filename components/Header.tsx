// Import the link props
import Link from 'next/link';

// add the React Header Element
const Header: React.FC = () => {

  return (
    // header value

    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link href="/">
          <a className="navbar-brand" href="#">
            Vintage Rare Cards
          </a>
        </Link>
      </div>
    </nav>
  )
  
}

// export Header module
export default Header;