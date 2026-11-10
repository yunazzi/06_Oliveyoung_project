import {
	ThumbBox, Typography, Tag, GoodsGroup, Review
} from "@/components/index.ts";

export type TagData = {
	text: string;
    color?: TagColor;
    type?: 'solid' | 'outline';
};

import * as S from './ProdUnit.styles.ts'
import type {TagColor} from "@/components/atoms/tag/Tag.styles.ts";
import {comma} from "@/utils/numFormat/format.ts";

type Props = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // 120 | 168 | 204 | 220 | 282
	thumbImg?: string;
	thumbAlt?: string;
	prodBrand?: string;
	prodTitle?: string;
	prodView?: number;
	originVal?: number;
	percent?: number;
	currentVal?: number;
	tags?: TagData[];
	reviewStar?: number;
	reviewNum?: number;
	bookmark?: boolean;
	rank?: number;
}

export const ProdUnit = ({
	size = 'lg',
	thumbImg,
	thumbAlt,
	prodBrand,
	prodTitle,
	originVal,
	percent,
	currentVal,
	prodView,
	tags = [],
	reviewStar,
	reviewNum,
	bookmark,
	rank
}:Props) => {
	const isXs = size === 'xs';
	const layoutType = size === 'sm' || size === 'md' ? 'row' : 'column';

	return(
		<S.ProdUnit className={'prod-unit'} $type={layoutType} $size={size}>
			<a href="" className={'btn-link'}></a>
			<ThumbBox size={size} thumbImg={thumbImg} thumbAlt={thumbAlt} bookmark={bookmark} rank={rank} />
			<S.InfoBox className={'text-area'} $size={size}>
				{size === 'lg' && prodView !== undefined && (
					<Typography className={'prod-view'} weight={'semiBold'} color={'coral600'}>
						{`${comma(prodView)}명이 보고 있어요 👀`}
					</Typography>
				)}
				{(size === 'xl' || size === 'md') && prodBrand && (
					<Typography className={'prod-brand'} variant={'subTitle'} weight={'semiBold'} color={'gray500'}>
						{prodBrand}
					</Typography>
				)}

				<Typography
					className={'prod-title'}
					variant={isXs ? 'caption' : 'subTitle'}
					weight={'medium'}
					color={'gray900'}
				>
					{prodTitle}
				</Typography>

				<GoodsGroup
					originVar={isXs ? 'body' : 'subTitle'}
					percentVar={isXs ? 'subTitle' : 'title'}
					currentVar={isXs ? 'subTitle' : 'title'}
					originVal={originVal}
					percent={percent}
					currentVal={currentVal}
				/>

				{tags.length > 0 && (
					<div className="tag-wrap">
						{tags.map((item) => (
							<Tag key={item.text} color={item.color} type={item.type} size={isXs ? 'sm' : 'md'}>
								<Typography variant={isXs ? 'caption' : 'body'} weight={'medium'}>
									{item.text}
								</Typography>
							</Tag>
						))}
					</div>
				)}

				{isXs ? '' : <Review reviewStar={reviewStar} reviewNum={reviewNum} />}
			</S.InfoBox>
    	</S.ProdUnit>
	)
}