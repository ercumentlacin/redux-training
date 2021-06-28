/* eslint-disable no-debugger */
import { useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import firebase from 'firebase';
import { Form, Input, Button, Upload, PageHeader } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

import { goBack } from '../../redux/actions/goBack';
import { addBook, removeBook } from '../../redux/actions/book';
import db, { storageRef } from '../../firebase';
import styles from './addBook.module.css';

const onFinishFailed = (errorInfo) => {
  console.error('Failed:', errorInfo);
};

function AddBook({ goBack, user: { uid }, book, addBookFn }) {
  console.log('book', book);
  let history = useHistory();
  const ref = useRef(null);
  const [image, setImage] = useState(null);
  const [oBookObj, setOBookObj] = useState({});
  const [finish, setFinish] = useState(false);

  // kaydet butonu
  const onFinish = (values) => {
    setOBookObj({ ...values, imgId: image.uid, userId: uid, id: uuidv4() });
    setFinish(true);
  };

  // görsel yükle
  const normFile = (e) => {
    if (e.file.originFileObj) {
      setImage(e.file.originFileObj);
    }
  };

  const saveBook = () => {
    const uploadBook = storageRef
      .ref()
      .child(`images/${uid + '/' + image.uid}`)
      .put(image);

    uploadBook.on(
      'state, changed',
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');

        switch (snapshot.state) {
          case firebase.storage.TaskState.PAUSED: // or 'paused'
            console.log('Upload is paused');
            break;
          case firebase.storage.TaskState.RUNNING: // or 'running'
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.error(error);
      },
      () => {
        uploadBook.snapshot.ref.getDownloadURL().then((downloadURL) => {
          console.error('File available at', downloadURL);
        });
      }
    );
  };

  const onButtonClick = () => {
    ref.current.focus();
  };

  useEffect(() => {
    if (finish) {
      addBookFn(oBookObj);
      setFinish(false);
    }
  }, [finish]);

  useEffect(() => {
    if (book && book.length) {
      delete oBookObj['upload'];
      oBookObj['timestamp'] = firebase.firestore.FieldValue.serverTimestamp();

      const docRef = db
        .collection('users')
        .doc(oBookObj.userId)
        .collection('books')
        .doc(oBookObj.id);
      docRef.set(oBookObj);
    }
  }, [book]);

  return (
    <section className={styles.wrapper}>
      <PageHeader
        className="site-page-header"
        onBack={() => goBack(history)}
        title="Kitap Ekle"
        innerRef={ref}
        onClick={onButtonClick}
      />

      {/* kitap adı */}
      <Form
        className={styles.form}
        name="basic"
        labelCol={{
          span: 8,
        }}
        wrapperCol={{
          span: 16,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Form.Item
          label="Kitap Adı"
          name="bookName"
          rules={[
            {
              required: true,
              message: 'Lütfen bir kitap adı girin !',
            },
          ]}
        >
          <Input />
        </Form.Item>

        {/* görsel yükleme */}
        <Form.Item
          name="upload"
          label="Kitap Görseli"
          valuePropName="fileList"
          getValueFromEvent={normFile}
        >
          <Upload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
            listType="picture"
            maxCount={1}
          >
            <Button icon={<UploadOutlined />}>Click to upload</Button>
          </Upload>
        </Form.Item>

        {/* kaydet butonu */}
        <Form.Item wrapperCol={{ span: 24 }}>
          <Button
            className={styles.bookSaveButton}
            type="primary"
            htmlType="submit"
            block
            onClick={saveBook}
          >
            Kaydet
          </Button>
        </Form.Item>
      </Form>
    </section>
  );
}

const mapStateToProps = (state) => {
  return {
    goBack: state.goBack.goBack,
    book: state.book.book,
    user: state.user.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    goBack: (history) => dispatch(goBack(history)),
    addBookFn: (book) => dispatch(addBook(book)),
    removeBook: (book) => dispatch(removeBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
