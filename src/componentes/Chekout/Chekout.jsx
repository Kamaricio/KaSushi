import React, { useState, useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import { Link } from 'react-router-dom'
import firebase from 'firebase'
import 'firebase/firestore'
import { getFirestore } from '../../Firebase/config'
import Swal from 'sweetalert2'
// import { ItemCounter } from '../ItemCounter/ItemCounter'

export const Chekout = () => {

    const {carrito, total, carritoVacio} = useContext(CartContext)

    const [email, setEmail] = useState("")

    const [nombre, setNombre] = useState("")

    const [apellido, setApellido] = useState("")

    const [telefono, setTelefono] = useState("")

    const handleSubmit = (e) =>{
        e.preventDefault() 

        console.log("Email:", email)
        console.log("Nombre:", nombre)
        console.log("Apellido:", apellido)
        console.log("Telefono:", telefono)
        const orden ={
            
            buyer:{
            email,
            nombre,
            apellido,
            telefono,
            
        },
        item: carrito,
        total: total(),
        data: firebase.firestore.Timestamp.fromDate(new Date())
    }
    console.log(orden)
    
    const db = getFirestore()

    const ordenes = db.collection('odenes')

    ordenes.add(orden)
    .then((res)=>{
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'El pedido fue realizado con satisfacción',
            text:`Guarde su número de compra: ${res.id}`,
            showConfirmButton: false,
            timer: 5500,
            willClose: ()=>{
                carritoVacio()
            }
          })
        .finally(()=>{
            console.log("Compra finalizada")
        })
    })
    carrito.forEach(item => {
        const docRef =db.collection('Stock').doc(item.id)

        docRef.get()
        .then((doc)=>{
            docRef.update({
                stock: doc.data().stock - item.Counter


            })
        })
    });
    }
    return (
        <div>

            <h3>Finalizar compra</h3>
            <hr />
            <form onSubmit={handleSubmit} className='container mt-3'>

                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input type="text" className="form-control" onChange={(e) => setEmail(e.target.value)} value={email}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Nombre</label>
                    <input type="text" className="form-control" onChange={(e) => setNombre(e.target.value)} value={nombre}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Apellido</label>
                    <input type="text" className="form-control" onChange={(e) => setApellido(e.target.value)} value={apellido}/>
                </div>
                <div className="form-group">
                    <label htmlFor="">Teléfono</label>
                    <input type="text" className="form-control" onChange={(e) => setTelefono(e.target.value)} value={telefono}/>
                </div>
                <button type='submit' className='btn btn-success'>Comprar</button>
                <Link to="/carrito" className="btn btn-info">Volver al carrito</Link>
            </form>
        </div>
    )
}
