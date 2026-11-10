import type { TagData } from '@/components/molecules/prodUnit/ProdUnit.tsx';

export const tag = {
    gift:   { text: '증정',    color: 'gray', type: 'solid' },
    coupon: { text: '쿠폰',    color: 'gray', type: 'solid' },
    today:  { text: '오늘드림', color: 'pink', type: 'solid' },
} satisfies Record<string, TagData>;