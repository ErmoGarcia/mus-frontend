import Link from 'next/link';
export default function Register() {
    return (
        <div className='h-screen flex flex-col justify-center items-center'>
            <Link href="/">Back</Link>
            <form className='flex flex-col justify-center space-y-5'>
                <input type="text" id="username" name="username" />
                <input type="text" id="password" name="password" />
                <input type="text" id="confirm-password" name="confirm-password" />
                <Link href="/" className='border-2 rounded-sm'>Register</Link>
            </form>
            <Link href="/login" className='border-2 rounded-sm'>Login</Link>
        </div>
    )
}