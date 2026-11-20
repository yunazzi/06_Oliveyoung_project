import {
	Icon, Typography
} from "@/components";

import React from "react";
import * as S from './BreadCrumbs.styles.ts';

type Props = {
	steps: string[];
	activeIndex?: number;
};

export const BreadCrumbs = ({
	steps,
	activeIndex,
}:Props) => {
	return (
		<S.BreadCrumbsWrap>
			{steps.map((step, idx) => (
				<React.Fragment key={step}>
					{idx > 0 && <Icon name={'rightArrow'} iconColor={'gray500'} size={'md'} />}
					<Typography
						variant={'subTitle'}
						weight={'medium'}
						color={idx === activeIndex ? 'black' : 'gray500'}
					>
						{step}
					</Typography>
				</React.Fragment>
			))}
		</S.BreadCrumbsWrap>
	)
}