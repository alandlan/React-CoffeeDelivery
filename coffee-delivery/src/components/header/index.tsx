import { NavLink } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import { HeaderButton, HeaderButtonContainer, HeaderContainer } from './styles';
import { MapPin, ShoppingCart } from 'phosphor-react';
import { useCart } from '../../hooks/useCart';

export function Header() {
	const { cartQuantity } = useCart();
	return (
		<HeaderContainer>
			<div className="container">
				<NavLink to="/">
					<img src={logo} alt="logo" />
				</NavLink>
				<HeaderButtonContainer>
					<HeaderButton variant="purple">
						<MapPin size={20} weight="fill" />
						Porto Alegre, RS
					</HeaderButton>
					<NavLink to="/checkout">
						<HeaderButton variant="yellow">
							{cartQuantity >= 1 && <span>{cartQuantity}</span>}
							<ShoppingCart size={20} weight="fill" />
						</HeaderButton>
					</NavLink>
				</HeaderButtonContainer>
			</div>
		</HeaderContainer>
	);
}
