import styled from "styled-components";

const checkedIcon = `${import.meta.env.BASE_URL}assets/icons/ic-checked.svg`;

export const CheckBox = styled.span`
	position: relative;
	display: inline-block;
	//font-size: 0;
	vertical-align: top;
	min-height: 24px;
	
	.ui-input {
		position: absolute;
		width: 1px;
		height: 1px;
		padding: 0;
		margin: -1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		border: 0;
		
		&:checked + label {
			&::before {
				background: url(${checkedIcon}) center / 18px 18px no-repeat;
				border: 0;
			}
		}
		
		+ label {
			padding-left: 24px;
			min-height: 24px;
			
			display: inline-block;
			position: relative;
			cursor: pointer;
			vertical-align: top;
			
			&::before {
				background: var(--color-common-white);
				border: 1px solid var(--color-gray-400);
				border-radius: 4px;
			}
			
			&::before {
				content: "";
				display: inline-block;
				position: absolute;
				left: 3px;
				top: 50%;
				width: 18px;
				height: 18px;
				transform: translateY(-50%);
				text-align: center;
				box-sizing: border-box;
			}
			
			span {
				display: inline-block;
				margin-left: 4px;
				margin-top: 2px;
			}
		}
	}
`;