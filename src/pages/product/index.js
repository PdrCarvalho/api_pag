import React,{Component} from 'react';
import api from '../../service/api'
import "./styles.css"
import {Link} from "react-router-dom";
export default class Product extends Component{
    state = {
        product: {},
    }
    async componentDidMount(){
        const {id}= this.props.match.params;
        const response = await api.get(`/products/${id}`);
        this.setState({product:response.data});
    }
    render(){
        const {product}= this.state;
        return (
            <div>
            <div className ="productInfo">
            <h1>{product.title}</h1>
            <p>{product.description}</p>
            <p>
                URL: <a href={product.url}>{product.url}</a>
            </p>
            </div>
            <div className="actions2">
                <Link to="/">Back</Link>
            </div>
            </div>
        );
    }
} 