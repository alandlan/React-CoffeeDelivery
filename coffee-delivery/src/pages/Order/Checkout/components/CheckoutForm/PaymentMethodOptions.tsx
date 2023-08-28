import { PaymentMethodInput } from '../PaymentMethodInput';
import { PaymentMethodOptionsContainer } from './styles';

export function PaymentMethodOptions() {
	return (
		<PaymentMethodOptionsContainer>
			<PaymentMethodInput></PaymentMethodInput>
			<PaymentMethodInput></PaymentMethodInput>
			<PaymentMethodInput></PaymentMethodInput>
		</PaymentMethodOptionsContainer>
	);
}
