import React, { useState } from "react";
import { auth, db } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import {FaPaperPlane} from "react-icons/fa6";

export const SendMessage = ({ scroll }: { scroll: React.RefObject<HTMLDivElement> }) => {
    const [message, setMessage] = useState("");

    const sendMessage = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (message.trim() === "") {
            alert("Enter valid message");
            return;
        }
        if (!auth.currentUser) {
            alert("You need to be logged in");
            return;
        }
        const { uid, displayName, photoURL } = auth.currentUser;
        await addDoc(collection(db, "messages"), {
            text: message,
            name: displayName,
            avatar: photoURL,
            createdAt: serverTimestamp(),
            uid,
            status: "delivered",
        });
        setMessage("");
        scroll.current?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <form onSubmit={(event) => sendMessage(event)} className="fixed w-full flex px-[30px] py-5 bottom-0 mx-0">
            <label htmlFor="messageInput" hidden className="">
                Enter Message
            </label>
            <input
                id="messageInput"
                name="messageInput"
                type="text"
                className="h-10 grow bg-white text-[#1c2c4c] text-base p-2.5 rounded-l-md border focus:border-b-cyan-200 focus:border-b focus:border-solid border-r-0"
                placeholder="Send Message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
            />
            <button type="submit" className="h-10 text-[#242443] border bg-[#7cc5d9] font-semibold px-3 py-[5px] rounded-[0_5px_5px_0] border-solid border-[#7cc5d9] focus:border-b-cyan-600 focus:border-b focus:border-solid hover:border-b-cyan-600 hover:border-b hover:border-solid">
                Send
                <FaPaperPlane className="inline-flex ml-2" />
            </button>
        </form>
    );
};
