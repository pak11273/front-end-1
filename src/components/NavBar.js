export const NavBar = () => {
    return (
        <nav>
            <div className="logo">
              <p>Secret Food Recipes!</p>
            </div>
            <ul className='nav-links'>
                <li>
                  <a href='/'>Home</a>
                </li>
                <li>
                  <a href='/login'>Login</a>
                </li>
                <li>
                  <a href='/signup'>Sign Up</a>
                </li>
             </ul>
        </nav>
    )
}