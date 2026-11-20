import styled from "styled-components";

export const SearchBox = styled.div`
	display: flex;
	position: relative;
	
	.ui-input {
		flex: 1;
		border: 1.8px solid var(--color-brand-green-500);
		height: 48px;
		padding: 12px 16px;
	}
	
	.btn-search {
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
	}
`;