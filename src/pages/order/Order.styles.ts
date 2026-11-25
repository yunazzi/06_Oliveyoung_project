import styled from "styled-components";

export const OrderWrap = styled.div`
	background: var(--color-gray-100);
	
	.inner-wrap {
		max-width: 1200px;
		margin: 0 auto;
	}
	
	.input-group {
		display: flex;
		align-items: center;
		width: 420px;
	}
	
	.cont-title {
        display: flex;
		border-bottom: 1px solid var(--color-gray-300);
        
        .right-area {
            margin-left: auto;
        }
		
		.apply-coupon {
			display: flex;
			align-items: center;
			gap: 8px;
		}
	}
`;

export const ContentWrap = styled.div`
    position: relative;
    display: flex;
    gap: 24px;
`;

export const ContWrap = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
	flex: 1;
`;
export const ContBox = styled.div`
	display: flex;
	flex-direction: column;
	background: var(--color-common-white);
	padding: 24px;
	border-radius: 20px;
    
    .info-box {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-bottom: 16px;
        
        .member-info {
            display: flex;
            align-items: center;
            gap: 8px;
        }
        .address-info {
            display: flex;
            flex-direction: column;
            gap: 4px;
        }
    }
	
	.coupon-notice-info {
		display: flex;
		gap: 12px;
		
		.notice-box {
			display: flex;
			flex: 1;
			background-color: var(--color-common-white);
			border: 1px solid var(--color-gray-200);
			border-radius: 12px;
			padding: 12px;
			
			.right-area {
				margin-left: auto;
			}
		}
	}
`;

export const AsideWrap = styled.div`
	width: 360px;
    padding: 24px;
    background: var(--color-common-white);
    border-radius: 20px;
    position: sticky;
    max-height: 720px;
    top: 0;
    z-index: 9;
	
	.price-info-footer {
		display: flex;
		align-items: center;
		border-top: 1px solid var(--color-gray-300);
		margin-top: 12px;
		padding-top: 16px;
		
		.goods-group {
			margin-left: auto;
			display: flex;
			align-items: center;
			gap: 4px;
		}
	}
`;