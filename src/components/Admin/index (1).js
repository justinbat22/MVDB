import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { auth } from '../../firebase';
import { useAuth } from '../../hooks/useAuth';
import { useHomeFetch } from '../../hooks/useHomeFetch';
import AddMovieForm from '../AddMovieForm';
import Spinner from '../Spinner';
import { Wrapper, Title, Form, ErrorMsg, LogoutLink } from './Admin.styles';

// This page is not linked from anywhere in the site - it's only reachable
// by typing /admin directly. That's obscurity, not security: the real
// protection is the Firestore rule that requires a logged-in admin for
// any write, so even someone who finds this URL can't add movies without
// the admin email/password created in the Firebase console.
const Admin = () => {
  const { user, authLoading } = useAuth();
  const { addMovie } = useHomeFetch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const handleLogin = async event => {
    event.preventDefault();
    setSubmitting(true);
    setErrorMsg('');

    try {
      await signInWithEmailAndPassword(auth, email, password);
      setEmail('');
      setPassword('');
    } catch (err) {
      setErrorMsg('Incorrect email or password.');
    }
    setSubmitting(false);
  };

  const handleLogout = () => signOut(auth);

  if (authLoading) {
    return (
      <Wrapper>
        <Spinner />
      </Wrapper>
    );
  }

  if (!user) {
    return (
      <Wrapper>
        <Title>Admin Login</Title>
        <Form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Admin email"
            value={email}
            onChange={event => setEmail(event.currentTarget.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={event => setPassword(event.currentTarget.value)}
          />
          <button type="submit" disabled={submitting}>
            {submitting ? 'Logging in...' : 'Log In'}
          </button>
        </Form>
        {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      <Title>Add a Movie</Title>
      <AddMovieForm addMovie={addMovie} />
      <LogoutLink type="button" onClick={handleLogout}>
        Log out admin
      </LogoutLink>
    </Wrapper>
  );
};

export default Admin;
