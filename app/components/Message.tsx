import React from "react";
import { auth } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import Image from "next/image";
import MessageType from "../types/MessageType";
import { FaCheck, FaCheckDouble } from "react-icons/fa6"

export const Message = ({ message }: { message: MessageType }) => {
    const [user] = useAuthState(auth);
    function isAuthor() {
        return (user?.uid && message.uid === user.uid);
    }

    return (
        <div className={`flex flex-row items-center justify-start space-x-2 my-2 ${isAuthor() ? "flex-row-reverse" : "justify-start"}`}>
            <Image
                className="rounded-full my-3"
                src={message.avatar}
                alt="user avatar"
                width={40}
                height={40}
            />
            <div className={`flex flex-col mx-2 border rounded-xl shadow-md p-2 ${isAuthor() ? "bg-blue-500 rounded-br-none" : "bg-emerald-500 rounded-bl-none"}`}>
                <p className="font-semibold text-black">
                    {message.name}
                </p>
                <p className="text-gray-800">
                    {message.text}
                </p>
                {
                    isAuthor() &&
                    <span className="text-xs text-gray-400 relative flex bottom-0 right-0 w-full">
                        {
                            message.status !== "read" ? <FaCheck className="text-gray-900 bottom-0 right-0" /> : <FaCheckDouble className="text-gray-900" />
                        }
                    </span>
                }
            </div>
        </div>
    );
};
