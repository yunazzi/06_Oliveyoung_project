import styled from "styled-components";

export const Input = styled.input`
	border: 1px solid var(--color-brand-green-500);
	height: 48px;
	border-radius: var(--radius-md);
	padding: 12px 16px;
	outline: none;
	
	&::placeholder {
		color: var(--color-gray-700);
		font-weight: var(--font-weight-medium);
	}
	
	/* type="search" 기본 X 버튼 제거 */
    &::-webkit-search-cancel-button,
    &::-webkit-search-decoration {
       -webkit-appearance: none;
       appearance: none;
    }
`;