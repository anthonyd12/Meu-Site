import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"
import logo from "./../../assets/logosite.png"

function Navbar(){
    return (
        <nav className={styles.navMae}>
            <div>
                <div className={styles.title}>
                    <h1>Front-End<br/>Developer</h1>
                </div>
            </div>
            <ul className={styles.list}>
                <li className={styles.item}>
                    <Link to="/">Home</Link>
                </li>
                <li className={styles.item}><Link to="sobre">Sobre</Link></li>
                <li className={styles.item}>Tecnologias</li>
                <li className={styles.item}>Projetos</li>
            </ul>
        </nav>
    )
}

export default Navbar