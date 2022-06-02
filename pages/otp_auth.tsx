import type { NextPage } from 'next'
import Layout from '../components/Layout'
import Nav from '../components/Nav'
import Link from 'next/link'
import OTPInput from '../components/OTPInput'
import { useEffect, useRef, useState } from 'react'
import Router from 'next/router'

const OTPAuth: NextPage = () => {
    const [otp, setOTP] = useState("");
    const [time, setTime] = useState(59);
    const timeRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    let email;

    if(typeof window !== 'undefined') {
        email = localStorage.getItem("email")
    }

    useEffect(() => {
        if(timeRef.current) clearTimeout(timeRef.current);
        timeRef.current = setTimeout(() => {
            if(time <= 0 && timeRef.current) clearTimeout(timeRef.current);
            else setTime(time-1);
        }, 1000);
    }, [time])

    const handleSubmit = () => {
        fetch('/api/otp_auth', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({ otp: otp })
            })
            .then(res => {
                Router.push('/profile');
        })
    }

    return (
        <div className="min-h-screen h-full bg-grayscale-50 font-font leading-6 text-secondary-base">
            <Layout title="OTP Authentication | Overpay">
                <Nav isSignedIn={false} />
                <div className="p-10 bg-grayscale-0 w-max mx-auto mt-[180px] rounded-lg">
                    <h1 className="font-extrabold text-3xl max-w-[430px] text-center leading-9">Verify your email</h1>
                    <p className="max-w-[430px] text-grayscale-600 mt-4 text-center font-medium">We have sent code to your email <span className="text-grayscale-900">{email}</span></p>
                    <OTPInput  
                        className="flex items-center justify-between w-[376px] mx-auto" 
                        length={5} 
                        onChangeOTP={setOTP} 
                        autoFocus={true} 
                        isNumberInput={true}
                        inputClassName="w-[62px] mt-10 border border-grayscale-300 text-grayscale-900 rounded-default p-4 text-center font-semibold text-2xl"
                        />
                    <button onClick={handleSubmit} className="w-full outline-none hover:bg-primary-400 active:bg-primary-base bg-primary-base text-center py-4 rounded-default mt-10 font-extrabold text-grayscale-0">Verify Account</button>
                    <div className="text-center mt-6">
                        <Link href="#"><a>Resend code in <span className="font-extrabold">{time === 0 ? <span>Resend</span> : `00:${time}`}</span></a></Link>
                    </div>
                </div>
                <div className="flex text-base leading-6 text-center text-grayscale-600 mt-[208px] mx-12 mb-12 justify-between">
                    <div>Privacy Policy</div>
                    <div>Copyright 2022</div>
                </div>
            </Layout>
        </div>
    )
}

export default OTPAuth