import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';

import './styles.css';

function Header() {
    return (
        <div>
            <header className="container-header">
                <h2>Header</h2>
                <div className="content-menu">
                    <Link to="/home"  className="buttons-menu">Home <FiChevronRight size={24} /></Link>
                    <Link to="/clients" className="buttons-menu">Cliente <FiChevronRight size={24} /></Link>
                    <Link to="/product" className="buttons-menu">Produtos <FiChevronRight size={24} /></Link>
                </div>
            </header>
        </div>
    );
};

export default Header;