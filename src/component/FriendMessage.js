import { time_ago } from "../common/CommonFunction";

function FriendMessage(props) {
    return (
        <>
        <div className="friend-message d-flex justify-content-left">
            <div className="friend-message-content">
                {props.msg}
                <div className="time-ago d-flex justify-content-end">
                    <div className="time-ago-content">
                        {time_ago(props.time)}
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default FriendMessage;