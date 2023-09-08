import { RegularText, TitleText } from '../../components/typography';
import { OrderConfirmedContainer, OrderDetailsContainer } from './styles';
import confirmedorder from '../../assets/confirmed-order.svg';

export function OrderConfirmedPage() {
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
					<p>Oi</p>
				</OrderDetailsContainer>
				<img src={confirmedorder} />
			</section>
		</OrderConfirmedContainer>
	);
}
