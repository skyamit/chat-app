import { useContext } from "react";
import { DataContext } from "../App";

function Profile(props) {
    const {setPhone} = useContext(DataContext);
    const setP = ()=>{
        setPhone(props.phone);
    }
    return (
        <>
        <div className="profile pointer p-1" onClick={setP}>
            <div className="profile-content d-flex flex-row">
                <div className="picture">
                    <div className="picture-content">
                        <img src={props.src} alt="..." className="img-thumbnail" />
                    </div>
                </div>
                <div className="name p-1 d-flex flex-column justify-content-center">
                    <div className="name-content">
                        {props.name}
                    </div>
                    <div className="last-message">
                        <div className="last-message-content">
                            {props.lastMsg}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default Profile;