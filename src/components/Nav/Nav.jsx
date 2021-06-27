import { Col, Row } from 'antd';
import { NavLink } from 'react-router-dom';

import styles from './nav.module.css';

const aNavItems = [
  {
    name: 'Ana Sayfa',
    to: '/',
  },
  {
    name: 'Favoriler',
    to: '/favoriler',
  },
  {
    name: 'Profil',
    to: '/profil',
  },
  {
    name: 'Ekle',
    to: '/ekle',
  },
  {
    name: 'Kitaplarım',
    to: '/kitaplarim',
  },
];

const renderIcons = (name) => {
  switch (name) {
    case 'Ana Sayfa':
      return <i className="fas fa-home"></i>;

    case 'Favoriler':
      return <i className="fas fa-heart"></i>;

    case 'Ekle':
      return <i className="fas fa-plus"></i>;

    case 'Kitaplarım':
      return <i className="fas fa-book"></i>;

    default:
      return <i className="fas fa-user"></i>;
  }
};

function Nav() {
  const renderNavItems = aNavItems.map(({ name, to }) => (
    <NavLink to={to} key={to} activeClassName={styles.selected} exact>
      <div className={styles.button}>
        <span>{renderIcons(name)}</span>
        <div>{name}</div>
        <div className={styles.divider}></div>
      </div>
    </NavLink>
  ));
  return (
    <header>
      <Row>
        <Col span={24} className={styles.menu}>
          {renderNavItems}
        </Col>
      </Row>
    </header>
  );
}

export default Nav;
