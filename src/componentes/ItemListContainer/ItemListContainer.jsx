import React, { useEffect, useState } from "react";
import "./nombre.css";
// import { pedirSushi } from "../../helpers/pedirProductos";
import { getFirestore } from "../../Firebase/config";
import { ItemList } from "../ItemList/ItemList";
import { FaSpinner } from "react-icons/fa";
import { useParams } from "react-router-dom";
export const ItemListContainer = (props) => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(false)

    // const param = useParams()

    const{categoriaId} = useParams()
    
    
    useEffect(() => {
        
        setLoading(true)
        
        const db = getFirestore();

        const Stock = db.collection('Stock')

        if(categoriaId){
            const filtrado = Stock.where("categoria", "==", categoriaId)
            filtrado.get()
            .then((res)=>{
                const newItem = res.docs.map((doc)=>{
                    return{id: doc.id, ...doc.data()}
                })
                setItems(newItem)
            })
            .catch((error) => console.log(error))
            .finally(()=>{
                setLoading(false)
            })
        } else{

            Stock.get()
            .then((res)=>{
                const newItem = res.docs.map((doc)=>{
                    return {id: doc.id, ...doc.data()}
                })
                setItems(newItem)
                console.table(newItem)
            }) 
            .catch((error) => console.log(error))
            
            .finally(()=>{
                setLoading(false)
            })
        }
    }, [categoriaId])

    return (
        <div className="nombre">

        {loading ? <h4>Cargando <FaSpinner/></h4> : <ItemList productos={items}/> }


           {/* { loading ? (<h4>Cargando...</h4>):(items.map ((item, i) => (
            <div key={i}>
                <p>{item.id}</p>
                <p>{item.nombre}</p>
                <p> Precio: {item.precio}</p>
                <img src={item.image} alt={item.image} />
            
            </div>
           )) 
           )
}
           */} <h3>{props.nombre}</h3> 
        </div>

    );
}


