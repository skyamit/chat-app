import { time_ago } from "../common/CommonFunction";

function MyMessage(props) {
    return (
        <>
        <div className="my-message d-flex justify-content-end">
            <div className="my-message-content">
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

export default MyMessage;