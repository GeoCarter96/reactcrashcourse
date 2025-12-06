import {Link} from 'react-router-dom' ;

function Nav() {
    return(
          <nav>
              <Link to="/">Home</Link>
               
                <Link to="users/kendrick">Kendrick</Link>
                <Link to="users/jcole">Jcole</Link>
            </nav>
    );
}

export default Nav;