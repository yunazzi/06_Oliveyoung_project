import styled from "styled-components";

type styledProps = {
	$size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // xs - 120 | sm - 168 | md - 204 | lg - 220 | xl - 282
}

const sizeStyles = {
	xs: {size:'120px', radius: '8px'},
	sm: {size:'168px', radius: '12px'},
	md: {size:'204px', radius: '12px'},
	lg: {size:'220px', radius: '12px'},
	xl: {size:'282px', radius: '16px'},
} as const;

export const ThumbBox = styled.div<styledProps>`
	position: relative;
	width: ${({$size = 'md'}) => sizeStyles[$size].size};
	height: ${({$size = 'md'}) => sizeStyles[$size].size};
	border-radius: ${({$size = 'md'}) => sizeStyles[$size].radius};
	overflow: hidden;
	
	img {
		height: 100%;
		object-fit: cover;
	}
`;

export const bookmarkBtn = styled.button<styledProps>`
	display: inline-flex;
	position: absolute;
	bottom: ${({$size}) => ($size === 'md' ? '8px' : '12px')};
	right: ${({$size}) => ($size === 'md' ? '8px' : '12px')};
	z-index: 9;
	padding: 4px;
	cursor: pointer;
`;

export const rankBtn = styled.div`
	position: absolute;
	top: 12px;
	left: 12px;
	width: 32px;
`;