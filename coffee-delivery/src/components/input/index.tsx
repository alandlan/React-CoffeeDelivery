import { InputHTMLAttributes, forwardRef } from 'react';
import { InputContainer, InputWrapper } from './styles';
import { RegularText } from '../typography';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, className, ...props }, ref) => {
		return (
			<InputWrapper className={className}>
				<InputContainer {...props} ref={ref} />
				{error && <RegularText size="s">{error}</RegularText>}
			</InputWrapper>
		);
	},
);
