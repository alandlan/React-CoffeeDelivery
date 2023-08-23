import logo from '../../assets/logo.svg';
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';

export function Header() {
	return (
		<HeaderContainer>
			<div className="container">
				<img src={logo} alt="logo" />
				<HeaderButtonContainer>
					<HeaderButton variant="purple">
						<MapPin size={20} weight="fill" />
						Porto Alegre, RS
					</HeaderButton>
					<HeaderButton variant="yellow">
						<ShoppingCart size={20} weight="fill" />2
					</HeaderButton>
				</HeaderButtonContainer>
			</div>
		</HeaderContainer>
	);
}
