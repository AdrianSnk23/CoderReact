import React, { useContext, useState } from 'react'
import { collection,addDoc,updateDoc,doc,getDoc, getFirestore } from 'firebase/firestore'
import { CartContext } from '../../context/cartContext';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import InputGroup from 'react-bootstrap/InputGroup';


const Checkout = () => {
    const {cart,totalCarrito,cantidadCarrito,vaciarCarrito} = useContext(CartContext)

    const [nombre, setNombre] = useState("")
    const [apellido, setApellido] = useState("")
    const [telefono, setTelefono] = useState("")
    const [email, setEmail] = useState("")
    const [confirmaEmail, setConfirmaEmail] = useState()
    const [error, setError] = useState("")
    const [ordenId, setOrdenId] = useState("")
    const [ocultarFormulario, setOcultarFormulario] = useState(true)
        

    const formulario = (event) => {
    
      event.preventDefault();
      event.stopPropagation();
    if(!nombre || !apellido || !telefono || !email || !confirmaEmail){
        setError("Completar los campos requeridos")
        return
    }
    if (email !== confirmaEmail){
        setError("El email no es correcto")
        return
    }
    if(cart.length === 0){
        setError("El carrito esta vacio")
        return
    }
    if (isNaN(telefono)) {
        setError("El telefono solo debe contener numeros")
        return
    }
    

    

    const db = getFirestore()
    const orden = {
        items: cart.map((item) =>({
            id: item.producto.id,
            nombre: item.producto.nombre,
            cantidad: item.cantidad
        })),
        total: totalCarrito(),
        fecha: new Date(),
        nombre,
        apellido,
        telefono,
        email
    }
    console.log(orden)
    Promise.all(
        orden.items.map(async(productoOrden) => {
            const productoRef= doc(db, "producto", productoOrden.id)
            const productoDoc= await getDoc(productoRef)
            const stockActual = productoDoc.data().stock

            await updateDoc(productoRef, {
                stock: stockActual - productoOrden.cantidad
            })
        })
    )
        .then(() => {
            addDoc(collection(db,"ordenes"), orden)
            .then((docRef) => {
                setError("")
                setOrdenId(docRef.id)
                vaciarCarrito()
            })
            .catch((error) =>{
                console.log(error)
                setError("Se produjo un error al crear la orden")
            })
        })
        .catch((error) =>{
            console.log(error)
            setError("No se pudo actualizar el stock")
        })
    setOcultarFormulario(false)
    }
  
  
    return (
    
        <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))'}} className='bg-secondary py-2'>

                {cart.map((item) => (
                    <Card key={item.producto.id} className='bg-dark my-1' style={{ maxWidth: '200px' }}>
                        <Card.Img variant="top" src={item.producto.url} style={{ width:"75px", height:"75px" }} className='mx-auto d-block pt-1' />
                        <Card.Body>
                            <Card.Text className='text-white text-center'>{item.producto.nombre} x {item.cantidad}</Card.Text>
                        </Card.Body>
                    </Card>
                ))}
            </div>
            
            {ocultarFormulario ? (
                <>
                    <div>
                        <h1 className='bg-dark text-success text-center m-0 pt-3'>COMPLETA LOS SIGUIENTES DATOS</h1>
                    </div>
                    <div className='d-flex justify-content-center bg-dark p-5'>
                        <Form onSubmit={formulario}>
                            <Form.Group as={Col} lg="12">
                                <Form.Label className='text-white'>Nombre</Form.Label>
                                <Form.Control required type='text' onChange={(e)=>setNombre(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} lg="12">
                                <Form.Label className='text-white mt-4'>Apellido</Form.Label>
                                <Form.Control required type='text' onChange={(e)=>setApellido(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} lg="12">
                                <Form.Label className='text-white mt-4'>Telefono</Form.Label>
                                <Form.Control required type='text'  onChange={(e)=>setTelefono(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} lg="12">
                                <Form.Label className='text-white mt-4'>Email</Form.Label>
                                <Form.Control required type='email' onChange={(e)=>setEmail(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col} lg="12">
                                <Form.Label className='text-white mt-4'>Confirma Email</Form.Label>
                                <Form.Control required type='email' onChange={(e)=>setConfirmaEmail(e.target.value)}/>
                            </Form.Group>
                            <div className='d-flex justify-content-center py-5'>
                                <Button type='submit' size='lg' variant='outline-success'>Confirmar Compra</Button>
                            </div>
                            <div className='bg-dark'>
                                {error && <h2 className='text-danger'>{error}</h2>}
                            </div>
                        </Form>
                    </div>
                </>) 
            : 
            (
                <div className='d-flex justify-content-center bg-dark p-5'>
                    <div className='bg-dark'>
                        <h2 className='text-success'>Gracias por su compra. N° de orden: {ordenId}</h2>
                    </div>
                </div>
            )}
        </>

    )

}

export default Checkout;