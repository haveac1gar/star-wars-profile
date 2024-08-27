import { memo } from "react";
import { Col, Skeleton } from "antd";

import styles from './CharacterItem.module.css';

const { Button: SkeletonButton } = Skeleton;

export const CharacterItemSkeleton = memo(() => {
	return (
		<Col span={12}>
			<SkeletonButton active block className={styles.card} />
		</Col>
	)
})

CharacterItemSkeleton.displayName = 'CharacterItemSkeleton';
