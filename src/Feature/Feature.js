import React, {Component} from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify';

class Feature extends Component {
    render() {
        console.log(this.props.features)
        const options = this.props.features.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(item)}
                  checked={item.name === this.state.selected[item].name}
                  onChange={e => this.updateFeature(item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({this.props.value.format(item.cost)})
                </label>
              </div>
            );
        })
        return (
            {options}
        )
    }
}

export default Feature