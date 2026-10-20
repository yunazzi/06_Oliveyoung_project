import * as S from './Icon.styles'

type Props = {
	isButton?: boolean;
	name: string;
	offscreen?: string;
	onClick?: () => void;
	iconColor?: string;
	opacity?: number;
	className?: string;
	size?: 'sm' | 'md' | 'auto' ; // 20 | 24 | auto
}

export const Icon = ({
	isButton = false,
	name,
	offscreen,
	onClick,
	iconColor,
	opacity,
	className,
	size= 'sm',
}:Props) => {
	return(
		<S.Icon
			$name={name}
			$iconColor={iconColor}
			$opacity={opacity}
			as={isButton ? 'button' : 'span'}
			onClick={onClick}
			className={className}
			$size={size}
		>
			{offscreen && <span className='sr-only'>{offscreen}</span>}
		</S.Icon>
	)
}