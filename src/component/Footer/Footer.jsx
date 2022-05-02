import {
    BsCodeSlash,
    AiOutlineGithub,
    AiFillLinkedin,
    AiOutlineTwitter,
    MdAlternateEmail
} from "../../assets";

export const Footer = () => {
    return (
        <footer className="footer-box flex-column justify-center align-center gap-2">
            <p>Made in <BsCodeSlash  className="icon-vr-align "/> by Rishi</p>
            <div className="footer-icons flex-row align-center gap-3">
                <a className="social-icon" href="https://github.com/sri-rishi/nakshatra-watch-ecomm">
                    <AiOutlineGithub />
                </a>
                <a className="social-icon" href="https://www.linkedin.com/in/rishi-srivastava-8311761b7/">
                    <AiFillLinkedin />
                </a>
                <a className="social-icon" href="https://twitter.com/sri26_rishi">
                    <AiOutlineTwitter />
                </a>
                <a className="social-icon" href="mailto:sririshi2612@gmail.com">
                    <MdAlternateEmail />
                </a>
            </div>
        </footer>
    )
}