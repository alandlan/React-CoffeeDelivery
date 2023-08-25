import { Minus, Plus } from 'phosphor-react';
import { IconWrapper, QuantityContainer } from './styles';

export function QuantityInput() {
	return (
		<QuantityContainer>
			<IconWrapper>
				<Minus size={16} weight="fill" />
			</IconWrapper>
			<input
				type="number"
				min="1"
				max="99"
				defaultValue="1"
				value={1}
				readOnly
			/>
			<IconWrapper>
				<Plus size={16} weight="fill" />
			</IconWrapper>
		</QuantityContainer>
	);
}
