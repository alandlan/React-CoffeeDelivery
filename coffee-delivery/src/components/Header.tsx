import logoIgnite from '../assets/logo.svg';

export function Header() {
	return (
		<div>
			<div>
				<img src={logoIgnite} alt="logo" />
			</div>
			<div>
				<h1>COFFEE DELIVERY</h1>
			</div>
		</div>
	);
}
