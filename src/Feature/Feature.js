import React, {Component} from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify'

class Feature extends Component {
    render() {
        // console.log(this.props.selected)
        console.log(this.props.feature)
        const options = this.props.feature.map(item => {
          console.log(item)
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(this.props.feature.name)}
                  checked={item.name === this.props.selected[this.props.name].name}
                  onChange={e => this.updateFeature(this.props.name, item)}
                />
                <label htmlFor={itemHash} className="feature__label">
                  {item.name} ({this.props.USPrice.format(item.cost)})
                </label>
              </div>
            );
        });
        return (
          <div>
            {options}
          </div>
        )
    }
}

export default Feature