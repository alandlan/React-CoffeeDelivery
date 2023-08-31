import { Trash } from 'phosphor-react';
import { QuantityInput } from '../../../../../components/quantityinput';
import { RegularText } from '../../../../../components/typography';
import {
	ActionsContainer,
	ItemCartCardContainer,
	RemoveButton,
} from './styles';

export function ItemCartCard() {
	return (
		<ItemCartCardContainer>
			<div>
				<img
					src="https://s3-alpha-sig.figma.com/img/55b1/f9ee/64600f98b2bae456b96fdc624c4b4f47?Expires=1693785600&Signature=c9EtiUCFAMVjyNLBnONaUpBQBq3gysnMBjI~xvojuIeLaEBnU2~oOM~cvq53QWed2I6JIcGH23zdmg6kfR6RW8ofD7h1Dj5pAgC6JdmFUBksdkAgV1LiaZ4zK7vk2d4GUYgepu3Va61Ks421qdgm29Dnjm6HbxRJgQJtMKR2pQteJqxbd0CXEHaQJgmZ5DuKp~RKf~lJb16ShbFOPdzB0hIY-LnyQT1kSKRr1tEQ9S70nuVcW~2SV2pQtKaOu8SCQAc4VTGme7a~bu2UV-yIi8QpYYU86N8U5VIkAttFoZCtUnRS20ty4p0bMggeCiEqyoW~0jEwgl4Ka-3~f70j9Q__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
					alt="Café"
				/>
				<div>
					<RegularText color="subtitle">
						Expresso Tradicional
					</RegularText>
					<ActionsContainer>
						<QuantityInput size="small" />
						<RemoveButton>
							<Trash size={16} />
							REMOVER
						</RemoveButton>
					</ActionsContainer>
				</div>
			</div>
			<p>R$ 9,90</p>
		</ItemCartCardContainer>
	);
}
