import React, {Component} from 'react'
import Feature from '../Feature/Feature'

class FeaturesList extends Component {
    render() {
        const features = Object.keys(this.props.features)
        .map((feature, idx) => {
            const featureHash = feature + '-' + idx;
            console.log(feature, idx)
            // console.log(this.props.features[feature])
            return (
                <fieldset className="feature" key={featureHash}>
                    <legend className="feature__name">
                        <h3>{feature}</h3>
                    </legend>
                    <Feature 
                    name={feature}
                    feature={this.props.features[feature]}
                    selected={this.props.selected}
                    handleUpate={this.props.handleUpdate}
                    USPrice={this.props.USPrice}
                    />
                </fieldset>
            )
        })

        return (
            <div>
                {features}
            </div>
        )
    }
}

export default FeaturesList