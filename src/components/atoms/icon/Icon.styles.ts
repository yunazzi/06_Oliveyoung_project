import styled from "styled-components";

type StyledProps = {
    $name: string;
    $iconColor?: string;
    $opacity?: number;
	$size?: 'sm' | 'md' | 'auto' ;
};

const sizeStyles = {
	sm: '20px',
	md: '24px',
	auto: 'auto',
};

const toKebabIconName = (camelStr: string) => {
  const kebab = camelStr.replace(/[A-Z]/g, (letter) => `-${letter.toLowerCase()}`);
  return `ic-${kebab}`;
};

export const Icon = styled.span<StyledProps>`
    background-color: ${({ $iconColor }) => $iconColor};
    opacity: ${({ $opacity }) => $opacity};
	${({ $name }: StyledProps) => {
		const asset = `assets/icons/${toKebabIconName($name)}.svg`;
		
		return `
			mask-image: url(${asset});
			mask-size: contain;
			mask-repeat: no-repeat;
			mask-position: center;
		`;
	}}
	cursor: ${({ onClick }) => (onClick ? 'pointer' : 'default')};
	transition: transform 0.1s ease;
	
	width: ${({$size = 'md'}) => sizeStyles[$size]};
	height: ${({$size = 'md'}) => sizeStyles[$size]};
`;