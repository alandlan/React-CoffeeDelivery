import { Routes, Route } from 'react-router-dom';
import { Home } from './pages/home';
import { Success } from './pages/success';
import { Checkout } from './pages/checkout';
import { CheckoutFilled } from './pages/checkout-filled';

export function Router(){
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/success" element={<Success />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/checkout-filled" element={<CheckoutFilled />} />
            <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
    )
}