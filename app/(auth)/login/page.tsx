import { LoginForm } from "./_components/loginForm";

export default async function LoginPage({
  searchParams,
}: {
  searchParams: Promise<{ next?: string }>;
}) {
  const params = await searchParams;
  const nextUrl = params.next || "/";

  return <LoginForm nextUrl={nextUrl} />;
}
