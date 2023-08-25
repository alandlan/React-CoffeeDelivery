import { Intro } from './components/intro';
import { Products } from './components/products';
import { HomeContainer } from './styles';

export function Home() {
	return (
		<HomeContainer>
			<Intro></Intro>
			<Products></Products>
		</HomeContainer>
	);
}
