import { useFormContext } from 'react-hook-form';
import { Input } from '../../../../../components/input';
import { AddressFormContainer } from './styles';

export function AddressForm() {
	const { register } = useFormContext();
	return (
		<AddressFormContainer>
			<Input
				placeholder="CEP"
				className="cep"
				type="number"
				{...register('cep')}
			/>
			<Input placeholder="Rua" className="street" />
			<Input placeholder="Número" className="number" type="number" />
			<Input placeholder="Complemento" className="complement" />
			<Input placeholder="Bairro" className="neighborhood" />
			<Input placeholder="Cidade" className="city" />
			<Input placeholder="UF" className="state" max={2} type="number" />
		</AddressFormContainer>
	);
}
