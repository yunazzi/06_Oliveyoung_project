import styled from "styled-components";

type StyledProps = {
    $type: string;
    $size: 'xs' | 'sm' | 'md' | 'lg' | 'auto';
};

const sizeStyles = {
	xs: '36px',
	sm: '44px',
	md: '48px',
	lg: '60px',
	auto: 'auto'
};

export const Button = styled.button<StyledProps>`
	display: flex;
	align-items: center;
	gap: 4px;
	
	cursor: pointer;
    height: ${({ $size = 'sm' }) => sizeStyles[$size]};
	padding: ${({$type}) => ($type === 'text' ? '8px' : '0')};
	
	span {
	    display: inline-block;
	}
`;