import { Input } from '../../../../../components/input';
import { AddressFormContainer } from './styles';

export function AddressForm() {
	return (
		<AddressFormContainer>
			<Input placeholder="CEP" className="cep" type="number" />
			<Input placeholder="Rua" className="street" />
			<Input placeholder="Número" className="number" type="number" />
			<Input placeholder="Complemento" className="complement" />
			<Input placeholder="Bairro" className="neighborhood" />
			<Input placeholder="Cidade" className="city" />
			<Input placeholder="UF" className="state" max={2} type="number" />
		</AddressFormContainer>
	);
}
