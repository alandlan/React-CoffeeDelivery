import { useCart } from '../../hooks/useCart';
import { Intro } from './components/intro';
import { Products } from './components/products';
import { HomeContainer } from './styles';

export function Home() {
	const { cartItems } = useCart();
	return (
		<HomeContainer>
			<Intro></Intro>
			<Products></Products>
		</HomeContainer>
	);
}
