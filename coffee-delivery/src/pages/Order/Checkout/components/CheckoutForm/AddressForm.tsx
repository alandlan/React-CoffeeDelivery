import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../../components/input';
import { AddressFormContainer } from './styles';

interface ErrorsType {
	errors: {
		[key: string]: {
			message: string;
		};
	};
}

export function AddressForm() {
	const { register, formState } = useFormContext();

	const { errors } = formState as unknown as ErrorsType;

	return (
		<AddressFormContainer>
			<Input
				placeholder="CEP"
				className="cep"
				type="number"
				{...register('cep')}
				error={errors.cep?.message}
			/>
			<Input
				placeholder="Rua"
				className="street"
				{...register('street')}
				error={errors.street?.message}
			/>
			<Input
				placeholder="Número"
				className="number"
				type="number"
				{...register('number')}
				error={errors.number?.message}
			/>
			<Input
				placeholder="Complemento"
				className="complement"
				{...register('complement')}
				error={errors.complement?.message}
			/>
			<Input
				placeholder="Bairro"
				className="neighborhood"
				{...register('neighborhood')}
				error={errors.neighborhood?.message}
			/>
			<Input
				placeholder="Cidade"
				className="city"
				{...register('city')}
				error={errors.city?.message}
			/>
			<Input
				placeholder="UF"
				className="state"
				max={2}
				type="number"
				{...register('state')}
				error={errors.state?.message}
			/>
		</AddressFormContainer>
	);
}
