'use client';

import { EditOutlined, EnterOutlined } from "@ant-design/icons";
import { Input, InputProps } from "antd";
import { ChangeEvent, KeyboardEvent, useCallback, useState } from "react";

import styles from './EditableInput.module.css';
import { StrictOmit } from "ts-essentials";

type EditableInputProps = StrictOmit<InputProps, 'onChange' | 'disabled' | 'onKeyDown' | 'suffix'> & {
	onChange?: (text: string) => void;
}

export const EditableInput = (props: EditableInputProps) => {
	const { defaultValue, onChange, ...rest } = props;
	const [editable, setEditable] = useState(false)

	const enableEdit = useCallback(() => setEditable(true), [])
	const disableEdit = useCallback(() => setEditable(false), [])

	const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			disableEdit()
		}
	}, [disableEdit]);

	const handleChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
		onChange?.(event.target.value || '')
	}, [onChange]);

	return (
		<Input
			className={styles.input}
			disabled={!editable}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			suffix={editable ? <EnterOutlined onClick={disableEdit} /> : <EditOutlined onClick={enableEdit} />}
			defaultValue={defaultValue}
			{...rest}
		/>
	)
}