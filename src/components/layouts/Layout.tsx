import React from "react";
import * as S from './Layout.styles.ts';
// 컴포넌트 import
import {
	Header,Footer // organisms
} from "@/components/index.ts";

type Props = {
	children?: React.ReactNode;
};

export const Layout = ({
	children
}:Props)=> {
	return (
		<>
			<Header />
			<S.Content>
				{children}
			</S.Content>
			<Footer />
		</>
	)
}