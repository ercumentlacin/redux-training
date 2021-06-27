/* eslint-disable no-debugger */
import { PageHeader } from 'antd';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Form, Input, Button, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import { goBack } from '../../redux/actions/goBack';
import styles from './addBook.module.css';
import { useRef, useState } from 'react';
import { addBook, removeBook } from '../../redux/actions/book';
import { storageRef } from '../../firebase';

const onFinishFailed = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

function AddBook({ goBack, user: { uid } }) {
  let history = useHistory();
  const ref = useRef(null);
  const [image, setImage] = useState(null);
  const [oBookObj, setOBookObj] = useState({});

  const onFinish = (values) => {
    setOBookObj({
      ...values,
      imgId: image.uid,
    });
  };

  const normFile = (e) => {
    console.log('Upload event:', e);

    if (e.file.originFileObj) {
      setImage(e.file.originFileObj);
    }
  };

  const saveBook = () => {
    const uploadBook = storageRef
      .ref(`images/${uid + '/' + image.uid}`)
      .put(image);

    console.log(uploadBook);
    debugger;

    uploadBook.on(
      'state, changed',
      (snapshot) => {
        console.log(snapshot);
      },
      (error) => {
        console.log(error);
      },
      () => {
        storageRef
          .ref('images')
          .child(image.uid)
          .getDownloadURL()
          .then((url) => console.log(url));
      }
    );

    addBook(oBookObj);
  };

  const onButtonClick = () => {
    // `current` points to the mounted text input element
    ref.current.focus();
    console.log('hello');
  };

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
          name="kitapAdi"
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
    addBook: (book) => dispatch(addBook(book)),
    removeBook: (book) => dispatch(removeBook(book)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddBook);
