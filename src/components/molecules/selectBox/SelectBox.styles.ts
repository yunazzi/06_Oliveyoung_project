import styled from "styled-components";

const downArrow = `${import.meta.env.BASE_URL}assets/icons/ic-down-arrow.svg`;

type StyledProps = {
    $type: 'def' | 'footer';
    $open: boolean;
}

export const SelectBox = styled.div<StyledProps>`
    position: relative;
    display: block;
    height: ${({ $type }) => ($type === 'def' ? '44px' : '32px')};

    .select-inner {
		position: relative;
        //position: absolute;
        //top: 0;
        //left: 0;
        width: 100%;
        z-index: ${({ $open }) => ($open ? 999 : 1)};
        background: var(--color-common-white);
        border: 1px solid ${({ $open }) => ($open ? 'var(--color-gray-900)' : 'var(--color-gray-300)')};
        border-radius: ${({ $type }) => ($type === 'def' ? '12px' : '8px')};
        overflow: hidden;
    }

    .select-btn {
        position: relative;
        display: block;
        width: 100%;
        text-align: left;
        cursor: pointer;
        border: 0;
        background: transparent;
        height: ${({ $type }) => ($type === 'def' ? '44px' : '30px')};
        padding: ${({ $type }) => ($type === 'def' ? '0 44px 0 12px' : '0 40px 0 8px')};
    }

    /* 화살표: 열리면 위로 회전 */
    .select-btn::after {
        content: '';
        position: absolute;
        top: 50%;
        right: ${({ $type }) => ($type === 'def' ? '12px' : '8px')};
        width: 24px;
        height: 24px;
        margin-top: -12px;
        background: url(${downArrow}) no-repeat center / 24px;
        transform: rotate(${({ $open }) => ($open ? '180deg' : '0deg')});
        transition: transform 0.2s;
    }

    .select-list {
        margin: 0;
        padding: 2px 12px 10px;
        list-style: none;
        max-height: 240px;
        overflow-y: auto;
    }

    .select-list li {
		+ li {
			padding-top: 12px;
		}
        cursor: pointer;
        color: var(--color-gray-900);
    }

    .select-list li:hover {
        font-weight: var(--font-weight-bold);
    }
`;