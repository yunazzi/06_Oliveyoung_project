import * as S from './FoldingBox.styles.ts';
import {Button, Typography, ThumbBox} from "@/components";

export type FoldOption = {
	title?: string;
}

type Props = {
	className?: string;
};

export const FoldingBox = ({
	className
}:Props) => {
	return (
		<S.FoldingBox className={className}>
			<ul className="fold-list">
					<li className="fold-item">
						<div className="fold-header">
							<div className="fold-title">
							</div>
							<Button className={'btn-fold'} text={'버튼'} />
						</div>
						<div className="fold-content">
							<div className="order-prod-box">
								<div className="title-wrap">
									<Typography variant={'subTitle'} weight={'bold'}>올리브영 배송 상품*</Typography>
									<div className="right-area">
										<Typography variant={'subTitle'} weight={'semiBold'} color={'green600'}>20000원 이상 무료배송</Typography>
									</div>
								</div>
								<div className="prod-item">
									{/*<ProdUnit >> 새로 order용 만들기!!! 같이 사용하기 어려울것같음 */}
									{/*	size={'xxs'}*/}
									{/*	prodTitle={'[15년 연속 1위] 메디힐 에센셜 마스크팩10/10 +1매 기획 7종 골라담기'}*/}
									{/*></ProdUnit>*/}
									<ThumbBox size={'xxs'} thumbImg={'이미지'} thumbAlt={'이미지'} />
								</div>
							</div>
						</div>
					</li>
			</ul>
		</S.FoldingBox>
	)
}