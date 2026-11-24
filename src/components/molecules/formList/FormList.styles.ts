import styled from "styled-components";

export const FormList = styled.ul`
	display: flex;
	flex-direction: column;
	gap: 20px;
	
	.form-item {
		.form-title {
			margin-bottom: 4px;
			display: flex;
			gap: 8px;
		}
	}
	.form-cont {
		display: flex;
		gap: 12px;
	}
`;