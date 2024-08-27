'use client';

import { EditOutlined, EnterOutlined } from '@ant-design/icons';
import { Input, InputProps } from 'antd';
import { ChangeEvent, useCallback, useState } from 'react';

import type { StrictOmit } from 'ts-essentials';
import styles from './EditableInput.module.css';

type EditableInputProps = StrictOmit<
InputProps,
'className' | 'onChange' | 'disabled' | 'onPressEnter' | 'suffix'
> & {
  onChange?: (text: string) => void;
};

export function EditableInput(props: EditableInputProps) {
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

  return (
    <Input
      className={styles.input}
      disabled={!editable}
      onChange={handleChange}
      onPressEnter={disableEdit}
      suffix={
        editable ? (
          <EnterOutlined onClick={disableEdit} />
        ) : (
          <EditOutlined onClick={enableEdit} />
        )
      }
      defaultValue={defaultValue}
      {...rest}
    />
  );
}
