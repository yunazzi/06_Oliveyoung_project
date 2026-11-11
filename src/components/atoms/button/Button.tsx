import React from "react";
import * as S from './Button.styles.ts'
import type { IconColor } from "@/components/atoms/icon/Icon.tsx";

// 컴포넌트
import {
	Icon, Typography // atoms
} from "@/components/index.ts";

import type {
	TypographyVariant,
	TypographyWeight,
	TypographyColor
} from "@/components/atoms/typography/Typography.tsx";

type Props = {
	type: 'solid' | 'outline' | 'text' ;
	size: 'xs' | 'sm' | 'md' | 'lg' | 'auto'; // 36px | 44px | 48px | 60px
	status?: 'def' | 'defFooter' | 'select' | 'disabled';
	className?: string;
	color?: TypographyColor;
	onClick?: () => void;
	text?: string;
	iconStart?: string | undefined;
	iconEnd?: string | undefined;
	as?: React.ElementType;
	iconColor?: IconColor;
	to?: string;
	radius?: 'sm' | 'md';
}

type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'auto';
type IconSize = 'sm' | 'md' | 'xl' | 'auto' ; // sm - 20 | md - 24 | xl - 40
type TextStyle = {
    variant: TypographyVariant;
    weight: TypographyWeight;
};

const iconSizeByButtonSize: Record<ButtonSize, IconSize> = {
	xs: 'sm',
	sm: 'sm',
	md: 'md',
	lg: 'md',
	auto: 'md'
}

// text 버튼 타입
const textStyleByButtonSize: Record<ButtonSize, TextStyle> = {
	xs: { variant: 'body', weight:'medium'},
	sm: { variant: 'subTitle', weight:'semiBold'},
	md: { variant: 'title', weight:'bold'},
	lg: { variant: 'headingMd', weight:'bold'},
	auto: { variant: 'body', weight:'semiBold'},
}

export const Button = ({
	className,
	type,
	size = 'sm',
	color = 'black',
	onClick,
	text,
	iconStart,
	iconEnd,
	iconColor = 'black',
	as,
	to,
	status = 'def',
	radius= 'sm',
}:Props) => {
	const textStyle = textStyleByButtonSize[size];
	const iconSize = type === 'text' && size === 'lg' ? 'xl' : iconSizeByButtonSize[size];

	return(
		<S.Button
			$type={type}
			$size={size}
			$hasIcon={!!(iconStart || iconEnd)}
			color={color}
			className={className}
			onClick={onClick}
			as={as}
		 	to={to}
			$status={status}
			$radius={radius}
		>
			{iconStart && <Icon name={iconStart} size={iconSize} iconColor={iconColor} />}
			<Typography as='span' {...textStyle} color={color}>
				{text}
			</Typography>
			{iconEnd && <Icon name={iconEnd} size={iconSize} iconColor={iconColor} />}
		</S.Button>
	)
}