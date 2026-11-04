import styled, { css } from 'styled-components';

type StyledProps = {
	$type?: 'hero' | 'def';
	$width?: number;
};

export const SwiperWrap = styled.div<StyledProps>`
	position: relative;
	width: 100%;
	
	${({ $width }) =>
       $width &&
       css`
          .swiper-slide {
             width: ${$width}px;
          }
       `
    }
	
	img {
		display: block;
		width: 100%;
	}

	${({ $type }) =>
		$type === 'hero' &&
		css`
			.swiper-slide {
				display: grid;
				
				> * {
					grid-area: 1 / 1;
				}
				
				.img-area {
					position: relative;
				}
				.text-area {
					width: 100%;
					max-width: 1280px;
					margin: 0 auto;
					z-index: 1;
					
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					padding: 48px 40px 0;
					gap: 16px;
					
					.title {
						margin-top: 20px;
					}
				}
			}
			
			.swiper-button-prev,
			.swiper-button-next {
				width: 40px;
				height: 40px;
				border-radius: 50%;
				background: rgba(0, 0, 0, 0.5);
				color: #fff;
			
				&::after {
					font-size: 16px;
					font-weight: 700;
				}
			}
		`
	}
	${({ $type }) =>
		$type === 'def' &&
		css`
			max-width: 1200px;
			margin: 0 auto;
		`
	}
`;

export const DefControls = styled.div<StyledProps>`
	position: absolute;
    top: ${({ $width }) => ($width ? `${$width / 2}px` : '50%')};
    left: 50%;
    transform: translate(-50%, -50%);
	width: 100%;
	max-width: 1200px;
	height: 0;
	pointer-events: none;
	z-index: 10;
	
	.btn-prev, .btn-next {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
		pointer-events: auto;
		cursor: pointer;
		
		display: flex;
		align-items: center;
		justify-content: center;
		width: 44px;
		height: 44px;
		border-radius: 12px;
		background: var(--color-common-white);
		box-shadow: 0 2px 4px 0 rgba(48, 47, 44, 0.2);
		
		span {
			display: inline-block;
			width: 28px;
			height: 28px;
		}
	}
	.btn-prev { left: -22px; }
    .btn-next { right: -22px; }
`;

// 메인 히어로배너 swiper
export const HeroControls = styled.div`
	position: absolute;
	left: 0;
	right: 0;
	bottom: 24px;
	z-index: 10;
	display: flex;
	align-items: center;
	gap: 12px;
	padding: 0 40px;
	pointer-events: none; /* 빈 영역 클릭은 슬라이드로 */
	max-width: 1280px;
	margin: 0 auto;

	button {
		pointer-events: auto;
	}
`;

export const ProgressTrack = styled.div`
	flex: 1;
	height: 2px;
	background: var(--color-gray-200);
	overflow: hidden;
`;

export const ProgressBar = styled.div<{ $ratio: number }>`
    height: 100%;
    background: #111;
    width: ${({ $ratio }) => $ratio * 100}%;
    transition: width 0.3s ease; /* 넘길 때 부드럽게 채워짐. 즉시 바뀌길 원하면 제거 */
`;
export const HeroButtons = styled.div`
	display: flex;
	align-items: center;
	color: var(--color-common-black);
	
	button {
		margin: 4px;
		padding: -4px;
		cursor: pointer;
	}
`;

export const Fraction = styled.span`
	font-size: var(--text-sub-title);
	font-weight: var(--font-weight-medium);
	line-height: var(--text-sub-title--line-height);
	letter-spacing: var(--text-sub-title--letter-spacing);
	text-align: center;
	display: flex;
	gap: 16px;
	position: relative;
	
	span {
		display: inline-block;
	}
	
	.total {
		position: relative;
		
		&::before {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			left: -8px;
			content: "";
			height: 14px;
			width: 2px;
			background: var(--color-common-black);
		}
	}
`;