import * as S from './SelectBox.styles.ts';
import {useEffect, useRef, useState} from "react";
// import {Icon} from "@/components";

export type SelectOption = {
	label?: string;
	value?: string;
}

type Props = {
	title?: string;
	type?: 'def' | 'footer';
	options?: SelectOption[];
	onChange?: (value: string) => void;
	id?: string;
}

export const SelectBox = ({
	title,
	type = 'def',
	options = [],
	onChange,
	id,
}:Props) => {
	const [open, setOpen] = useState(false);
    const [selectedIdx, setSelectedIdx] = useState(0);
    const wrapRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClick);
        return () => document.removeEventListener('mousedown', handleClick);
    }, []);

	const handleSelect = (idx: number) => {
        const item = options[idx];
        setSelectedIdx(idx);
        setOpen(false);
        onChange?.(item.value ?? item.label ?? '');
    };

	return(
		<S.SelectBox ref={wrapRef} className="ui-select" $type={type} $open={open}>
			<div className="select-inner">
				<button
					id={id}
					type="button"
					className="select-btn"
					title={title}
					aria-haspopup="listbox"
					aria-expanded={open}
					onClick={() => setOpen((prev) => !prev)}
				>
					{options[selectedIdx]?.label}
				</button>
				{open && (
					<ul className="select-list" role="listbox">
						{options.map((item, idx) => (
							<li
								key={idx}
								role="option"
								aria-selected={idx === selectedIdx}
								className={idx === selectedIdx ? 'is-selected' : ''}
								onClick={() => handleSelect(idx)}
							>
								{item.label}
							</li>
						))}
					</ul>
				)}
			</div>
		</S.SelectBox>
	);
};