import { useContext, useEffect, useState } from "react";
import Header from "../common/Header";
import Profile from "./Profile";
import { DataContext } from "../App";

function Conversations() {
    const {data, isNewConversation, setIsNewConversation} = useContext(DataContext);
    const [search, setSearch] = useState('');

    const setIsNewConversationToTrue = ()=>{
        setIsNewConversation(true);
    }
    const setIsNewConversationToFalse =()=>{
        setIsNewConversation(false);
    }
    useEffect(()=>{
        console.log(search)
    },[search]);

    return (
        <div className="converstation">
            <div className="converstations">
                <Header name={data.name} src={data.src} />
                <div className="search p-1">
                    <div className="border search-content d-flex flex-row align-items-center p-1 m-1">
                        <i className="fa-solid fa-magnifying-glass"></i>
                        <input className="input search-input" name="search" type="text" placeholder="Search Conversations" 
                        onChange={(e)=>{setSearch(e.target.value)}}/>
                    </div>
                </div>
                {
                    !isNewConversation && (
                        <>
                            <div className="conversation-text d-flex flex-row justify-content-between">
                                <div className="conversation-text-content">
                                    CONVERSATIONS
                                </div>
                                <div className="conversation-add-btn">
                                    <i className="fa-solid fa-plus pointer" onClick={setIsNewConversationToTrue}></i>
                                </div>
                            </div>
                            <div className="profiles">
                                <div className="profiles-scroll" id="style-6">
                                    {
                                        data.contact && data.contact.map((d) => (
                                            d.name.toLowerCase().startsWith(search.toLowerCase()) && d.msg.length>0 && <Profile key={d.phoneNo} src={d.src} name={d.name} phone={d.phoneNo}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    )
                }
                {
                    isNewConversation && (
                        <>
                            <div className="conversation-text d-flex flex-row justify-content-between">
                                <div className="conversation-text-content">
                                    NEW CONVERSATION
                                </div>
                                <div className="conversation-add-btn">
                                    <i className="fa-solid fa-xmark pointer" onClick={setIsNewConversationToFalse}></i>
                                </div>
                            </div>
                            <div className="profiles">
                                <div className="profiles-scroll" id="style-6">
                                    {
                                        data.contact && data.contact.map((d) => (
                                            d.name.toLowerCase().startsWith(search.toLowerCase()) && d.msg.length===0 && <Profile key={d.phoneNo} src={d.src} name={d.name} phone={d.phoneNo}/>
                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    )
                }
                
            </div>
        </div>
    )
}


export default Conversations;