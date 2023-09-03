import { TitleText } from '../../../../../components/typography';
import { ItemCartCard } from '../ItemCartCard';
import { ComfirmationSection } from './ConfirmationSections';
import { DetailsContainer, SelectedItemsContainer } from './styles';

export function SelectedItems() {
	return (
		<SelectedItemsContainer>
			<TitleText size="xs" color="subtitle">
				Produtos selecionados
			</TitleText>

			<DetailsContainer>
				<ItemCartCard />
				<ItemCartCard />
				<ItemCartCard />

				<ComfirmationSection />
			</DetailsContainer>
		</SelectedItemsContainer>
	);
}
