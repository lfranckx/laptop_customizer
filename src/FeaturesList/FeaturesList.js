import React, {Component} from 'react'
import Feature from '../Feature/Feature'

class FeaturesList extends Component {
    render() {
        // console.log(this.props.features)
        const featuresList = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;

            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Feature 
                    feature={feature}
                    selected={this.props.selected}
                    // features={this.props.features}
                    USPrice={this.props.USPrice}/>
                </fieldset>
            )
        })

        return (
            <div className="features-list">
                {featuresList}
            </div>
        )
    }
}

export default FeaturesList