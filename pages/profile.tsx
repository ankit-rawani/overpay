import type { NextPage } from 'next'
import Router from 'next/router'
import Layout from '../components/Layout'
import Nav from '../components/Nav'

const Profile: NextPage = () => {
  let name: string | null = "";

  if(typeof window !== 'undefined') {
    name = localStorage.getItem("name")
  }

  const handleLogout = () => {
    if(typeof window !== 'undefined') {
      localStorage.clear();
      Router.push('/signin');
    }
  }
  return (
    <div className="min-h-screen h-full bg-grayscale-50 font-font leading-6 text-secondary-base">
        <Layout title="Profile | Overpay">
            <Nav isSignedIn={false} />
            <div className="p-10 bg-grayscale-0 w-max mx-auto mt-[180px] rounded-lg">
                <h1 className="font-extrabold text-3xl max-w-[430px] text-center leading-9">Hi, {name}!</h1>
                <p className="w-[430px] text-grayscale-600 mt-4 text-center">You&apos;re logged in. Well done!</p>
                <button onClick={handleLogout} className="w-full outline-none hover:bg-primary-400 active:bg-primary-base bg-primary-base text-center py-4 rounded-default mt-10 font-extrabold text-grayscale-0">Log out</button>
            </div>
            <div className="flex text-base leading-6 text-center text-grayscale-600 mt-[208px] mx-12 mb-12 justify-between">
                <div>Privacy Policy</div>
                <div>Copyright 2022</div>
            </div>
        </Layout>
    </div>
  )
}

export default Profile