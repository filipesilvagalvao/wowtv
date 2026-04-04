"use client"
import styles from "./Share.module.css"

function Share() {

    const sendShare = async () => {
        if (navigator.share) {
            try{
                await navigator.share({
                    title:"WowTV!",
                    text:"Site para assistir tv online grátis",
                    url:window.location.href
                })
            }
            catch(error){
                console.log("Erro ao compartilhar:", error);
            }
        }else{
            alert("Seu navegador não suporta compartilhamento 😢")
        }
    }
    return (
        <p className={styles.p}>Compartilhar canal: <button onClick={sendShare} className={styles.share}>Compartilhar <i className="fa-solid fa-share-nodes"></i></button></p>
    )
}

export default Share