import { TitleText } from '../../../../components/typography';
import { Product } from '../product';
import { ProductsContainer, ProductsList } from './styles';

export function Products() {
	return (
		<ProductsContainer className="container">
			<TitleText size="l" color="subtitle">
				Nossos Cafés
			</TitleText>
			<ProductsList>
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
				<Product />
			</ProductsList>
		</ProductsContainer>
	);
}
