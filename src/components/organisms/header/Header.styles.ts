import styled from "styled-components";

export const HeaderWrap = styled.header`
	width: 1280px;
	margin: 36px auto 0;
	padding: 0 40px;
	display: flex;
	flex-direction: column;
`;

export const HeaderUtil = styled.div`
	height: 28px;
	display: flex;
	align-items: center;
	justify-content: flex-end;
`;

export const MenuList = styled.ul`
	display: flex;
	font-weight: var(--font-weight-medium);
	
	li {
		position: relative;

		~ li {
			padding-left: 8px;
			margin-left: 8px;
			
			&::before {
				display: inline-block;
				position: absolute;
				top: 50%;
				left: 0;
				transform: translate(-50%, -50%);
				content: "";
				width: 2px;
				height: 12px;
				background: var(--color-gray-200);
			}
		}
	}
`;

export const HeaderInner = styled.div`
	margin-top: 16px;
	display: flex;
	gap: 24px;
	align-items: center;
	
	.search-area {
		flex: 0 0 496px;
	}
	
	.menu-area {
		display: flex;
		margin-left: auto;
	}
`;
