import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './styles/theme/default';
import { GlobalStyle } from './styles/global.styles';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './Router';
import { CartContextProvider } from './contexts/CartContext';

export function App() {
	return (
		<BrowserRouter>
			<ThemeProvider theme={defaultTheme}>
				<CartContextProvider>
					<Router />
				</CartContextProvider>
				<GlobalStyle />
			</ThemeProvider>
		</BrowserRouter>
	);
}
