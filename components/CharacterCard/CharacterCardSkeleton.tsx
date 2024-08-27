import SkeletonButton from 'antd/es/skeleton/Button';
import styles from './CharacterCard.module.css';

export function CharacterCardSkeleton() {
  return <SkeletonButton active block className={styles.skeleton} />;
}
