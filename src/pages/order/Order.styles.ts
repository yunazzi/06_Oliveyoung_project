import styled from "styled-components";

export const OrderWrap = styled.div`
	background: var(--color-gray-100);
	
	.inner-wrap {
		max-width: 1200px;
		margin: 0 auto;
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
	
	.cont-title {
        display: flex;
		border-bottom: 1px solid var(--color-gray-300);
        
        .right-area {
            margin-left: auto;
        }
	}
    
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
    
    .form-list {
        display: flex;
        flex-direction: column;
        gap: 20px;
        
        .form-item {
            .form-title {
                margin-bottom: 4px;
                display: flex;
                gap: 8px;
            }
        }
        .form-cont {
            display: flex;
            gap: 12px;
            
            .w100 {
                width: 100px;
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
`;

export const flexWrap = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;
`;