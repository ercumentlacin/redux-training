import { auth, provider } from '../../firebase';
import styles from './login.module.css';

function Login({ userProps }) {
  const signIn = () => {
    auth
      .signInWithPopup(provider)
      .then(({ user }) =>
        userProps.fetchUsers({
          uid: user.uid,
          photo: user.photoURL,
          email: user.email,
          displayName: user.displayName,
        })
      )
      .catch((e) => console.error(e.message));
  };

  return (
    <section className={styles.wrapper}>
      <div className={styles.logo}>
        <img src="logo.png" alt="logo" />
      </div>

      <button onClick={signIn}>Sign In</button>
    </section>
  );
}

export default Login;
