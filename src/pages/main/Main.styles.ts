import styled from "styled-components";

export const ContWrap = styled.div`
	display: flex;
	flex-direction: column;
	gap: 80px;
	margin-bottom: 80px;
`;

export const ContBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 28px;
	
	.title-wrap {
		display: flex;
		align-items: center;
		flex-direction: column;
		
		&:not(:has(button)) {
			gap: 12px;
		}
	}

	span {
		&.pink {
			color: var(--color-snb-pink);
		}
	}
	
	// common
	.tag-wrap {
		display: flex;
		gap: 8px;
	}
`;