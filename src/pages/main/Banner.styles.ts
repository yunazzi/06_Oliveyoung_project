import oliveBetterBg from '@/assets/olivebetter-banner-bg.png';
import oliveBetterLogo from '@/assets/olivebetter-logo.svg'
import styled from "styled-components";

export const OliveBetterBanner = styled.div`
	position: relative;
	color: #FCFB9A;
	
	.img-area {
		width: 1200px;
		height: 180px;
		background: url(${oliveBetterBg}) center / cover no-repeat;
		border-radius: 16px;
	}
	
	.text-area {
		position: absolute;
		left: 32px;
		top: 32px;
		
		.sub-title {
			font-weight: var(--font-weight-semibold);
			font-size: 13.71px;
			line-height: 16px;
		}
		.title {
			background: url(${oliveBetterLogo}) center / cover no-repeat;
			width: 375px;
			height: 50px;
			margin-top: 9px;
		}
		.description {
			display: inline-block;
			font-size: 16.46px;
			line-height: 20px;
			margin-top: 20px;
			
			.fw-bold {
				font-weight: var(--font-weight-bold);
			}
		}
	}
	
	.view-btn-area {
		position: absolute;
		bottom: 26px;
		right: 28px;
		
		display: flex;
		align-items: center;
		gap: 10px;
		
		background: #4E340F;
		padding: 8px 20px;
		border-radius: 100px;
		
		.text {
			letter-spacing: 0;
			font-size: 15px;
			line-height: 24px;
			font-weight: var(--font-weight-bold);
		}
		
		.cta-arrow {
			width: 22px;
			height: 10px;
			background: #FCFB9A;
		}
	}
`;
