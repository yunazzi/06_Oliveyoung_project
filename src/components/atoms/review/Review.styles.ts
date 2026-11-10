import styled from "styled-components";

export const ReviewArea = styled.div`
	display: flex;
	align-items: center;
	gap: 14px;
	position: relative;
	color: var(--color-gray-700);
	
	span {
		display: inline-block;
		
		&.review-star {
			display: flex;
			align-items: center;
			position: relative;
			
			&::after {
				content: "・";
				display: inline-block;
				position: absolute;
				color: var(--color-gray-700);
				top: 50%;
				transform: translateY(-50%);
				right: -14px;
			}
		}
	}
`;