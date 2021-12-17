import Head from 'next/head';
import { useMoralis } from 'react-moralis';
import Login from '../components/login';


export default function Home() {
  const { isAuthenticated, logout }= useMoralis();

  if(!isAuthenticated) return <Login />;
  return (
    <div className="h-screen py-2">
      <Head>
        <title>Meta</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center">
        <h1>Welcome to Meta 3.0</h1>
        <button onClick={logout}>Logout</button>
      </main>
    </div>
  )
}
