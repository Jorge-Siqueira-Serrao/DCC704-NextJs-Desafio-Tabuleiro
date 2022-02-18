import styles from "./Casa_tabuleiro.module.css";

export default function CasaTabuleiro({color}){

    return(
        <div className={styles.square} style={{backgroundColor: color}}></div>
    );
}