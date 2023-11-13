"use client";
import React, { useEffect, useRef, useState } from "react";
import {
    query,
    collection,
    orderBy,
    onSnapshot,
    limit,
} from "firebase/firestore";
import { Message } from "./Message";
import { SendMessage } from "./SendMessage";
import { auth, db } from "../firebase";
import MessageType from "../types/MessageType";
import { useAuthState } from "react-firebase-hooks/auth";
import { doc, updateDoc } from "firebase/firestore";

export const ChatBox = () => {
    const [user] = useAuthState(auth);
    const [messages, setMessages] = useState<MessageType[]>([]);
    const scroll = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const q = query(
            collection(db, "messages"),
            orderBy("createdAt", "desc"),
            limit(50)
        );

        const updateStoredMessages = async (Messages: MessageType[]) => {
            Messages.map(
                async (message: MessageType) => {
                    updateDoc(doc(db, "messages", message.id), { status: "read" });
                }
            );
        }

        const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
            const fetchedMessages: MessageType[] = [];
            QuerySnapshot.forEach((doc) => {
                fetchedMessages.push({ ...doc.data(), id: doc.id } as MessageType);
            });

            // console.log(fetchedMessages[0]);
            const sortedMessages = fetchedMessages.sort(
                (a, b) => (a.createdAt as any) - (b.createdAt as any)
            );

            // Change the status of the message to read
            sortedMessages.map(
                (message) => {
                    if (message.status !== "read" && !(user?.uid && message.uid === user.uid)) {
                        message.status = "read";
                    }
                }
            );

            // console.log(sortedMessages[0]);
            setMessages(sortedMessages);
            updateStoredMessages(sortedMessages);
        });
        return () => unsubscribe();
    }, [user]);

    // use tailwind to style the chatbox
    return (
        <main className="flex-1 flex flex-col justify-end p-4">
            <div className="min-h-full flex flex-col justify-end">
                {
                    messages?.map((message) => (
                        <Message key={message.id} message={message} />
                    ))
                }
            </div>
            <span ref={scroll}></span>
            <SendMessage scroll={scroll} />
        </main>
    );
}