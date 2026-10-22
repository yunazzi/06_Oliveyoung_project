import styled from "styled-components";

export const FooterWrap = styled.footer`
	background-color: var(--color-gray-200);
	//position: absolute;
	//width: 100%;
	//left: 0;
	//bottom: 0;
	padding-top: 36px;
	padding-bottom: 56px;
`;

export const FooterTopArea = styled.div`
	width: 1200px;
	margin: 0 auto;
	
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
	
`;