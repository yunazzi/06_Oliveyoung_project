import React, {useState} from "react";
import * as S from './FoldingBox.styles.ts';
import {Icon} from "@/components";

export type FoldOption = {
	title?: React.ReactNode;
	children?: React.ReactNode;
}

type Props = {
	className?: string;
	foldList?: FoldOption[];
};

export const FoldingBox = ({
	className,
	foldList = [],
}:Props) => {
	const [openIndex, setOpenIndex] = useState<number | null>(null);

	const handleToggle = (idx: number) => {
		setOpenIndex(openIndex === idx ? null : idx); // 저장된 값에서 시작
	};

	return (
		<S.FoldingBox className={className}>
			<ul className="fold-list">
				{foldList.map((item,idx) => {
					const isOpen = openIndex === idx;

					return (
						<li className="fold-item" key={idx}>
							{/* 폴딩 헤더 */}
							<div className="fold-header">
								<div className="fold-title">
									{item.title}
								</div>
								<Icon
									name={isOpen? 'upArrow': 'downArrow'}
									isButton size={'md'}
									onClick={() => handleToggle(idx)}
								/>
							</div>
							{/* 폴딩 컨텐츠 */}
							{isOpen && (
								<div className="fold-content">
									{item.children}
								</div>
							)}
						</li>
					)
				})}
			</ul>
		</S.FoldingBox>
	)
}