import React, { Component } from "react";
import api from '../../service/api'
import './styles.css'
export default class Main extends Component {
    state = {
        products: [],
        productInfo: {},
        page: 1,
    }
    componentDidMount() {
        this.loadItems();

    }
    loadItems = async (page = 1) => {
        console.log(page)
        const response = await api.get(`/products?page=${page}`);
        //console.log(response.data.docs);
        const { docs, ...productInfo } = response.data;
        //console.log(productInfo);
        this.setState({ products: docs, productInfo, page });
    };
    prevPag = () => {
        const { page} = this.state;
        if (page === 1) return;
        const pagNumber = page -1;
        this.loadItems(pagNumber);
    }
    nextPag = () => {
        const { page, productInfo } = this.state;
        if (page === productInfo.pages) return;
        const pagNumber = page + 1;
        this.loadItems(pagNumber);
    }
    render() {
        const { products,page,productInfo } = this.state;
        return (
            <div className="product-list">
                {products.map(product => (
                    <article key={product._id}>
                        <strong>{product.title}</strong>
                        <p>{product.description}</p>
                        <a href="">Acessar</a>
                    </article>
                ))}
                
                <div className="actions">
                <button disabled={page === 1} onClick={this.prevPag}>Back</button>
                <button disabled={page === productInfo.pages } onClick={this.nextPag}>Next</button>
                </div>
            </div>
        );
    }
}