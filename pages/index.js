import Head from 'next/head'
import Layout from '../components/Layout'

export default function Home() {
  return (
    <Layout title='Home'>
    <div className="min-h-screen py-0 px-2 flex flex-col justify-center items-center">

      <h1 className='text-xl text-red-900'>Welcome next js</h1>
    </div>
    </Layout>
  )
}
