import styled from "styled-components";

export const TabSlide = styled.div`
	display: flex;
	flex-direction: column;
	gap: 8px;
	align-items: center;
	
	.img-area {
		width: 88px;
		height: 88px;
		
		img {
			width: 100%;
			object-fit: cover;
		}
	}
`;