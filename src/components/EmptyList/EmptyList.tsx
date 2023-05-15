import styles from './EmptyList.module.css';

const EMPTY_CONTENT = '...';

const EmptyList = () => {
  return <div className={styles.empty_list}>{EMPTY_CONTENT}</div>;
};

export default EmptyList;
