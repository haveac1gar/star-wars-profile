'use client';

import { EditOutlined, EnterOutlined } from '@ant-design/icons';
import { Select, SelectProps } from 'antd';
import {
  ChangeEvent, useCallback, useMemo, useState,
} from 'react';

import type { StrictOmit } from 'ts-essentials';
import styles from './EditableTagInput.module.css';

type EditableTagInputProps = StrictOmit<
SelectProps,
| 'className'
| 'onChange'
| 'disabled'
| 'mode'
| 'suffixIcon'
| 'options'
| 'defaultValue'
| 'tokenSeparators'
> & {
  onChange?: (text: string) => void;
  defaultValue: string[];
};

export function EditableTagInput(props: EditableTagInputProps) {
  const { defaultValue, onChange, ...rest } = props;
  const [editable, setEditable] = useState(false);

  const enableEdit = useCallback(() => setEditable(true), []);
  const disableEdit = useCallback(() => setEditable(false), []);

  const handleChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      onChange?.(event.target.value || '');
    },
    [onChange],
  );
  const options = useMemo(
    () => defaultValue.map((el) => ({ id: el, label: el })),
    [defaultValue],
  );

  return (
    <div className={styles.wrapper}>
      <div className={styles.suffix}>
        {editable ? (
          <EnterOutlined onClick={disableEdit} />
        ) : (
          <EditOutlined onClick={enableEdit} />
        )}
      </div>
      <Select
        open={false}
        className={styles.select}
        disabled={!editable}
        onChange={handleChange}
        mode="tags"
        suffixIcon={null}
        tokenSeparators={[',']}
        options={options}
        defaultValue={options}
        {...rest}
      />
    </div>
  );
}
