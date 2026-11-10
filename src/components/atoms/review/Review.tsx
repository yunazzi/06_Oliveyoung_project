import * as S from './Review.styles.ts';
import {
	Icon, Typography
} from "@/components";
import {formatMax} from "@/utils/numFormat/format.ts";

type Props = {
	reviewStar?: number;
	reviewNum?: number;
};

export const Review = ({
	reviewStar,
	reviewNum = 0,
}:Props) => {
	return(
		<S.ReviewArea>
			<span className="review-star">
				<Icon size={'sm'} name={'star'} offscreen={'별점'} iconColor={'green500'}></Icon>
				<Typography as={'span'} color={'gray700'}>{reviewStar}</Typography>
			</span>
			<span className="review-text">
				<Typography as={'span'} color={'gray700'}>리뷰 {formatMax(reviewNum)}</Typography>
			</span>
		</S.ReviewArea>
	)
}