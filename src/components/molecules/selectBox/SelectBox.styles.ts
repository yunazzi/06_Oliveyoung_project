import styled from "styled-components";

type StyledProps = {
	$type: 'def' | 'footer';
}

export const SelectBox = styled.select<StyledProps>`
	border: 1px solid var(--color-gray-300);
	
	border-radius: ${({$type}) => ($type === 'def' ? 'var(--radius-md)': '4px')}
	height: ${({$type}) => ($type === 'def' ? '44px': '32px')}
	padding: ${({$type}) => ($type === 'def' ? '10px 12px': '4px 4px 4px 8px')}
`;