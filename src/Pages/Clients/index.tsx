import { useEffect } from "react";
import { useState } from "react";
import { v4 } from 'uuid';

import Header from "../../components/Header";
import Modal from "../../components/Modal";

import './styles.css';
type dataUser = {
    id: string,
    name: string,
    email: string,
    phone: string,
    cpf: string,
    street: string,
    numberHouse: string,
    district: string,
    city: string,
    state: string,
    zipcode: string,
    complement: string,
}

function Clients () {
    const [ isModalVisible, setIsModalVisible] = useState(false);
    const [client, setClient] = useState<dataUser[]>([]);
    const [dataClient, setDataClient] = useState<dataUser[]>([]);

    const [ name, setName ] = useState('');
    const [ email, setEmail ] = useState('');
    const [ phone, setPhone ] = useState('');
    const [ cpf, setCpf ] = useState('');
    const [ street, setStreet ] = useState('');
    const [ numberHouse, setNumberHouse ] = useState("");
    const [ district, setDistrict ] = useState('');
    const [ city, setCity ] = useState('');
    const [ state, setState ] = useState('');
    const [ zipcode, setZipcode ] = useState('');
    const [ complement, setComplement ] = useState('');

    function handleModal() {
        setIsModalVisible(true);
    };

    useEffect(() => {
        if(localStorage.getItem("@data-client")) {
            const dataLocal = localStorage.getItem("@data-client");
        if(dataLocal !== null){
            setDataClient(JSON.parse(dataLocal));
            setClient(JSON.parse(dataLocal));
        }
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('@data-client', JSON.stringify(client));

        const dataLocal = localStorage.getItem("@data-client");
        if(dataLocal !== null){
            setDataClient(JSON.parse(dataLocal));
        }
    },[client]);

    function handleSaveDataClient() {
        const id = v4();
        setClient([...client,
            {
                id,
                name,
                email,
                phone,
                cpf,
                street,
                numberHouse,
                district,
                city,
                state,
                zipcode,
                complement
            }]
        );

        setIsModalVisible(false);

        setName("");
        setEmail("");
        setPhone("");
        setCpf("");
        setStreet("");
        setNumberHouse("");
        setDistrict("");
        setCity("");
        setState("");
        setZipcode("");
        setComplement("");
    };

    /*function handleEditClient(id: string) {
        // eslint-disable-next-line no-use-before-define
        dataClient.map((client) => {
            if(client.id === id) {
                setName(client.name);
                setEmail(client.email);
                setPhone(client.phone);
                setCpf(client.cpf);
                setStreet(client.street);
                setNumberHouse(client.numberHouse);
                setDistrict(client.name);
                setCity(client.name);
                setState(client.name);
                setZipcode(client.name);
                setComplement(client.name);

                setIsModalVisible(true);
            }
        });
    }*/

    return (
        <div id="container-client">
            <Header />
            <div className="content-client">
                <div className="content-title-button">
                    <h1>Clientes</h1>
                    <button className="button-add" onClick={handleModal}>Adicionar</button>
                </div>
                <div className="content-table">
                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>E-mail</th>
                            <th>Contato</th>
                            <th></th>
                        </tr>
                        {
                            dataClient.map(clients => {
                                return (
                                    <tr className="content-tbody" key={clients.id}>
                                        <td>{clients.name}</td>
                                        <td>{clients.email}</td>
                                        <td>{clients.phone}</td>
                                        <td className="td-container-button">
                                            <button disabled>Editar</button>
                                        </td>
                                    </tr>
                                )
                            })
                        }
                    </table>
                </div>
                {
                    isModalVisible ?
                    <>
                        <Modal>
                            <div>
                                <h2>Adicionar Cliente</h2>
                                <div className="container-input-client">
                                    <div className="content-data-clients">
                                        <div className="content-inputs-client">
                                            <input 
                                                placeholder="Nome"
                                                value={name}
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="content-inputs-client">
                                            <input 
                                                placeholder="E-mail"
                                                value={email}
                                                onChange={(e)=>setEmail(e.target.value)}
                                            />
                                        </div>
                                        <div className="content-inputs-client">
                                            <input
                                                placeholder="Telefone"
                                                value={phone}
                                                onChange={(e)=>setPhone(e.target.value)}    
                                            />
                                        </div>
                                        <div className="content-inputs-client">
                                            <input
                                                placeholder="CPF"
                                                value={cpf}
                                                onChange={(e)=>setCpf(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="content-address">
                                        <div className="content-inputs-client">
                                            <input 
                                                placeholder="Rua"
                                                value={street}
                                                onChange={(e)=>setStreet(e.target.value)}
                                            />
                                        </div>
                                        <div className="container-number-zipcode">
                                            <div>
                                                <input 
                                                    placeholder="Numero" 
                                                    type="number"
                                                    value={numberHouse}
                                                    onChange={(e)=>setNumberHouse(e.target.value)}
                                                />
                                            </div>
                                            
                                            <div>
                                                <input 
                                                    placeholder="CEP: 00.000-000"
                                                    value={zipcode}
                                                    type="number"
                                                    onChange={(e)=>setZipcode(e.target.value)}
                                                />
                                        </div>
                                        </div>
                                        <div className="content-inputs-client">
                                            <input 
                                                placeholder="Complemento"
                                                value={complement}
                                                onChange={(e)=>setComplement(e.target.value)}    
                                            />
                                        </div>
                                        <div className="content-inputs-client">
                                            <input 
                                                placeholder="Bairro"
                                                value={district}
                                                onChange={(e)=>setDistrict(e.target.value)}
                                            />
                                        </div>
                                        <div className="content-inputs-client">
                                            <input 
                                                placeholder="Cidade"
                                                value={city}
                                                onChange={(e)=>setCity(e.target.value)}
                                            />
                                        </div>
                                        <div 
                                            className="content-inputs-client" style={{width:"10rem"}}>
                                            <input 
                                                placeholder="Estado: SP"
                                                value={state}
                                                onChange={(e)=>setState(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="container-buttons">
                                    <button
                                        onClick={handleSaveDataClient} 
                                        className="button-save"
                                    >
                                        Salvar
                                    </button>
                                    <button 
                                        onClick={() => setIsModalVisible(false)} 
                                        className="button-cancel"
                                    >
                                        Cancelar
                                    </button>
                                </div>
                            </div>
                        </Modal>
                    </> : <></>
                }
            </div>
        </div>
    );
}

export default Clients;