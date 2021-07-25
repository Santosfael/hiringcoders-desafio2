import { useEffect } from "react";
import { useState } from "react";
import { v4 } from 'uuid';

import Header from "../../components/Header";
import Modal from "../../components/Modal";

import './styles.css';
type dataProduct = {
    id: string,
    name: string,
    description: string,
    valueProduct: string,
    valueProductSale: string,
    qtdProduct: string,
    typeProduct: string,
}

function Product () {
    const [ isModalVisible, setIsModalVisible] = useState(false);
    const [product, setProduct] = useState<dataProduct[]>([]);
    const [dataProduct, setDataProduct] = useState<dataProduct[]>([]);

    const [ name, setName ] = useState('');
    const [ description, setDescription ] = useState('');
    const [ valueProduct, setValueProduct ] = useState('');
    const [ valueProductSale, setValueProductSale ] = useState('');
    const [ qtdProduct, setQtdProduct ] = useState('');
    const [ typeProduct, setTypeProduct ] = useState("");

    function handleModal() {
        setIsModalVisible(true);
    };

    useEffect(() => {
        if(localStorage.getItem("@data-product")) {
            const dataLocal = localStorage.getItem("@data-product");
        if(dataLocal !== null){
            setDataProduct(JSON.parse(dataLocal));
            setProduct(JSON.parse(dataLocal));
        }
        }
    },[]);

    useEffect(() => {
        localStorage.setItem('@data-product', JSON.stringify(product));

        const dataLocal = localStorage.getItem("@data-product");
        if(dataLocal !== null){
            setDataProduct(JSON.parse(dataLocal));
        }
    },[product]);

    function handleSaveDataProduct() {
        const id = v4();
        setProduct([...product,
            {
                id,
                name,
                description,
                valueProduct,
                valueProductSale,
                qtdProduct,
                typeProduct,
            }]
        );

        setIsModalVisible(false);

        setName("");
        setDescription("");
        setValueProduct("");
        setValueProductSale("");
        setQtdProduct("");
        setTypeProduct("");
    };

    /*function handleEditproduct(id: string) {
        dataProduct.map((product) => {
            if(product.id === id) {
                setName(product.name);
                setDescription(product.description);
                setValueProduct(product.valueProduct);
                setValueProductSale(product.valueProductSale);
                setQtdProduct(product.qtdProduct);
                setTypeProduct(product.typeProduct);

                setIsModalVisible(true);
            }
        })
    }*/

    return (
        <div id="container-product">
            <Header />
            <div className="content-product">
                <div className="content-title-button">
                    <h1>Produtos</h1>
                    <button className="button-add" onClick={handleModal}>Adicionar</button>
                </div>
                <div className="content-table">
                    <table>
                        <tr>
                            <th>Nome</th>
                            <th>Valor</th>
                            <th>Valor com desconto</th>
                            <th>Quantidade</th>
                            <th></th>
                        </tr>
                        {
                            dataProduct.map(products => {
                                return (
                                    <tr className="content-tbody" key={products.id}>
                                        <td>{products.name}</td>
                                        <td>{products.description}</td>
                                        <td>{products.valueProduct}</td>
                                        <td>{products.qtdProduct}</td>
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
                                <h2>Adicionar Produto</h2>
                                <div className="container-input-product">
                                    <div className="content-data-products">
                                        <div className="content-inputs-product">
                                            <input 
                                                placeholder="Nome do Produto"
                                                value={name}
                                                onChange={(e)=>setName(e.target.value)}
                                            />
                                        </div>
                                        <div className="content-inputs-product">
                                            <input 
                                                placeholder="Descrição do Produto"
                                                value={description}
                                                type="text-area"
                                                onChange={(e)=>setDescription(e.target.value)}
                                            />
                                        </div>
                                        <div className="content-inputs-product">
                                            <input
                                                placeholder="Valor do Produto, Ex: 10,00"
                                                value={valueProduct}
                                                onChange={(e)=>setValueProduct(e.target.value)}    
                                            />
                                        </div>
                                        <div className="content-inputs-product">
                                            <input
                                                placeholder="Valor do Produto com desconto, Ex: 10,00"
                                                value={valueProductSale}
                                                onChange={(e)=>setValueProductSale(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                    <div className="content-address">
                                        <div className="content-inputs-product">
                                            <input 
                                                placeholder="Quantidade"
                                                value={qtdProduct}
                                                onChange={(e)=>setQtdProduct(e.target.value)}
                                            />
                                        </div>
                                        <div>
                                            <input 
                                                placeholder="Categoria, Ex: Livro"
                                                value={typeProduct}
                                                onChange={(e)=>setTypeProduct(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="container-buttons">
                                    <button
                                        onClick={handleSaveDataProduct} 
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

export default Product;