import stlyes from './EmptyList.module.css';

const EMPTY_CONTNET = '...';

const EmptyList = () => {
  return <div className={stlyes.empty_list}>{EMPTY_CONTNET}</div>;
};

export default EmptyList;
