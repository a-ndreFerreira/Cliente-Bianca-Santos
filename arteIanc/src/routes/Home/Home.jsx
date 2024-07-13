
import './Home.css'

import eyeIanc from '../../assets/eyeIanc.png'

const Home = () => {
    return (
        <div className="container">
            <div className='divEyeIanc'>
                <img src={eyeIanc} alt="Deus Olho - Arte Ianc - Bianca Santos" />
            </div>
            <div className="arteiancdiv">
                <div className="arte-div">
                    Arte
                </div>
                <div className="ianc-div">
                    IA<span>N</span>C
                </div>
            </div>
        </div>
    )
}

export default Home