import { CheckoutForm } from './components/CheckoutForm';
import { SelectedItems } from './components/SelectedItems';
import { CheckoutContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

const confirmOrderSchema = zod.object({
	cep: zod.string(),
});

export type OrderData = zod.infer<typeof confirmOrderSchema>;

type ConfirmOrderFormData = OrderData;

export function Checkout() {
	const confirmOrderForm = useForm<ConfirmOrderFormData>({
		resolver: zodResolver(confirmOrderSchema),
	});

	const { handleSubmit } = confirmOrderForm;

	function handleConfirmOrder(data: ConfirmOrderFormData) {
		console.log(data);
		console.log('Confirmar pedido');
	}

	function teste() {
		console.log('teste');
	}

	return (
		<FormProvider {...confirmOrderForm}>
			<CheckoutContainer
				className="container"
				onSubmit={handleSubmit(handleConfirmOrder)}
				// onSubmit={teste}
			>
				<CheckoutForm />
				<SelectedItems />
			</CheckoutContainer>
		</FormProvider>
	);
}
