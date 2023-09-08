import { TitleText } from '../../../../../components/typography';
import { ItemCartCard } from '../ItemCartCard';
import { ComfirmationSection } from './ConfirmationSections';
import { DetailsContainer, SelectedItemsContainer } from './styles';
import { useCart } from '../../../../../hooks/useCart';

export function SelectedItems() {
	const { cartItems } = useCart();
	return (
		<SelectedItemsContainer>
			<TitleText size="xs" color="subtitle">
				Produtos selecionados
			</TitleText>

			<DetailsContainer>
				{cartItems.map((item) => (
					<ItemCartCard key={item.id} product={item} />
				))}

				<ComfirmationSection />
			</DetailsContainer>
		</SelectedItemsContainer>
	);
}
