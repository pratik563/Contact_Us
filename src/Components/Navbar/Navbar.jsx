import styles from "./Navbar.module.css"

function Navbar() {
  return (
    <nav className={`${styles.navbar} container`}>
      <div className="nav-logo">
        <img src="/images/logo.png" alt="main-logo" />
      </div>

      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Contact</a></li>
      </ul>
    </nav>
  )
}

export default Navbar