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
            <ul>
                <li>Home</li>
                <li>Sobre</li>
                <li>Tecnologias</li>
                <li>Projetos</li>
            </ul>
        </nav>
    )
}

export default Navbar