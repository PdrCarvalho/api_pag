import React,{Component} from "react";
import api from '../../service/api'

 export default class Main extends Component{
    state = {
        products : [],
    }
    componentDidMount(){
        this.loadItems();

    }
    loadItems = async ()=>{
        const response = await api.get('/products');
        console.log(response.data.docs);
        this.setState({products : response.data.docs});
        console.log(this.state.products)
    };
    render(){
        const {products}= this.state;
        return (
            <div className="product-list">
            {products.map(product =>(
                <article key= {product._id}>
                <strong>{product.title}</strong>
                <p>{product.description}</p>
                </article>
            ))}
            </div>
        );
    }
}