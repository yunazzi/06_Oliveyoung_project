import React from "react";
import * as S from './Box.styles.ts';

type Props = {
    type?: 'gray' | 'white';
    size?: 'sm' | 'md' | 'lg';
    children?: React.ReactNode;
    className?: string;
}

export const Box = ({
    type = 'gray',
    size = 'md', // 16px
    children,
    className = 'mt-24',
}:Props) => {
    return (
        <S.Box $size={size} $type={type} className={className}>
            {children}
        </S.Box>
    )
}