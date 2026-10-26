import styled from "styled-components";

export const FooterWrap = styled.footer`
	background-color: var(--color-gray-200);
	padding-top: 36px;
	padding-bottom: 56px;
	
	position: absolute;
	left: 0;
	right: 0;
	bottom: 0;
	
	.footer-inner {
		width: 1200px;
		margin: 0 auto;
	}
`;

export const FooterTopArea = styled.div`
	display: flex;
    justify-content: space-between;
	
	.left-area {
		.logo-area {
			margin-top: 28px;
		}
		
		.footer-info {
			display: flex;
			flex-direction: column;
			gap: 4px;
			margin-top: 16px;
			
			span {
				text-decoration: underline;
			}
		}
	}
	
	.right-area {
		text-align: right;
		
		.customer-box {
			margin-top: 16px;
			
			.customer-info {
				display: flex;
				flex-direction: column;
				gap: 4px;
				margin-top: 4px;
			}
		}
		
		.btn-wrap {
			display: flex;
			gap: 8px;
			margin-top: 12px;
			
			.w100 {
				width: 100px;
			}
		}
	}
`;

export const MenuList = styled.ul`
	display: flex;
	font-weight: var(--font-weight-medium);
	
	li {
		position: relative;
		
		~ li {
			padding-left: 16px;
			margin-left: 16px;
			
			&::before {
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(-50%, -50%);
				content: "";
				width: 2px;
				height: 12px;
				background: var(--color-gray-300);
			}
		}
	}
`;

export const FooterBottomArea = styled.div`
	margin-top: 44px;
	
	.ba-top-box {
		display: flex;
		justify-content: space-between;
		
		.term-info-list {
			display: flex;
			gap: 20px;
		}
	}
	
	.ba-bottom-box {
		display: flex;
		justify-content: space-between;
		
		border-top: 1px solid var(--color-gray-300);
		margin-top: 12px;
		padding-top: 8px;
		
		.certification-mark {
			display: flex;
			gap: 12px;
			
			li {
				display: flex;
				align-items: center;
				gap: 4px;
				
				.text-box {
					p {
						font-size: 10px;
						font-weight: 400;
						line-height: 12px;
						color: var(--color-gray-700);
						
						~ p {
							margin-top: 4px;
						}
					}
				}
			}
		}
		
		.sns-area {
			display: flex;
			align-items: center;
			gap: 12px;
			
			.sns-item {
				background: var(--color-common-white);
				width: 28px;
				height: 28px;
				border-radius: 50%;
				display: flex;
				align-items: center;
				justify-content: center;
			}
		}
	}
`;