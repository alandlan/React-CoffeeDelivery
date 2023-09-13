import { PaymentMethodInputContainer, ContentContainer } from './styles';
import { InputHTMLAttributes, forwardRef } from 'react';

type PaymentMethodInputProps = InputHTMLAttributes<HTMLInputElement> & {
	icon: JSX.Element;
	label: string;
};

export const PaymentMethodInput = forwardRef<
	HTMLInputElement,
	PaymentMethodInputProps
>(({ id, icon, label, ...props }, ref) => {
	return (
		<PaymentMethodInputContainer>
			<input
				type="radio"
				id={id}
				{...props}
				name="paymentMethod"
				ref={ref}
			/>
			<label htmlFor={id}>
				<ContentContainer>
					{icon}
					{label}
				</ContentContainer>
			</label>
		</PaymentMethodInputContainer>
	);
});
