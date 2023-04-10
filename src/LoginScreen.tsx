import { signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import auth from ".";

interface Props {
    setShowLoginScreen: (show: boolean) => void;
    setUserId: (userId: string) => void;
}

const LoginScreen = (props: Props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { setShowLoginScreen, setUserId } = props;

    const signup = () => {
        signInWithEmailAndPassword(auth, email, password)
          .then(async (userCredential) => {
            const user = userCredential.user;
            setUserId(user.uid)
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
          });
    }
    
    return (
        <div className="min-h-screen bg-purple-400 flex justify-center items-center">
            <div className="absolute w-60 h-60 rounded-xl bg-purple-300 -top-5 -left-16 z-0 transform rotate-45 hidden md:block">
            </div>
            <div className="absolute w-48 h-48 rounded-xl bg-purple-300 -bottom-6 -right-10 transform rotate-12 hidden md:block">
            </div>
            <div className="py-12 px-12 bg-white rounded-2xl shadow-xl z-20">
                <div>
                    <h1 className="text-3xl font-bold text-center mb-4 cursor-pointer">Login to your Account</h1>
                    <p className="w-80 text-center text-sm mb-8 font-semibold text-gray-700 tracking-wide cursor-pointer">Login to your account for free!</p>
                </div>
                <div className="space-y-4">
                    <input onChange={(e) => setEmail(e.target.value)} type="text" placeholder="Email Addres" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                    <input onChange={(e) => setPassword(e.target.value)} type="text" placeholder="Password" className="block text-sm py-3 px-4 rounded-lg w-full border outline-none" />
                </div>
                <div className="text-center mt-6">
                    <button onClick={signup} className="py-3 w-64 text-xl text-white bg-purple-400 rounded-2xl">Sign In</button>
                </div>
            </div>
            <div className="w-40 h-40 absolute bg-purple-300 rounded-full top-0 right-12 hidden md:block"></div>
            <div
                className="w-20 h-40 absolute bg-purple-300 rounded-full bottom-20 left-10 transform rotate-45 hidden md:block">
            </div>
        </div>
    )
}

export default LoginScreen;