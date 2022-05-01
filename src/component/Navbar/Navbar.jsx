import { GiHamburgerMenu } from "../../assets"
import { Button } from "../index"

export const Navbar = () => {
    return (
        <nav className="nav-box nav-div flex-row align-center justify-around">
            <div className="nav-section flex-row align-center justify-evenly">
                <Button 
                    className="hamburger display-none btn-border-none bg-transparent" 
                    icon={<GiHamburgerMenu className="icon-vr-align"/>}
                />
                    
                <a href="#">
                    <h1 className="title font-weight-4">
                        quiz <span className="sub-title">Cam</span>
                    </h1>
                </a>

                <div className="flex-row nav-cta-box nav-items-box align-center justify-evenly">
                    <a href="#">
                        <p className="nav-items">Dashboard</p>
                    </a>
                </div>
            </div>
        
            <div className="nav-link-items nav-link-box flex-row align-center justify-around">
                <a href="#">
                    <button className="btn btn-primary">Login</button>
                </a>
            </div>
        </nav>
    )
}