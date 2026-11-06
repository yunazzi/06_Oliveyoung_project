import styled from "styled-components";

type styledProps = {
	$type?: 'row' | 'column';
	$size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
}

const sizeStyles = {
	xs: '120px',
	sm: '168px',
	md: '204px',
	lg: '220px',
	xl: '282px',
};

export const ProdUnit = styled.div<styledProps>`
	display: flex;
	flex-direction: ${({$type}) => $type};
	gap: ${({$size}) => ($size === 'xl' ? '12px':'16px')};
`;

export const InfoBox = styled.div<styledProps>`
	display: flex;
	flex-direction: column;
	gap: 4px;
	width: ${({$size = 'md'}) => sizeStyles[$size]};
`;
