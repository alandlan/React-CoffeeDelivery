import { Button } from '../../../../../components/button';
import { RegularText } from '../../../../../components/typography';
import { ConfirmationSectionContainer } from './styles';

export function ComfirmationSection() {
	return (
		<ConfirmationSectionContainer>
			<div>
				<RegularText size="s">Total de Itens</RegularText>
				<RegularText>R$ 9,90</RegularText>
			</div>
			<div>
				<RegularText size="s">Entrega</RegularText>
				<RegularText>R$ 3,90</RegularText>
			</div>
			<div>
				<RegularText size="l" weight="700" color="subtitle">
					Total
				</RegularText>
				<RegularText size="l" weight="700" color="subtitle">
					R$ 13,80
				</RegularText>
			</div>

			<Button text="Confirmar" />
		</ConfirmationSectionContainer>
	);
}
