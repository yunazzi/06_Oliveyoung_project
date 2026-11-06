import {
	ThumbBox, Typography, Tag, GoodsGroup
} from "@/components/index.ts";

export type TagData = {
	text: string;
    color?: TagColor;
    type?: 'solid' | 'outline';
};

import * as S from './ProdUnit.styles.ts'
import type {TagColor} from "@/components/atoms/tag/Tag.styles.ts";

type Props = {
	type?: 'row' | 'column';
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // 120 | 168 | 204 | 220 | 282
	thumbImg?: string;
	thumbAlt?: string;
	prodBrand?: string;
	prodTitle?: string;
	ProdView?: number;
	originVal?: number;
	percent?: number;
	currentVal?: number;
	tags?: TagData[];
}

export const ProdUnit = ({
	type = 'column',
	size = 'lg',
	thumbImg,
	thumbAlt,
	prodBrand,
	prodTitle,
	originVal,
	percent,
	currentVal,
	ProdView,
	tags = [],
}:Props) => {
	const isXs = size === 'xs';

	return(
		<S.ProdUnit className={'prod-unit'} $type={type} $size={size}>
			<ThumbBox size={size} thumbImg={thumbImg} thumbAlt={thumbAlt} />
			<S.InfoBox className={'text-area'} $size={size}>
				{ProdView && (
					<Typography className={'prod-view'} weight={'semiBold'} color={'coral600'}>
						{`${ProdView}명이 보고 있어요 👀`}
					</Typography>
				)}
				{prodBrand && (
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
			</S.InfoBox>
    	</S.ProdUnit>
	)
}