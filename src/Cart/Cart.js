import React, {Component} from 'react'
import Summary from '../Summary/Summary'
import './Cart.css'

class Cart extends Component {
    render() {
        return (
            <section className="main__summary">
                <h2>Your cart</h2>
                    <Summary 
                    selected={this.props.selected}
                    USPrice={this.props.USPrice}
                    />
            </section>
        )
    }
}

export default Cart