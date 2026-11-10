import * as S from './Icon.styles'
import { colorClass, type Color } from '@/styles/colors';
export type IconColor = Color;

type Props = {
	isButton?: boolean;
	name: string;
	offscreen?: string;
	onClick?: () => void;
	iconColor?: IconColor;
	opacity?: number;
	className?: string;
	size?: 'sm' | 'md' | 'xl' | 'auto' ; // 20 | 24 | 40 | auto
}

export const Icon = ({
	isButton = false,
	name,
	offscreen,
	onClick,
	iconColor = 'black',
	opacity,
	className,
	size= 'sm',
}:Props) => {
	return(
		<S.Icon
			$name={name}
			$opacity={opacity}
			as={isButton ? 'button' : 'span'}
			onClick={onClick}
			className={`${className} ${colorClass[iconColor]}`}
			$size={size}
		>
			{offscreen && <span className='sr-only'>{offscreen}</span>}
		</S.Icon>
	)
}