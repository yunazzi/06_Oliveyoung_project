import styled from "styled-components";

export const FoldingBox = styled.div`
	.fold-list {
		.fold-item {
			.fold-header { // 주문 상품 * 건
				
			}
			.fold-content { // 주문한 내용
				.order-prod-box {
					border-radius: 12px;
					background-color: var(--color-gray-100);
					padding: 16px;
					
					.title-wrap {
						display: flex;
						margin-bottom: 16px;
						
						.right-area {
							margin-left: auto;
						}
					}
				}
			}
		}
	}
`;