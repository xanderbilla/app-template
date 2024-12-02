"use client";

import { useAuth } from "react-oidc-context";
import Loading from "./components/Loading";

function Home() {
  const auth = useAuth();

  const signOutRedirect = () => {
    const clientId = process.env.NEXT_PUBLIC_CLIENT_ID;
    const logoutUri = "http://localhost:3000";
    const cognitoDomain =
      process.env.NEXT_PUBLIC_COGNITO_DOMAIN;
    window.location.href = `${cognitoDomain}/logout?client_id=${clientId}&logout_uri=${encodeURIComponent(
      logoutUri
    )}`;
    auth.removeUser();
  };

  if (auth.isLoading) {
    return (
      <div className="h-[calc(100vh-14rem)] flex items-center justify-center">
        <Loading size="small" />
      </div>
    );
  }

  if (auth.error) {
    return (
      <div className="h-[calc(100vh-14rem)] flex items-center justify-center">
        <pre> Error: {auth.error.message} </pre>
      </div>
    );
  }

  if (auth.isAuthenticated) {
    return (
      <div className="h-[calc(100vh-14rem)] flex flex-col items-center justify-center gap-8">
        <table className="min-w-full bg-white shadow-md rounded-lg overflow-hidden">
          <tbody>
            <tr className="border-b">
              <td className="py-4 px-6 font-medium text-gray-900">Hello:</td>
              <td className="py-4 px-6 text-gray-700">
                {auth.user?.profile.email}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6 font-medium text-gray-900">ID Token:</td>
              <td className="py-4 px-6 text-gray-700">
                {auth.user?.id_token && auth.user.id_token.length > 60
                  ? `${auth.user.id_token.substring(0, 60)}...`
                  : auth.user?.id_token}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6 font-medium text-gray-900">
                Access Token:
              </td>
              <td className="py-4 px-6 text-gray-700">
                {auth.user?.access_token && auth.user.access_token.length > 60
                  ? `${auth.user.access_token.substring(0, 60)}...`
                  : auth.user?.access_token}
              </td>
            </tr>
            <tr className="border-b">
              <td className="py-4 px-6 font-medium text-gray-900">
                Refresh Token:
              </td>
              <td className="py-4 px-6 text-gray-700">
                {auth.user?.refresh_token && auth.user.refresh_token.length > 60
                  ? `${auth.user.refresh_token.substring(0, 60)}...`
                  : auth.user?.refresh_token}
              </td>
            </tr>
          </tbody>
        </table>
        <button
          className="bg-gray-900 text-white py-4 px-8 rounded-full font-medium text-2xl hover:bg-gray-700"
          onClick={() => signOutRedirect()}
        >
          Sign out
        </button>
      </div>
    );
  }

  return (
    <div className="h-[calc(100vh-14rem)] flex flex-col items-center justify-center gap-8">
      <button
        className="bg-gray-900 text-white py-4 px-8 rounded-full font-medium text-2xl hover:bg-gray-700"
        onClick={() => auth.signinRedirect()}
      >
        Sign In
      </button>
    </div>
  );
}

export default Home;