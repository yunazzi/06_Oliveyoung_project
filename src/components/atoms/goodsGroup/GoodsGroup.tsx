import {Typography} from "@/components";

import * as S from './GoodsGroup.styles.ts';
import type { TypographyVariant } from "@/components/atoms/typography/Typography.tsx";

type Props = {
	originVar?: TypographyVariant;
	percentVar?: TypographyVariant;
	currentVar?: TypographyVariant;
	originVal?: number;
	percent?: number;
	currentVal?: number;
}

export const GoodsGroup = ({
	originVar,
	percentVar,
	currentVar,
	originVal,
	percent,
	currentVal,
}:Props) => {
	return (
		<S.GoodsGroup className="prod-price">
			<Typography as={'span'} className={'price-group origin'} variant={originVar} weight={'medium'} color={'gray500'}>
				<span className="val">{originVal}</span>
				<span className="unit">원</span>
			</Typography>
			<Typography as={'span'} className={'percent'} variant={percentVar} weight={'bold'} color={'coral600'}>
				{percent}%
			</Typography>
			<Typography as={'span'} className={'price-group'} variant={currentVar} weight={'bold'}>
				<span className="val">{currentVal}</span>
				<span className="unit">원</span>
			</Typography>
		</S.GoodsGroup>
	)
}