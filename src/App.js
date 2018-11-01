import React, {Component} from 'react';
import CartHeader from './components/cartheader.js' ;
import CartFooter from './components/cartfooter.js';
import CartItems from './components/cartitems.js'
import InputForms from './components/forms.js'

class App extends Component {
    constructor(props){
        super(props)
        this.state={
            cartItemsList: [
                { id: 1, product: { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 }, quantity: 1 },
                { id: 2, product: { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 }, quantity: 2 },
                { id: 3, product: { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 }, quantity: 1 }
            ],
            products: [
                { id: 40, name: 'Mediocre Iron Watch', priceInCents: 399 },
                { id: 41, name: 'Heavy Duty Concrete Plate', priceInCents: 499 },
                { id: 42, name: 'Intelligent Paper Knife', priceInCents: 1999 },
                { id: 43, name: 'Small Aluminum Keyboard', priceInCents: 2500 },
                { id: 44, name: 'Practical Copper Plate', priceInCents: 1000 },
                { id: 45, name: 'Awesome Bronze Pants', priceInCents: 399 },
                { id: 46, name: 'Intelligent Leather Clock', priceInCents: 2999 },
                { id: 47, name: 'Ergonomic Bronze Lamp', priceInCents: 40000 },
                { id: 48, name: 'Awesome Leather Shoes', priceInCents: 3990 },
              ],
              name: '',
              quantity: 0,
              total: 0
        }
    }

    onSubmit = (e) => {
        e.preventDefault();
        var selectedItem = this.state.products.filter (
            (p) => {
                if (p.name === this.state.name){
                    return p.priceInCents
                        }
                    }
                    
        )
        let newItem = { 
            id: this.state.cartItemsList.length + 1, 
            product: selectedItem[0], 
            quantity: this.state.quantity
        }
        this.setState({
            cartItemsList: this.state.cartItemsList.concat(newItem),
            total: '$' + parseFloat(this.state.total + this.state.quantity * selectedItem[0].priceInCents/100)
        })
    }
  
    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }

    render() {
        var copyright = 2016

    return (
        <>
        <CartHeader />
        <CartItems cartItemsList={this.state.cartItemsList} total={this.state.total}/>
        <InputForms products={this.state.products} onSubmit={this.onSubmit} onChange={this.onChange}/>
        <CartFooter copyright={copyright}/>
        </>
    )
    }
  }
  
  export default App