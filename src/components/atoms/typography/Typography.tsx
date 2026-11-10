import { type ElementType, type ReactNode} from "react";

const variantClass = {
	display: 'text-display',
	headingMd: 'text-heading-md',
	headingSm: 'text-heading-sm',
	title: 'text-title',
	subTitle: 'text-sub-title',
	body: 'text-body',
	caption: 'text-caption'
} as const;

const weightClass = {
	bold: 'font-bold',
	semiBold: 'font-semibold',
	medium: 'font-medium',
	regular: 'font-normal'
} as const;

import { colorClass, type Color } from '@/styles/colors';

export type TypographyVariant = keyof typeof variantClass;
export type TypographyWeight = keyof typeof weightClass;
export type TypographyColor = Color;


type Props = {
	variant?: TypographyVariant;
	as?: ElementType;
	className?: string;
	children?: ReactNode;
	weight?: TypographyWeight;
	color?: TypographyColor;
}

export const Typography = ({
	variant = 'body',
	weight = 'regular',
	as: Tag = 'div',
	className = '',
	children,
	color = 'black'
}: Props) => (
	<Tag className={`${variantClass[variant]} ${weightClass[weight]} ${colorClass[color]} ${className}`}>{children}</Tag>
)