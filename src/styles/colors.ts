export const colorClass = {
	black: 'text-common-black',
	white: 'text-common-white',
	snbPink: 'text-snb-pink',
	gray900: 'text-gray-900',
	gray700: 'text-gray-700',
	gray600: 'text-gray-600',
	gray500: 'text-gray-500',
	gray300: 'text-gray-300',
	gray50: 'text-gray-50',
	coral600: 'text-brand-coral-600',
	green500: 'text-brand-green-500',
} as const;

export type Color = keyof typeof colorClass;