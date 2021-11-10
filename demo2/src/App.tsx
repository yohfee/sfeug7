import React from 'react';
import { useMsal, AuthenticatedTemplate, UnauthenticatedTemplate } from '@azure/msal-react';

function SignInButton() {
  const { instance } = useMsal();

  return <button onClick={() => instance.loginPopup()}>Azure ADでログイン</button>
};

function SignOutButton() {
  const { instance } = useMsal();

  return <button onClick={() => instance.logoutPopup()}>ログアウト</button>
};

function WelcomeUser() {
  const { accounts } = useMsal();

  if (accounts.length === 0) {
    return null;
  }

  return <p>Welcome, {accounts[0].username}</p>
}

function App() {
  return (
    <>
      <AuthenticatedTemplate>
        <SignOutButton />
        <WelcomeUser />
      </AuthenticatedTemplate>

      <UnauthenticatedTemplate>
        <SignInButton />
      </UnauthenticatedTemplate>
    </>
  );
}

export default App;