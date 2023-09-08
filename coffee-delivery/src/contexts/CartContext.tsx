import { createContext, useState } from 'react';
import { Product } from '../pages/home/components/product';
import { produce } from 'immer';

export interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	cartItems: CartItem[];
	cartQuantity: number;
	addProductToCart: (product: CartItem) => void;
	changeCartItemQuantity: (
		cartItemId: number,
		type: 'increase' | 'decrease',
	) => void;
}

export const CartContext = createContext<CartContextType>(
	{} as CartContextType,
);

interface CartContextProviderProps {
	children: React.ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>([]);

	const cartQuantity = cartItems.length;

	function addProductToCart(product: CartItem) {
		const productAlreadyInCart = cartItems.findIndex(
			(item) => item.id === product.id,
		);

		const newCart = produce(cartItems, (draft) => {
			if (productAlreadyInCart >= 0) {
				draft[productAlreadyInCart].quantity += product.quantity;
			} else {
				draft.push(product);
			}
		});

		setCartItems(newCart);
	}

	function changeCartItemQuantity(
		cartItemId: number,
		type: 'increase' | 'decrease',
	) {
		const newCart = produce(cartItems, (draft) => {
			const cartItemIndex = cartItems.findIndex(
				(item) => item.id === cartItemId,
			);
			if (cartItemIndex >= 0) {
				const item = draft[cartItemIndex];
				draft[cartItemIndex].quantity =
					type === 'increase' ? item.quantity + 1 : item.quantity - 1;
			}
		});

		setCartItems(newCart);
	}

	return (
		<CartContext.Provider
			value={{
				cartItems,
				cartQuantity,
				addProductToCart,
				changeCartItemQuantity,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
