'use client';

import { EditOutlined, EnterOutlined } from "@ant-design/icons";
import { InputNumber, InputNumberProps } from "antd";
import { KeyboardEvent, useCallback, useState } from "react";

import styles from './EditableInputNumber.module.css';
import { StrictOmit } from "ts-essentials";

type EditableInputNumberProps = StrictOmit<InputNumberProps, 'onChange' | 'disabled' | 'onKeyDown' | 'suffix'> & {
	onChange?: (text: string) => void;
}

export const EditableInputNumber = (props: EditableInputNumberProps) => {
	const { defaultValue, onChange, ...rest } = props;
	const [editable, setEditable] = useState(false)

	const enableEdit = useCallback(() => setEditable(true), [])
	const disableEdit = useCallback(() => setEditable(false), [])

	const handleKeyDown = useCallback((event: KeyboardEvent<HTMLInputElement>) => {
		if (event.key === 'Enter') {
			disableEdit()
		}
	}, [disableEdit]);

	const handleChange = useCallback((value: number | string | null) => {
		onChange?.(String(value))
	}, [onChange]);

	return (
		<InputNumber
			className={styles.input}
			// disabled={!editable}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
			suffix={editable ? <EnterOutlined onClick={disableEdit} /> : <EditOutlined onClick={enableEdit} />}
			defaultValue={Number(defaultValue)}
			{...rest}
		/>
	)
}