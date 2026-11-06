import styled, {css} from "styled-components";

export type TagColor = 'gray' | 'black' | 'pink' | 'red' | 'white' | 'green' | 'def';

type StyledProps = {
    $size?: 'sm' | 'md' | 'lg' | 'xl';
    $type?: 'solid' | 'outline';
    $color?: TagColor;
};

const sizeStyles = {
	sm: {height:'24px', radius: '6px', padding: '0 8px'},
	md: {height:'28px', radius: '8px', padding: '0 8px'},
	lg: {height:'32px', radius: '8px', padding: '0 4px'},
	xl: {height:'36px', radius: '999px', padding: '0 16px'},
} as const;


const colorStyles = {
	solid: {
		gray: {
			bg: 'var(--color-gray-100)',
			border: 'var(--color-gray-100)',
			color: 'var(--color-gray-700)'
		},
		black: {
			bg: 'var(--color-common-black)',
			border: 'var(--color-common-black)',
			color: 'var(--color-common-white)'
		},
		pink: {
			bg: 'var(--color-gray-100)',
			border: 'var(--color-gray-100)',
			color: 'var(--color-snb-pink)'
		},
		red: {
			bg: 'var(--color-brand-coral-100)',
			border: 'var(--color-brand-coral-100)',
			color: 'var(--color-accent-red)'
		},
	},
	outline: {
		white: {
			bg: 'transparent',
			border: 'var(--color-common-white)',
			color: 'var(--color-common-white)',
		},
		green: {
			bg: 'transparent',
			border: 'var(--color-brand-green-500)',
			color: 'var(--color-brand-green-500)',
		},
		def: {
			bg: 'var(--color-common-white)',
			border: 'var(--color-gray-300)',
			color: 'var(--color-gray-900)',
		},
	},
} as const;

const getColorStyle = ({ $type, $color }: StyledProps) => {
    const palette: Record<string, { bg: string; border: string; color: string }> =
        $type === 'outline' ? colorStyles.outline : colorStyles.solid;

    const fallback = $type === 'outline' ? palette.def : palette.gray;
    const c = (($color && palette[$color]) || fallback);

    return css`
        background-color: ${c.bg};
        border: 1px solid ${c.border};
        color: ${c.color};
    `;
};

export const Tag = styled.span<StyledProps>`
	display: flex;
    align-items: center;
    justify-content: center;
	height: ${({$size = 'md'}) => sizeStyles[$size].height};
	border-radius: ${({$size = 'md'}) => sizeStyles[$size].radius};
	padding: ${({$size = 'md'}) => sizeStyles[$size].padding};
	${getColorStyle}
	
	> * {
		color: inherit;
	}
`;