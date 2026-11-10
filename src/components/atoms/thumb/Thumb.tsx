import * as S from './Thumb.styles.ts'
import {Icon, Tag, Typography} from "@/components";
import {useState} from "react";

type Props = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // 120 | 168 | 204 | 220 | 282
	thumbImg?: string;
	thumbAlt?: string;
	bookmark?: boolean;
	rank?: number;
	defaultBookmarked?: boolean;
	onBookmarkChange?: (next: boolean) => void;
}

export const ThumbBox = ({
	size,
	thumbImg,
	thumbAlt,
	bookmark,
	defaultBookmarked = false,
    onBookmarkChange,
	rank,
}:Props) => {
	const [isBookmarked, setIsBookmarked] = useState(defaultBookmarked);

    const handleBookmark = () => {
        const next = !isBookmarked;
        setIsBookmarked(next);
        onBookmarkChange?.(next);
    };

	return (
		<S.ThumbBox $size={size}>
			<img src={thumbImg} alt={thumbAlt} />
			{size != 'xs' && bookmark && (
				<S.bookmarkBtn
					$size={size}
					className="bookmark"
					onClick={handleBookmark}
					aria-pressed={isBookmarked}
					aria-label={isBookmarked ? '북마크 해제' : '북마크 추가'}
				>
					<Icon
						name={isBookmarked? 'bookmarkOn' :'bookmarkOff'}
						size={'md'}
						iconColor={isBookmarked? 'coral600' : 'white'}
						opacity={isBookmarked ? 1 : 0.5}
					/>
				</S.bookmarkBtn>
			)}
			{size === 'lg' && rank && (
				<S.rankBtn className={'rank'}>
					<Tag size={'lg'} type={'solid'} color={'black'}>
						<Typography variant={'subTitle'} weight={'semiBold'}>{rank}</Typography>
					</Tag>
				</S.rankBtn>
			)}
		</S.ThumbBox>
	)
}