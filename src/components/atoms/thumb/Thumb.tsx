import * as S from './Thumb.styles.ts'

type Props = {
	size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'; // 120 | 168 | 204 | 220 | 282
	thumbImg?: string;
	thumbAlt?: string;
}

export const ThumbBox = ({
	size,
	thumbImg,
	thumbAlt
}:Props) => {
	return (
		<S.ThumbBox $size={size}>
			<img src={thumbImg} alt={thumbAlt} />
		</S.ThumbBox>
	)
}