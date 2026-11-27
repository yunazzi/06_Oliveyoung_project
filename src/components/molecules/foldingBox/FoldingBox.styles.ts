import styled from "styled-components";

export const FoldingBox = styled.div`
	.fold-list {
		.fold-item {
			.fold-header {
				position: relative;
                display: flex;
                justify-content: space-between;
                align-items: center;
				
				.btn-fold { // 폴딩누르면 전체 닫히는 방법 시도하기
					//position: absolute;
					//inset: 0;
					//background: #000;
				}
			}
			.fold-content {
                background: #fff;
                padding: 10px;
			}
		}
	}
`;