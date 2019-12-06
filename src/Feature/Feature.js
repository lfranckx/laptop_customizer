import React, {Component} from 'react'
// Normalizes string as a slug - a string that is safe to use
// in both URLs and html attributes
import slugify from 'slugify'

class Feature extends Component {
    render() {
        const options = this.props.feature.map(item => {
            const itemHash = slugify(JSON.stringify(item));
            return (
              <div key={itemHash} className="feature__item">
                <input
                  type="radio"
                  id={itemHash}
                  className="feature__option"
                  name={slugify(item.name)}
                  checked={item.name === this.props.selected[this.props.name].name}
                  // onClick={e => this.props.handleUpdate(this.props.name, item)}
                  handleupdate={(name, item) => {this.props.handleupdate(name, item)}}
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