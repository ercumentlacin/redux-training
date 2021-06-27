/* eslint-disable react/no-unescaped-entities */
import { Col, Row } from 'antd';
import styles from './bookContainer.module.css';
function BookContainer() {
  return (
    <main className={styles.bookContainer}>
      <Row>
        <Col span={24}>
          <div className={styles.center}>
            <h1>
              BookReminder'a <br /> hoş geldin !
            </h1>
            <p>
              Okuduğun kitaplarda anlamını bilmediğin kelimeler ile
              karşılaşıyorsan doğru yerdesin.
            </p>
            <p>
              Haydi şimdi sen de anlamını bilmediğin kelimeleri ekleyerek
              BookReminder'ı kullanmaya başla !!
            </p>
          </div>
        </Col>
      </Row>
    </main>
  );
}

export default BookContainer;
