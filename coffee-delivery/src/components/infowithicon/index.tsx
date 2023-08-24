import { ReactNode } from 'react';
import { IconContainer, InfoWithIconContainer } from './styles';

interface InfowithiconProps {
	icon: ReactNode;
	text: string | ReactNode;
	iconBg: string;
}

export function InfoWithIcon({ icon, text, iconBg }: InfowithiconProps) {
	return (
		<InfoWithIconContainer>
			<IconContainer iconBg={iconBg}>{icon}</IconContainer>
			{typeof text === 'string' ? <p>{text}</p> : text}
		</InfoWithIconContainer>
	);
}
