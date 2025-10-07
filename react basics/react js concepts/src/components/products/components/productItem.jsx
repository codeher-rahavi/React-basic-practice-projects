import styles from './productItem.module.css';


function ButtonComponents(){
    return <button className={styles.buttonStyle}>Click</button>
}


function ProductItem({singleProductitem,k}){
    return <div key={k} className={styles.box}>
        <p className={styles.productTitle}>
            {singleProductitem}
        </p>
        <ButtonComponents/>
    </div>
}

export default ProductItem