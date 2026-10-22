import styled from "styled-components";

export const GnbArea = styled.div`
	width: 1280px;
	margin: 0 auto;
	border-bottom: 4px solid var(--color-gray-300);
	
	.gnb-inner {
		display: flex;
		gap: 33px;
		padding: 12px 40px;
		margin-top: 16px;
		
		.gnb-list {
			display: flex;
			flex: 1;
			justify-content: space-between;
		}
	}
`;