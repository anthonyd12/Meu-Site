import styles from './Sobre.module.css'

function Sobre() {
    return(
        <div className={styles.sobreContainer}>
            <div className={styles.conteudo}>
                <h1>Sobre</h1>
                <div className={styles.box}>
                    <p>Lorem ipsum lfgsNo rancho fundoBem pra lá do fim do mundo Onde a dor e a saudadeContam coisas da cidadeNo rancho fundoDe olhar triste e profundoUm moreno canta as mágoasTendo os olhos rasos d'águaPobre morenoQue de noite, no serenoEspera a lua no terreiroTendo um cigarroPor companheiroSem um acenoEle pega na violaE a lua, por esmolaVem pro quintalDesse moreno</p>
                </div>
                
            </div><div className={styles.imagem}></div>
        </div>
    )
}

export default Sobre