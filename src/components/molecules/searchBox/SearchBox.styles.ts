import styled from "styled-components";

export const SearchBox = styled.div`
	display: flex;
	position: relative;
	
	.ui-input {
		flex: 1;
	}
	
	.btn-search {
		position: absolute;
		right: 16px;
		top: 50%;
		transform: translateY(-50%);
	}
`;