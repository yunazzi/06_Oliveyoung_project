import React from "react";
import * as S from './Tag.styles.ts';

type Props = {
	size?: 'sm' | 'md' | 'lg' | 'xl'; // 24 | 28 | 32 | 36
	type?: 'solid' | 'outline';
	color?: S.TagColor;
	children?: React.ReactNode;
}

export const Tag = ({
	size = 'md',
	type = 'solid',
	color = 'gray',
	children,
}:Props) => {
	return(
		<S.Tag $size={size} $type={type} $color={color}>
			{children}
		</S.Tag>
	)
}