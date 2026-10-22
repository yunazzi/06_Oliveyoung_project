import styled from "styled-components";

type StyledProps = {
    $type: 'solid' | 'outline' | 'text' ;
    $size: 'xs' | 'sm' | 'md' | 'lg' | 'auto';
	$hasIcon?: boolean;
	to?: string;
};

// TYPE === TEXT
const textPaddingStyles = {
	xs: '4px',
	sm: '8px',
	md: '12px 20px',
	lg: '12px 24px',
	auto: 'auto',
}
const textSizeStyles = {
	xs: '28px',
	sm: '40px',
	md: '52px',
	lg: '68px',
	auto: 'auto'
};

// TYPE === SOLID/OUTLINE
const boxPaddingStyles = {
	xs: '8px',
	sm: '12px',
	md: '12px',
	lg: '16px',
	auto: 'auto',
}
const boxSizeStyles = {
	xs: '36px',
	sm: '44px',
	md: '48px',
	lg: '60px',
	auto: 'auto'
};


export const Button = styled.button<StyledProps>`
	display: flex;
	align-items: center;
	gap: ${({ $hasIcon }) => ($hasIcon ? '4px' : '')};
	
	cursor: pointer;
    height: ${({ $type, $size }) => ($type === 'text' ? textSizeStyles[$size] : boxSizeStyles[$size])};
	padding: ${({ $type, $size }) => ($type === 'text' ? textPaddingStyles[$size] : boxPaddingStyles[$size])};
	
	span {
	    display: inline-block;
	}
`;