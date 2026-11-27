import styled from "styled-components";

export const FoldingBox = styled.div`
	.fold-list {
		.fold-item {
			.fold-header {
				position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
				
				.btn-fold {
					position: absolute;
					inset: 0;
					background: #000;
				}
			}
			.fold-content {
                background: #fff;
                padding: 10px;
			}
		}
	}
`;