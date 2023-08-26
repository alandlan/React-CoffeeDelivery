import { TitleText } from '../../../../components/typography';
import { products } from '../../../../data/products';
import { Product } from '../product';
import { ProductsContainer, ProductsList } from './styles';

export function Products() {
	return (
		<ProductsContainer className="container">
			<TitleText size="l" color="subtitle">
				Nossos Cafés
			</TitleText>
			<ProductsList>
				{products.map((product) => (
					<Product key={product.id} product={product} />
				))}
			</ProductsList>
		</ProductsContainer>
	);
}
