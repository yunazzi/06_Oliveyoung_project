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

const colorClass = {
	black: 'text-common-black',
	snbPink: 'text-snb-pink',
	green500: 'text-brand-green-500',
	gray900: 'text-gray-900',
	gray700: 'text-gray-700',
} as const;

export type TypographyVariant = keyof typeof variantClass;
export type TypographyWeight = keyof typeof weightClass;
export type TypographyColor = keyof typeof colorClass;


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