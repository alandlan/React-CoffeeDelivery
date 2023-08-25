import { TitleText } from '../../../../components/typography';
import { ProductsContainer } from './styles';

export function Products() {
	return (
		<ProductsContainer className="container">
			<TitleText size="l" color="subtitle">
				Nossos Cafés
			</TitleText>
		</ProductsContainer>
	);
}
