"use client";

import { AuthProvider } from "react-oidc-context";

const cognitoAuthConfig = {
  authority:
    process.env.NEXT_PUBLIC_AUTHORITY,
  client_id: process.env.NEXT_PUBLIC_CLIENT_ID,
  redirect_uri: "http://localhost:3000",
  response_type: "code",
  scope: "phone openid email",
};

export default function AuthProviderWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  return <AuthProvider {...cognitoAuthConfig}>{children}</AuthProvider>;
}
