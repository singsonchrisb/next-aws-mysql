import { useEffect, useState } from "react";
import styles from "../styles/Product.module.scss";
import Link from 'next/link'
// import Image from "next/image";

export default function ProductImg() {
    const [dataResponse, setdataResponse]= useState([]);

    useEffect(() => {
        async function getPageData() {
       
       const apiUrlEndPoint ="http://localhost:3000/api/getData-lib";
       const response = await fetch(apiUrlEndPoint);
       const res = await response.json();
       console.log(res.products);
       setdataResponse(res.products);
        }
        getPageData();
    },[]);

    return (
         <div>
            {/* <a href="/" style={{alignContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'gray' }} > HOME</a> */}
            <Link href="/" style={{alignContent: 'center', alignItems: 'center', color: 'white', backgroundColor: 'gray' }}>HOME</Link>

            <div className={styles.container}>
                
                
                {dataResponse.map((product) => {
                    return (
                        <div key={product.id}>
                            <div> Product Name: {product.product_name} </div>
                            <div> ID: {product.product_id}</div>
                            <div className={styles.photo}>
                                {/* <img src='/images/shoes1.jpg' alt="" /> */}
                                {/* <img src={`/images/${product.product_image}`} alt=""/> */}
                            </div>
                        </div>
                    );
                })}
            </div>
       </div>
    );
}