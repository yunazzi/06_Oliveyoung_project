import styled from "styled-components";

type StyledProps = {
    $type: 'solid' | 'outline' | 'text' ;
    $size: 'xs' | 'sm' | 'md' | 'lg' | 'auto';
	$hasIcon?: boolean;
	to?: string;
	$status?: 'def' | 'defFooter' | 'select' | 'disabled';
	$radius?: 'sm' | 'md'; // sm - 8px | md - 12px
};

const radiusStyles = {
	sm: "8px",
	md: "12px",
}

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

const solidColorStyles = {
	def: {bg: 'var(--color-common-black)', border: 'var(--color-common-black)'},
	defFooter: {bg: 'var(--color-common-black)', border: 'var(--color-common-black)'},
	select: {bg: 'transparent', border: 'var(--color-common-white)'},
	disabled: {bg: 'transparent', border: 'var(--color-common-white)'},
};

const outlineColorStyles = {
	def: {bg: 'var(--color-common-white)', border: 'var(--color-gray-300)'},
	defFooter: {bg: 'transparent', border: 'var(--color-gray-300)'},
	select: {bg: 'var(--color-common-white)', border: 'var(--color-common-black)'},
	disabled: {bg: 'var(--color-gray-100)', border: 'var(--color-gray-300)'},
};


export const Button = styled.button<StyledProps>`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: ${({ $hasIcon }) => ($hasIcon ? '4px' : '')};
	
	cursor: pointer;
    height: ${({ $type, $size }) => ($type === 'text' ? textSizeStyles[$size] : boxSizeStyles[$size])};
	padding: ${({ $type, $size }) => ($type === 'text' ? textPaddingStyles[$size] : boxPaddingStyles[$size])};
	border-radius: ${({$radius = 'sm'}) => radiusStyles[$radius]};
	
	span {
	    display: inline-block;
	}
	
	${({ $type, $status = 'def' }) => {
    if ($type === 'text') return 'background: none; border: none;';

    const style = $type === 'solid' ? solidColorStyles[$status] : outlineColorStyles[$status];
    return `
        background-color: ${style.bg};
        border: 1px solid ${style.border};
    `;
}}
`;