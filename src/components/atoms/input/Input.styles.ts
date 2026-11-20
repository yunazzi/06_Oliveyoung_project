import styled from "styled-components";

export const Input = styled.input`
	border-radius: var(--radius-md);
	outline: none;
	height: 44px;
	padding: 0 12px;
	background: var(--color-common-white);
	border: 4px solid var(--color-gray-200);
	
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