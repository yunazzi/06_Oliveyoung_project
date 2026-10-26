import styled from "styled-components";

type StyledProps = {
	$type: 'def' | 'footer';
}

export const SelectBox = styled.select<StyledProps>`
	position: relative;
	border: 1px solid var(--color-gray-300);
	outline: none;
	
	border-radius: ${({$type}) => ($type === 'def' ? 'var(--radius-md)': '8px')};
	height: ${({$type}) => ($type === 'def' ? '44px': '32px')};
	padding: ${({$type}) => ($type === 'def' ? '10px 12px': '4px 60px 4px 8px')};
	
	 /* 기본 화살표 제거 */
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
	
	/* 커스텀 화살표 */
	background-color: ${({$type}) => ($type === 'def' ? 'var(--color-common-white)':'')};
	background-image: url(/public/assets/icons/ic-down-arrow.svg);
	background-repeat: no-repeat;
	background-position: right ${({$type}) => ($type === 'def' ? '12px' : '4px')} center;
	background-size: 24px;
	
	&::placeholder {
		color: var(--color-gray-700);
		font-weight: var(--font-weight-medium);
		font-size: var(--text-caption);
	}
`;