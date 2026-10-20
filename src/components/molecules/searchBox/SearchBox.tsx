import {useState} from "react";
import * as S from './SearchBox.styles.ts'

// 컴포넌트 import
import {Input, Icon} from "@/components/index.ts";

type Props = {
	placeholder?: string;
}

export const SearchBox = ({
	placeholder,
}:Props) => {
	const [keyword, setKeyword] = useState('');

	return(
		<S.SearchBox>
			<Input
				type='search'
				placeholder={placeholder}
				value={keyword}
				onChange={(e) => setKeyword(e.target.value)}
			/>
			<Icon name='search' isButton iconColor='black' className='btn-search' />
		</S.SearchBox>
	)
}