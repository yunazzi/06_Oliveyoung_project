import React from "react";
import * as S from './PageTitle.styles.ts';

type Props = {
	size?: 'sm' | 'md' | 'lg' ;
	children?: React.ReactNode;
	className?: string;
};

export const PageTitle = ({
	size = 'md',
	children,
	className
}:Props) => {
	return (
		<S.PageTitle $size={size} className={className}>
			{children}
		</S.PageTitle>
	)
}