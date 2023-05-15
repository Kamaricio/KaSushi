import React, { useEffect, useState, use } from 'react'
// import { pedirSushi } from '../../helpers/pedirProductos';
import { getFirestore } from'../../Firebase/config'
import { FaSpinner } from "react-icons/fa";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from 'react-router-dom';
export const ItemDetailContainer = () => {
    
    const [item, setItem] = useState(null)

    const [loading, setLoading] = useState(false)

    const { itemId } = useParams()
    
    useEffect(()=>{

        setLoading(true)

        const db = getFirestore();

        const Stock = db.collection('Stock')

        const item = Stock.doc(itemId)

        item.get()
        .then((doc)=>{
            setItem({
                id: doc.id, ...doc.data()
            })
        })
        .catch((error)=> console.log(error))
        .finally(()=>{
            setLoading(false)
        })

        
        // setLoading(true)
        // pedirSushi()
        //     .then(res =>{
        //         setItem(res.find(sushi => sushi.id === Number(itemId)))
        //     })
        //     .catch((error)=> console.log(error))
        //     .finally(()=>{
        //         setLoading(false)
        //     })

    },[])




    return (
    <section>
        {
            loading ? <FaSpinner/>:<ItemDetail {...item}/>
        }

    </section>
  )
}
