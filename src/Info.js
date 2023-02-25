
const Info = () => {
    return ( 
        <div className="info">
            <div className="profile-pic">
                <img src="/images/profile-pic.jpg" alt="" />
            </div>
            <div className="name">
                <h2>Amadi Jerry</h2>
                <h5>Frontend Developer</h5>
                <p>jerryjeager.website</p>
            </div>
            <div className="contact">
                <a href="mailto: amadijerry823@gmail.com" target="_blank"><button className="email">
                        <img src="/images/Email-Icon.png" alt="" /> Email
                    </button></a>
                <a href="https://www.linkedin.com/in/amadi-jerry-b65b74245" target="_blank"><button className="linkedin">
                        <img src="/images/LinkedIn-Icon.png" alt="" /> LinkedIn
                    </button></a>
            </div>
        </div>

    );
}

export default Info;