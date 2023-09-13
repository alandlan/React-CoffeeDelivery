import { PaymentMethodInputContainer, ContentContainer } from './styles';
import { InputHTMLAttributes } from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
	icon: JSX.Element;
	label: string;
};

export function PaymentMethodInput({
	id,
	icon,
	label,
	...props
}: PaymentMethodInputProps) {
	return (
		<PaymentMethodInputContainer>
			<input type="radio" id={id} {...props} name="paymentMethod" />
			<label htmlFor={id}>
				<ContentContainer>
					{icon}
					{label}
				</ContentContainer>
			</label>
		</PaymentMethodInputContainer>
	);
}
