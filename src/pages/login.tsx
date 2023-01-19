import Link from 'next/link';

export default function Login() {

  return (
    <>
      <main>
        <div className='h-screen flex flex-col justify-center items-center'>
            <Link href="/">Back</Link>
            <form className='flex flex-col justify-center space-y-5'>
                <input type="text" id="username" name="username" />
                <input type="text" id="password" name="password" />
                <Link href="/" className='border-2 rounded-sm'>Login</Link>
            </form>
            <Link href="/register" className='border-2 rounded-sm'>Register</Link>
        </div>
      </main>
    </>
  )
}