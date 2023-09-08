import { Minus, Plus } from 'phosphor-react';
import { IconWrapper, QuantityContainer } from './styles';

interface QuantityInputProps {
	size?: 'small' | 'medium';
	quantity: number;
	onIncrease: () => void;
	onDecrease: () => void;
}

export function QuantityInput({
	onIncrease,
	onDecrease,
	quantity,
	size = 'medium',
}: QuantityInputProps) {
	return (
		<QuantityContainer size={size}>
			<IconWrapper disabled={quantity <= 1} onClick={onDecrease}>
				<Minus size={16} weight="fill" />
			</IconWrapper>
			<input
				type="number"
				min="1"
				max="99"
				defaultValue="1"
				value={quantity}
				readOnly
			/>
			<IconWrapper onClick={onIncrease}>
				<Plus size={16} weight="fill" />
			</IconWrapper>
		</QuantityContainer>
	);
}
