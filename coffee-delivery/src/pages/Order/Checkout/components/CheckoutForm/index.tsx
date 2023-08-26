import { MapPinLine } from 'phosphor-react';
import { TitleText } from '../../../../../components/typography';
import { SectionTitle } from '../SectionTitle';
import { CheckoutContainer, FormSectionContainer } from './styles';
import { useTheme } from 'styled-components';
import { AddressForm } from './AddressForm';

export function CheckoutForm() {
	const { colors } = useTheme();

	return (
		<CheckoutContainer>
			<TitleText size="xs" color="subtitle">
				Complete seu pedido
			</TitleText>

			<FormSectionContainer>
				<SectionTitle
					title="Endereco de entrega"
					subtitle="Informe o endereco onde deseja receber"
					icon={
						<MapPinLine
							size={22}
							color={colors['brand-yellow-dark']}
						/>
					}
				/>
				<AddressForm />
			</FormSectionContainer>
		</CheckoutContainer>
	);
}
