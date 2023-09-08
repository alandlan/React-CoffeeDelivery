import { Button } from '../../../../../components/button';
import { RegularText } from '../../../../../components/typography';
import { useCart } from '../../../../../hooks/useCart';
import { ConfirmationSectionContainer } from './styles';

const DELIVERY_PRICE = 3.5;
const DELIVERY_NOPRICE = 0;

export function ComfirmationSection() {
	const { cartItemTotal, cartQuantity } = useCart();
	const cartTotal = cartItemTotal + DELIVERY_PRICE;

	const formatedItemsTotal = cartItemTotal.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
	const formatedTotal = cartTotal.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
	const formateDeliveryPrice = DELIVERY_PRICE.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});
	const formateDeliveryNoPrice = DELIVERY_NOPRICE.toLocaleString('pt-br', {
		style: 'currency',
		currency: 'BRL',
	});

	return (
		<ConfirmationSectionContainer>
			<div>
				<RegularText size="s">Total de Itens</RegularText>
				<RegularText>{formatedItemsTotal}</RegularText>
			</div>
			<div>
				<RegularText size="s">Entrega</RegularText>
				<RegularText>
					{cartQuantity <= 0
						? formateDeliveryNoPrice
						: formateDeliveryPrice}
				</RegularText>
			</div>
			<div>
				<RegularText size="l" weight="700" color="subtitle">
					Total
				</RegularText>
				<RegularText size="l" weight="700" color="subtitle">
					{cartQuantity <= 0 ? DELIVERY_NOPRICE : formatedTotal}
				</RegularText>
			</div>

			<Button text="Confirmar" disabled={cartQuantity <= 0} />
		</ConfirmationSectionContainer>
	);
}
