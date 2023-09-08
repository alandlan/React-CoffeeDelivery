import { ShoppingCart } from 'phosphor-react';
import { QuantityInput } from '../../../../components/quantityinput';
import { RegularText, TitleText } from '../../../../components/typography';
import {
	AddCartWrapper,
	CardFooter,
	Description,
	Name,
	ProductContainer,
	Tags,
} from './styles';
import { formatMoney } from '../../../../utils/formatmoney';
import { useCart } from '../../../../hooks/useCart';
import { useState } from 'react';

export interface Product {
	id: number;
	tags: string[];
	name: string;
	description: string;
	price: number;
	photo: string;
}

interface ProductProps {
	product: Product;
}

export function Product({ product }: ProductProps) {
	const [quantity, setQuantity] = useState(1);

	function handleIncrease() {
		setQuantity((state) => state + 1);
	}

	function handleDecrease() {
		setQuantity((state) => state - 1);
	}

	const { addProductToCart } = useCart();

	function handleAddToCart() {
		const productToAdd = {
			...product,
			quantity,
		};
		addProductToCart(productToAdd);
	}

	const formattedPrice = formatMoney(product.price);

	return (
		<ProductContainer>
			<img src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1693785600&Signature=c9EtiUCFAMVjyNLBnONaUpBQBq3gysnMBjI~xvojuIeLaEBnU2~oOM~cvq53QWed2I6JIcGH23zdmg6kfR6RW8ofD7h1Dj5pAgC6JdmFUBksdkAgV1LiaZ4zK7vk2d4GUYgepu3Va61Ks421qdgm29Dnjm6HbxRJgQJtMKR2pQteJqxbd0CXEHaQJgmZ5DuKp~RKf~lJb16ShbFOPdzB0hIY-LnyQT1kSKRr1tEQ9S70nuVcW~2SV2pQtKaOu8SCQAc4VTGme7a~bu2UV-yIi8QpYYU86N8U5VIkAttFoZCtUnRS20ty4p0bMggeCiEqyoW~0jEwgl4Ka-3~f70j9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" />
			<Tags>
				{product.tags.map((tag) => (
					<span key={`${product.id}${tag}`}>{tag}</span>
				))}
			</Tags>
			<Name>{product.name}</Name>
			<Description>{product.description}</Description>
			<CardFooter>
				<div>
					<RegularText size="s">R$</RegularText>
					<TitleText size="m" color="text" as="strong">
						{formattedPrice}
					</TitleText>
				</div>
				<AddCartWrapper>
					<QuantityInput
						onIncrease={handleIncrease}
						onDecrease={handleDecrease}
						quantity={quantity}
					/>
					<button onClick={handleAddToCart}>
						<ShoppingCart size={22} weight="fill" />
					</button>
				</AddCartWrapper>
			</CardFooter>
		</ProductContainer>
	);
}
