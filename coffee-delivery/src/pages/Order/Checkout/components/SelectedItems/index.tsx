import { TitleText } from '../../../../../components/typography';
import { DetailsContainer, SelectedItemsContainer } from './styles';

export function SelectedItems() {
	return (
		<SelectedItemsContainer>
			<TitleText size="xs" color="subtitle">
				Produtos selecionados
			</TitleText>

			<DetailsContainer>
				<p>Itens</p>
			</DetailsContainer>
		</SelectedItemsContainer>
	);
}
