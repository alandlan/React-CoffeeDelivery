import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Success } from './pages/Order/Success';
import { Checkout } from './pages/Order/Checkout';
import { DefaultLayout } from './layout/DefaultLayout';
import { OrderConfirmedPage } from './pages/OrderConfirmed';

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<DefaultLayout />}>
				<Route path="/" element={<Home />} />
				<Route path="/success" element={<Success />} />
				<Route path="/checkout" element={<Checkout />} />
				<Route
					path="/orderConfirmed"
					element={<OrderConfirmedPage />}
				/>
				<Route path="*" element={<h1>Not Found</h1>} />
			</Route>
		</Routes>
	);
}
