import styled from "styled-components";

export const GoodsGroup = styled.div`
	.price-group {
		&.origin {
			display: block;
			text-decoration: line-through;
		}
		
		~ .percent {
			margin-right: 4px;
		}
	}
`;