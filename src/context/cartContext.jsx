import {createContext, useRef, useState} from "react";

export const CartContext = createContext()

const CartProvider = ({children}) => {

    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)
    const [cantidadTotal, setCantidadTotal] =useState(0)

    

    const agregarCarrito = (producto, cantidad) => {

        const duplicado = cart.findIndex(prod => prod.producto.id === producto.id) 

        if(duplicado === -1){
            setCart([...cart,{producto,cantidad}])
        }
        else{
            const newCart = [...cart]
            newCart[duplicado].cantidad += cantidad
            setCart(newCart)
        }
    }

    const eliminarItem= (productoId) => {
        const newCart = cart.filter(item => item.producto.id !== productoId)
        setCart(newCart)

    }

    const vaciarCarrito= () => {
        setCart([])

    }

    const cantidadCarrito= () => {
        const cantidadTotal = cart.reduce((total, item) => total+item.cantidad, 0)
        return cantidadTotal
    }

    const totalCarrito = () => {
        const subTotal = cart.reduce((total, item) => total + (item.producto.precio * item.cantidad), 0)
        return subTotal
    }

    return (
        <CartContext.Provider value={{cart, total, cantidadTotal, agregarCarrito, eliminarItem, vaciarCarrito, cantidadCarrito, totalCarrito}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider