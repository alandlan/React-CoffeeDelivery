import { CheckoutForm } from './components/CheckoutForm';
import { SelectedItems } from './components/SelectedItems';
import { CheckoutContainer } from './styles';

export function Checkout() {
	return (
		<CheckoutContainer className="container">
			<CheckoutForm />
			<SelectedItems />
		</CheckoutContainer>
	);
}
