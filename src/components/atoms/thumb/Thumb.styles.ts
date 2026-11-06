import styled from "styled-components";

type styledProps = {
	$size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // xs - 120 | sm - 168 | md - 204 | lg - 220 | xl - 282
}

const sizeStyles = {
	xs: '120px',
	sm: '168px',
	md: '204px',
	lg: '220px',
	xl: '282px',
};

export const ThumbBox = styled.div<styledProps>`
	width: ${({$size = 'md'}) => sizeStyles[$size]};
	height: ${({$size = 'md'}) => sizeStyles[$size]};
`;