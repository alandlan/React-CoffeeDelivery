import { InputHTMLAttributes, forwardRef } from 'react';
import { InputContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

// export function Input({ ...rest }: InputProps) {
// 	return <InputContainer {...rest}></InputContainer>;
// }

export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
	return <InputContainer {...props} ref={ref} />;
});
