import styled from "styled-components";

type StyledProps = {
    $type?: 'gray' | 'white';
    $size?: 'sm' | 'md' | 'lg'; // md - 16px
};

const boxSizeStyles = {
    sm: '12px',
    md: '16px',
    lg: '20px',
};

export const Box = styled.div<StyledProps>`
    background-color: ${({$type}) => ($type === 'gray'? `var(--color-gray-100);` : `var(--color-common-white)`)};
    padding: ${({$size = 'md'}) => boxSizeStyles[$size]};
    border-radius: 12px;
`;