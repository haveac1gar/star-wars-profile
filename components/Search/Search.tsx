'use client';

import React, { ChangeEvent, useCallback, useMemo } from 'react';
import { useDebouncedCallback } from 'use-debounce';
import { Input } from 'antd';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';

import styles from './Search.module.css';

export function Search() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  const defaultValue = useMemo(
    () => searchParams.get('query')?.toString(),
    [searchParams],
  );
  const handleQueryChange = useDebouncedCallback((query: string) => {
    const params = new URLSearchParams(searchParams);
    if (query) {
      params.set('query', query);
    } else {
      params.delete('query');
    }

    params.set('page', '1');
    replace(`${pathname}?${params.toString()}`);
  }, 200);
  const onChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      handleQueryChange(event.target.value);
    },
    [handleQueryChange],
  );

  return (
    <div className={styles.searchWrapper}>
      <Input
        placeholder="Type Star Wars character here..."
        onChange={onChange}
        allowClear
        defaultValue={defaultValue}
        size="large"
      />
    </div>
  );
}
