import './checkbox.scss';

const Checkbox = ( { caption, isChecked, onChange }) => {
    return (
        <label className="checkbox">
          <input
            type="checkbox"
            className="checkbox-input"
            value=""
            onChange={onChange}
            checked={isChecked}
          />
          <span className="checkbox-custom"></span>
          {caption}
        </label>
      );
}

export default Checkbox;