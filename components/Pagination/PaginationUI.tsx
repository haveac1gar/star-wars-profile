'use client';

import React, { useCallback } from "react";
import { Pagination as AntPagination } from 'antd';
import { usePathname, useSearchParams, useRouter } from "next/navigation";

import styles from './Pagination.module.css';

type PaginationUIProps = {
	current: number;
	total: number;
}

export function PaginationUI(props: PaginationUIProps) {
	const { current, total } = props;
	const searchParams = useSearchParams();
	const pathname = usePathname();
	const { replace } = useRouter();

	const onSearch = useCallback((page: number) => {
		const params = new URLSearchParams(searchParams);
		if (page) {
			params.set('page', `${page}`);
		} else {
			params.delete('page');
		}

		replace(`${pathname}?${params.toString()}`);
	}, [searchParams, pathname, replace])

	if (total === 0) return null;

	return (
		<AntPagination
			className={styles.pagination}
			align="center"
			defaultCurrent={current}
			total={total}
			showSizeChanger={false}
			onChange={onSearch}
		/>
	);
}
