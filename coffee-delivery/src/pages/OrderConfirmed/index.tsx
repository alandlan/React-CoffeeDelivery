import { RegularText, TitleText } from '../../components/typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confirmedorder from '../../assets/confirmed-order.svg';
import { InfoWithIcon } from '../../components/infowithicon';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';

export function OrderConfirmedPage() {
	const { colors } = useTheme();

	return (
		<OrderConfirmedContainer className="container">
			<div>
				<TitleText size="l">Uhu! Pedido confirmado</TitleText>
				<RegularText size="l" color="subtitle">
					Agora é só aguardar que logo o produto chegará até voce
				</RegularText>
			</div>

			<section>
				<OrderDetailsContainer>
					<InfoWithIcon
						icon={<MapPin weight="fill" />}
						iconBg={colors['brand-purple']}
						text={
							<RegularText size="m">
								Entrega em <strong>Rua do café, 42</strong>
								<br />
								Farrapos - Porto Alegre
							</RegularText>
						}
					/>
					<InfoWithIcon
						icon={<Clock weight="fill" />}
						iconBg={colors['brand-yellow']}
						text={
							<RegularText size="m">
								Previsao de entrega
								<br />
								<strong>20 min - 30 min</strong>
							</RegularText>
						}
					/>
					<InfoWithIcon
						icon={<CurrencyDollar weight="fill" />}
						iconBg={colors['brand-yellow']}
						text={
							<RegularText size="m">
								Pagamento na entrega
								<br />
								<strong>Cartao de credito</strong>
							</RegularText>
						}
					/>
				</OrderDetailsContainer>
				<img src={confirmedorder} />
			</section>
		</OrderConfirmedContainer>
	);
}
