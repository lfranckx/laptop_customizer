import React, {Component} from 'react'
import Feature from '../Feature/Feature'

class FeaturesList extends Component {
    render() {
        // console.log(this.props.features)
        const features = Object.keys(this.props.features).map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Feature 
                    feature={feature}
                    features={this.props.features}
                    value={this.props.value}/>
                </fieldset>
            )
        })

        return (
            <div className="features-list">
                {features}
            </div>
        )
    }
}

export default FeaturesList