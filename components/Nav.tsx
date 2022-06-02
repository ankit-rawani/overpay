import Image from "next/image"

const Nav = ({isSignedIn} : {isSignedIn: boolean}) => {
    return (
    <nav className="w-full py-6 bg-grayscale-900 flex items-center justify-between">
        <div className="ml-12">
            <Image src="/images/logo-darkmode.png" alt="logo" width={149} height={32} />
        </div>
        <button className="px-12 py-4 mr-8 font-extrabold leading-6 rounded-default bg-primary-base text-grayscale-50 outline-none">{!isSignedIn ? "Sign in": "Log out"}</button>
    </nav>
    );
}

export default Nav