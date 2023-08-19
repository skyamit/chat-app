import { useContext, useEffect, useRef, useState } from "react";
import FriendMessage from "./FriendMessage";
import MyMessage from "./MyMessage";
import { scrollToBottom } from "../common/CommonFunction";
import { DataContext } from "../App";

function Chat() {
    const messageContent = useRef(null);
    const [d, setD] = useState();
    const {phone,setPhone, data} = useContext(DataContext);
    const [msg, setMsg] = useState('');
    const [click, setClick] = useState(0);
    const [chatSetting,setChatSetting] = useState(false);
    const unsetPhone = ()=>{
        setPhone(null)
    }
    const send = ()=>{
        if(msg.length === 0) 
            return;
        data.contact.map((e)=>{
            if(e.phoneNo === phone) {
                e.msg.push({"isMine":true, "msg":msg});
            }
            return 0;
        });
        setMsg('');
        setClick((e)=>e+1);
    }
    const deleteChat = ()=>{
        data.contact.map((e)=>{
            if(e.phoneNo === phone) {
                e.msg = [];
            }
            return 0;
        });
        setClick((e)=>e+1);
        unsetPhone();
    }

    const changeSetChatSetting = ()=>{
        setChatSetting(!chatSetting);
    }
    useEffect(()=>{        
        const fetchD = async ()=> {
            await data.contact.map((x)=>{
                if(x.phoneNo === phone) {
                    setD(x);
                }
                return 0;
            });
        }
        fetchD();
        d && scrollToBottom(messageContent.current);
    },[phone,click,d, data.contact])
    return (
        <>
        { d && 
        <div className="chat">
            <div className="chat-content d-flex flex-column">
                <div className="chat-header">
                    <div className="chat-profile d-flex flex-row justify-content-between align-items-center">
                        <div className="chat-profile-content d-flex flex-row align-items-center">
                            <div className="picture">
                                <div className="picture-content">
                                    <img src={d.src} alt="..." className="img-profile" />
                                </div>
                            </div>
                            <div className="chat-profile-name conversation-text-content">
                                <h5>{d.name}</h5>
                            </div>
                        </div>
                        <div className="mr-1 chatSetting-parent">
                            <i className="fa-solid fa-bars fa-xl pointer" onClick={changeSetChatSetting}></i>
                            {
                                chatSetting && (
                                    <div className="border chatSetting prevent-select popout">
                                        <div className="border p-2 font-weight-bold pointer monospace" onClick={unsetPhone}>
                                            Close Chat
                                        </div>
                                        <div  className="border p-2 font-weight-bold pointer monospace" onClick={deleteChat}>
                                            Delete Chat
                                        </div>
                                        <div  className="border p-2 font-weight-bold disabled monospace">
                                            Block
                                        </div>
                                    </div>
                                )
                            }
                        </div>
                    </div>
                </div>
                <div className="message p-1" ref={messageContent}>
                    <div className="message-content">
                        {
                            d.msg.map((m, index)=>(
                                <>
                                {m.isMine && <MyMessage msg={m.msg} key={index}/>}
                                {!m.isMine && <FriendMessage msg={m.msg} key={index}/>}
                                </>
                            ))
                        }
                    </div>
                </div>
                <div className="message-input d-flex align-items-center">
                    <div className="message-input-content  d-flex flex-row align-items-center">
                        <i className="fa-regular fa-face-laugh fa-xl "></i>
                        <input value={msg} className="input message-input-box" name="message" type="text" placeholder="Type a message"
                        onChange={(e)=>{setMsg(e.target.value)}} />
                        <i className="fa-solid fa-paper-plane fa-xl"
                        onClick={send}></i>
                    </div>
                </div>
            </div>
        </div>
        }       
        </>
    )
}

export default Chat;