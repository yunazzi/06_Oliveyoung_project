import styled from "styled-components";

export const Radio = styled.span`
	position: relative;
	display: inline-block;
	font-size: 0;
	vertical-align: top;
	min-height: 22px;
	
	.ui-input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
		
		& label {
			padding-left: 22px;
			min-height: 22px;
			
			display: inline-block;
			position: relative;
			cursor: pointer;
			vertical-align: top;
			
			&::before {
				background: var(--color-common-white);
				border: 1px solid var(--color-gray-800);
			}
			
			&::before, &::after {
				border-radius: 22px;
				content: "";
				display: inline-block;
				position: absolute;
				left: 0;
				top: 50%;
				width: 22px;
				height: 22px;
				transform: translateY(-50%);
				text-align: center;
				box-sizing: border-box;
			}
		}
	}
`;