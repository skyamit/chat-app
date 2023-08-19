function Header(props) {
    return (
        <>
        <div className="header d-flex flex-row justify-content-between align-items-center p-1">
            <div className="header-left d-flex flex-row align-items-center">
                <div className="picture">
                    <div className="picture-content">
                        <img src={props.src} alt="..." className="img-profile" />
                    </div>
                </div>
                <div className="header-right conversation-text-content">
                    <h6>{props.name}</h6>
                </div>
            </div>
            <div className="header-right">
                <i className="fa-solid fa-bars fa-xl pointer"></i>
            </div>
        </div>
        </>
    )
}

export default Header;