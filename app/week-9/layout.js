import { AuthProvider } from "./_utils/auth-context";

export default function Layout({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}
