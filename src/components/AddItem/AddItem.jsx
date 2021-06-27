import { Fragment, useState } from 'react';
import { Col, Row } from 'antd';
import { useHistory } from 'react-router-dom';
import styles from './addItem.module.css';

function AddItem() {
  // eslint-disable-next-line no-unused-vars
  const [path, setPath] = useState('');
  let history = useHistory();
  const changePath = (path) => {
    return () => {
      setPath(path);
      history.push(`/ekle/${path}`);
    };
  };

  return (
    <Fragment>
      <Row className={styles.row}>
        <Col className={styles.col} span={24} onClick={changePath('kitap')}>
          <span>
            <i className="fas fa-plus"></i>
          </span>
          <span>Kitap Ekle</span>
        </Col>

        <Col className={styles.col} span={24} onClick={changePath('kelime')}>
          <span>
            <i className="fas fa-plus"></i>
          </span>
          <span>Kelime Ekle</span>
        </Col>
      </Row>
    </Fragment>
  );
}

export default AddItem;
