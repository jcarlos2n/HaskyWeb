
import './Header.css'
import logo from "../../assets/prueb.png"

const Header = () => {

    return (
        <div className='headerBox'>
            <div className='logoBox'>
                <img className='logoHeader' src={logo} alt="Logo" />
                <h1>EL HASKY</h1>
            </div>
        </div>
    )

}

export default Header