"use client";
import {createContext,useContext,useMemo,useState} from "react";
export type CartItem={id:number;name:string;price:number;quantity:number;image:string;};
const CartContext=createContext<any>(null);
export function CartProvider({children}:{children:React.ReactNode}){
 const [items,setItems]=useState<CartItem[]>([]);
 const addItem=(item:CartItem)=>setItems(p=>[...p,item]);
 const removeItem=(id:number)=>setItems(p=>p.filter(i=>i.id!==id));
 const clearCart=()=>setItems([]);
 const total=useMemo(()=>items.reduce((a,b)=>a+b.price*b.quantity,0),[items]);
 return <CartContext.Provider value={{items,addItem,removeItem,clearCart,total}}>{children}</CartContext.Provider>;
}
export const useCart=()=>useContext(CartContext);
