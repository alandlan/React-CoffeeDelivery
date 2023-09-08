import { createContext, useState } from 'react';
import { Product } from '../pages/home/components/product';

export interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	cartItems: CartItem[];
}

export const CartContext = createContext<CartContextType>(
	{} as CartContextType,
);

interface CartContextProviderProps {
	children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	return (
		<CartContext.Provider value={{ cartItems }}>
			{children}
		</CartContext.Provider>
	);
}
