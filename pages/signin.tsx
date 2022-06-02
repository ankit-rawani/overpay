import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import Router from 'next/router'

const SignIn: NextPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () =>{
    fetch('/api/signin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({ username: username, password: password })
    })
    .then(res => res.json())
    .then(res => {
      if(typeof window !== 'undefined') {
        localStorage.setItem("name", res.name);
        Router.push('/profile');
      }
    })
  }

  return (
    <div>
      <Layout title="Sign in | Overpay">
        <div className="flex items-center justify-between">
          <div className="w-full h-full min-h-[1024px]">
            <div className="mt-12 ml-12">
              <Image src="/images/logo.png" height={32} width={149} alt="logo" />
            </div>
            <div className="w-[427px] font-font mx-auto mt-36">
              <h1 className="text-3xl font-extrabold leading-10 text-center text-grayscale-900">Sign in to Overpay</h1>
              <p className="text-base leading-6 text-center text-grayscale-600 mt-4">Send, spend and save smarter</p>
              <button className="w-full text-grayscale-900 border border-grayscale-300 py-4 mt-10 rounded-default outline-none active:bg-grayscale-300">
                <p className="flex items-center w-max mx-auto">
                  <Image src="/images/google.png" height={22} width={22} alt="Google" /> 
                  <span className="ml-2">Sign in with Google</span>
                </p>
              </button>
              <div className="flex items-center justify-between mt-6">
                <div className="min-w-[125px] w-full h-px bg-grayscale-300"></div>
                <p className="w-max px-3 whitespace-nowrap mx-auto text-base text-grayscale-600">Or with email</p>
                <div className="min-w-[125px] w-full h-px bg-grayscale-300"></div>
              </div>
              <input className="w-full mt-6 border border-grayscale-300 rounded-default p-4" type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username or email" />
              <input className="w-full mt-4 border border-grayscale-300 rounded-default p-4" type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
              <div className="flex mt-6 items-center justify-between">
                <div className="flex items-center"><input className="rounded-full h-5 w-5" id="rem-me" type="checkbox" /> <label className="ml-3 font-semibold leading-6" htmlFor="rem-me">Remember me</label></div>
                <div className="font-semibold leading-6 text-primary-base"><Link href="/forgot_password"><a>Forgot Password?</a></Link></div>
              </div>
              <button onClick={handleSubmit} className="w-full outline-none hover:bg-primary-400 active:bg-primary-base bg-primary-base text-center py-4 rounded-default mt-8 font-extrabold text-grayscale-0">Sign in</button>
              <div className="text-center mt-8 font-medium leading-6">Don&apos;t have an account? <Link href="/signup"><a className="font-extrabold">Sign up</a></Link></div>
            </div>
            <div className="flex text-base leading-6 text-center text-grayscale-600 ml-12 mt-[156px] mr-12 justify-between">
              <div>Privacy Policy</div>
              <div>Copyright 2022</div>
            </div>
          </div>
          <div className="bg-primary-base h-[976px] w-[639px] text-grayscale-50 mr-6">
            <div className="pt-[224px] bg-[url('/images/pattern.png')] w-[639px] h-[976px]">
              <div className="overflow-x-hidden flex items-center w-[639px]">
                <div className="w-[639px] min-w-[639px] animate-[carousel_12s_ease-in-out_infinite]">
                  <div className="mx-auto w-max">
                    <Image height={389} width={477} src="/images/tile1.png" alt="Get better with money" />
                  </div>
                  <h2 className="text-center font-extrabold text-4xl leading-[44px] mt-[102px]">Get better with money</h2>
                  <p className="font-normal text-sm mt-5 mx-auto text-center min-w-[500px] w-8/12">
                    Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className="text-warning-base font-extrabold">$20</span> bonus when you receive qualifying direct deposits
                  </p>
                </div>
                <div className="w-[639px] min-w-[639px] animate-[carousel_12s_ease-in-out_infinite]">
                  <div className="mx-auto w-max">
                    <Image height={389} width={477} src="/images/tile1.png" alt="Get better with money" />
                  </div>
                  <h2 className="text-center font-extrabold text-4xl leading-[44px] mt-[102px]">Speady, Easy and Fast</h2>
                  <p className="font-normal text-sm mt-5 mx-auto text-center min-w-[500px] w-8/12">
                    Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a $20 bonus when you receive qualifying direct deposits
                  </p>
                </div>
                <div className="w-[639px] min-w-[639px] animate-[carousel_12s_ease-in-out_infinite]">
                  <div className="mx-auto w-max">
                    <Image height={389} width={477} src="/images/tile1.png" alt="Get better with money" />
                  </div>
                  <h2 className="text-center font-extrabold text-4xl leading-[44px] mt-[102px]">Get better with money</h2>
                  <p className="font-normal text-sm mt-5 mx-auto text-center min-w-[500px] w-8/12">
                    Overpay help you set saving goals, earn cash back offers, Go to disclaimer for more details and get paychecks up to two days early. Get a <span className="text-warning-base font-extrabold">$20</span> bonus when you receive qualifying direct deposits
                  </p>
                </div>
              </div>
              <div className="mt-8 flex items-center mx-auto w-max">
                <div className="rounded-full w-1.5 h-1.5 animate-[blob_12s_ease-in-out_infinite] bg-grayscale-50"></div>
                <div className="rounded-full w-1.5 h-1.5 animate-[blob_12s_3.4s_ease-in-out_infinite] bg-grayscale-50 ml-2"></div>
                <div className="rounded-full w-1.5 h-1.5 animate-[blob_12s_7.4s_ease-in-out_infinite] bg-grayscale-50 ml-2"></div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </div>
  )
}

export default SignIn