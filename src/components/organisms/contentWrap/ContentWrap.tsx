import React from 'react';
import * as S from './ContentWrap.styles.ts';
import { FloatingButton } from '@/components/index.ts';

type Props = {
	children: React.ReactNode;
	showFloating?: boolean;
	className?: string;
};

export const ContentWrap = ({
	children,
	showFloating = false,
	className,
}: Props) => (
	<S.ContentWrap className={`content-wrap ${className}`.trim()}>
		<S.Inner>{children}</S.Inner>
		{showFloating && (
			<S.FloatingAside>
				<FloatingButton />
			</S.FloatingAside>
		)}
	</S.ContentWrap>
);