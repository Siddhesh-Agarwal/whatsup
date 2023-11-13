import { Timestamp } from "firebase/firestore";

// info in message is avatar, createdAt, id, name, text, uid and status
// status is either "sent", "delivered" or "read"  (default is "sent")
type MessageType = {
    avatar: string;
    createdAt: typeof Timestamp;
    id: string;
    name: string;
    text: string;
    uid: string;
    status: string;
};


export default MessageType;