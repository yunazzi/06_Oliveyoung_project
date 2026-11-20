import styled from "styled-components";

type StyledProps = {
	$size?: 'sm' | 'md' | 'lg' ; // md - 24px
};

const sizeStyles = {
	sm: '20px',
	md: '24px',
	lg: '40px',
};

export const PageTitle = styled.div<StyledProps>`
	display: flex;
	align-items: flex-start;
    justify-content: space-between;
	margin-bottom: ${({$size = 'md'}) => sizeStyles[$size]};
`;