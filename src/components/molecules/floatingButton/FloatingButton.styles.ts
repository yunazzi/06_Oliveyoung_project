import styled from "styled-components";

export const FloatingButton = styled.div`
	position: sticky;
	top: 48px;
	//right: 160px;
	//z-index: 10;
	
	width: 120px;
	display: flex;
	flex-direction: column;
	gap: 16px;
`;
export const RecentlyViewedProd = styled.div`
	display: flex;
    flex-direction: column;
    align-items: center;
	gap: 4px;
	overflow: hidden;
	
	background: var(--color-common-white);
	box-shadow: 0 2px 4px 0 rgba(48, 47, 44, 0.2);
	height: 384px;
	border-radius: 16px;
	padding: 12px;
	
	.img-area {
		width: 96px;
		height: 96px;
		border-radius: 4px;
		overflow: hidden;
	}
`;
export const OliveYoungApp = styled.div`
	height: 160px;
	border-radius: 16px;
	overflow: hidden;
	box-shadow: 0 2px 4px 0 rgba(48, 47, 44, 0.2);
`;
