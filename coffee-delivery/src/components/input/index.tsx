import { InputHTMLAttributes, forwardRef } from 'react';
import { InputContainer, InputStyled, InputWrapper, RightText } from './styles';
import { RegularText } from '../typography';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
	error?: string;
	rightText?: string;
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
	({ error, className, rightText, ...props }, ref) => {
		return (
			<InputWrapper className={className}>
				<InputContainer hasError={!!error}>
					<InputStyled ref={ref} {...props} />
					{rightText && <RightText>{rightText}</RightText>}
				</InputContainer>
				{error && <RegularText size="s">{error}</RegularText>}
			</InputWrapper>
		);
	},
);
