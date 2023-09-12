import { CheckoutForm } from './components/CheckoutForm';
import { SelectedItems } from './components/SelectedItems';
import { CheckoutContainer } from './styles';
import * as zod from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, FormProvider } from 'react-hook-form';

const confirmOrderSchema = zod.object({
	cep: zod.string().min(1, 'informe o cep'),
	street: zod.string().min(1, 'informe a rua'),
	number: zod.string().min(1, 'informe o número'),
	complement: zod.string().optional(),
	neighborhood: zod.string().min(1, 'informe o bairro'),
	city: zod.string().min(1, 'informe a cidade'),
	state: zod.string().min(1, 'informe o estado'),
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

	return (
		<FormProvider {...confirmOrderForm}>
			<CheckoutContainer
				className="container"
				onSubmit={handleSubmit(handleConfirmOrder)}
			>
				<CheckoutForm />
				<SelectedItems />
			</CheckoutContainer>
		</FormProvider>
	);
}
