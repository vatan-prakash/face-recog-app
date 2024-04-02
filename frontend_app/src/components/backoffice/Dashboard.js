import "../../css/Dashboard.css"
import { Menu } from "./Menu"

export const Dashboard = () => {

    return (
        <div className="container dashboard">
            <div className="row">
                <div className="col-lg-3 my-box left-side">
                    <Menu />
                </div>
                <div className="col-lg-9 right-side">
                    <div className="row">
                        Dashboard
                    </div>
                </div>
            </div>        
        </div>
    )
}