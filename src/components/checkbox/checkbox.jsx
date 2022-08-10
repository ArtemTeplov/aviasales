import './checkbox.scss';

const Checkbox = ( {name, caption}) => {
    const handleChange = () => {};
    return (
        <label className="checkbox">
          <input
            name={name}
            type="checkbox"
            className="checkbox-input"
            value=""
            onChange={handleChange}
          />
          <span className="checkbox-custom"></span>
          {caption}
        </label>
      );
}

export default Checkbox;