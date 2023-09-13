import { RegularText, TitleText } from '../../components/typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confirmedorder from '../../assets/confirmed-order.svg';
import { InfoWithIcon } from '../../components/infowithicon';
import { Clock, CurrencyDollar, MapPin } from 'phosphor-react';
import { useTheme } from 'styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import { OrderData } from '../Order/Checkout';
import { paymentMethods } from '../Order/Checkout/components/CheckoutForm/PaymentMethodOptions';
import { useEffect } from 'react';

interface LocationState {
	state: OrderData;
}

export function OrderConfirmedPage() {
	const { colors } = useTheme();

	const { state } = useLocation() as unknown as LocationState;

	const navigate = useNavigate();

	useEffect(() => {
		if (!state) {
			navigate('/');
		}
	}, []);

	if (!state) {
		return <></>;
	}

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
								Entrega em{' '}
								<strong>
									{state.street}, {state.number}
								</strong>
								<br />
								{state.city} - {state.state}
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
								<strong>
									{paymentMethods[state.paymentMethod].label}
								</strong>
							</RegularText>
						}
					/>
				</OrderDetailsContainer>
				<img src={confirmedorder} />
			</section>
		</OrderConfirmedContainer>
	);
}
