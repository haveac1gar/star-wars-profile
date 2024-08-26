'use client';

import React, { useCallback, useMemo } from "react";
import { Input } from 'antd';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import styles from './Search.module.css';

const { Search: AntSearch } = Input;

export const Search = () => {
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const defaultValue = useMemo(() => searchParams.get('query')?.toString(), [searchParams])
	const onSearch = useCallback((searchText: string) => {
		const params = new URLSearchParams(searchParams);
		if (searchText) {
			params.set('query', searchText);
		} else {
			params.delete('query');
		}

		params.set('page', '1')
		replace(`${pathname}?${params.toString()}`);
	}, [searchParams, pathname, replace])

	return (
		<div className={styles.searchWrapper}>
			<AntSearch
				placeholder="Type Star Wars character here and press Enter"
				onSearch={onSearch}
				enterButton
				defaultValue={defaultValue}
				size="large"
			/>
		</div>
	);
}
