import { createContext, useEffect, useState } from 'react';
import { Product } from '../pages/home/components/product';
import { produce } from 'immer';

export interface CartItem extends Product {
	quantity: number;
}

interface CartContextType {
	cartItems: CartItem[];
	cartQuantity: number;
	cartItemTotal: number;
	addProductToCart: (product: CartItem) => void;
	changeCartItemQuantity: (
		cartItemId: number,
		type: 'increase' | 'decrease',
	) => void;
	removeCartItem: (cartItemId: number) => void;
}

export const CartContext = createContext<CartContextType>(
	{} as CartContextType,
);

interface CartContextProviderProps {
	children: React.ReactNode;
}

const PRODUCT_ITEM_STORAGE_KEY = '@coffee-delivery:cartItems';

export function CartContextProvider({ children }: CartContextProviderProps) {
	const [cartItems, setCartItems] = useState<CartItem[]>(() => {
		const storagedCartItems = localStorage.getItem(
			PRODUCT_ITEM_STORAGE_KEY,
		);
		if (storagedCartItems) {
			return JSON.parse(storagedCartItems);
		}
		return [];
	});

	const cartQuantity = cartItems.length;

	const cartItemTotal = cartItems.reduce((acc, item) => {
		return acc + item.price * item.quantity;
	}, 0);

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

	function removeCartItem(cartItemId: number) {
		const newCart = produce(cartItems, (draft) => {
			const cartItemIndex = cartItems.findIndex(
				(item) => item.id === cartItemId,
			);
			if (cartItemIndex >= 0) {
				draft.splice(cartItemIndex, 1);
			}
		});

		setCartItems(newCart);
	}

	useEffect(() => {
		localStorage.setItem(
			PRODUCT_ITEM_STORAGE_KEY,
			JSON.stringify(cartItems),
		);
	}, [cartItems]);

	return (
		<CartContext.Provider
			value={{
				cartItems,
				cartQuantity,
				cartItemTotal,
				addProductToCart,
				changeCartItemQuantity,
				removeCartItem,
			}}
		>
			{children}
		</CartContext.Provider>
	);
}
