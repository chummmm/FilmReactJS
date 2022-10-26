import Navigasi from './Navigasi';
import './style.css';

const Home = () => {
    return (
        <div id="home" className="head">
            <Navigasi />
            <div className='caption'>
                <h1 className='bg-dark rounded p-2 shadow'>NONTON GRATIS TAPI PAKET INTERNET BAYAR
                    <br></br>
                </h1>
            </div>
        </div>
    );
}

export default Home;