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

export const BrandBanner = styled.div`
	position: relative;
	width: 690px;
	
	.img-area {
		position: relative;
		width: 100%;
		height: 432px;
		border-radius: 20px;
		overflow: hidden;
		
		img {
			object-fit: cover;
		}
		
		&::before {
			content:"";
			position: absolute;
			inset: 0;
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(28, 28, 28, 0.5) 100%);
			pointer-events: none;
		}
	}
	
	.text-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 8px;
		
		position: absolute;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
		
		.brand-like {
			display: flex;
    		align-items: center;
			border: 1px solid var(--color-common-white);
			border-radius: 8px;
			height: 28px;
			padding: 0 8px;
		}
	}
`;

export const onlyOliveBanner = styled.div`
	position: relative;
	
	.img-area {
		position: relative;
		border-radius: 16px;
		overflow: hidden;
		
		img {
			width: 100%;
			height: 100%;
			object-fit: cover;
		}
	}
	.text-area {
		display: flex;
		flex-direction: column;
		gap: 4px;

		position: absolute;
		padding: 40px 24px;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

export const MediumBanner = styled.div`
	position: relative;
	width: 384px;
	
	.img-area {
		position: relative;
		width: 100%;
		height: 432px;
		border-radius: 20px;
		overflow: hidden;
		
		&::before {
			content:"";
			position: absolute;
			inset: 0;
			background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(28, 28, 28, 0.5) 100%);
			pointer-events: none;
		}
	}
	
	.text-area {
		display: flex;
		flex-direction: column;
		align-items: center;
		gap: 4px;
		
		position: absolute;
		bottom: 32px;
		padding: 0 16px;
		width: 100%;
		text-align: center;
	}
`;