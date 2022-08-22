import './checkbox.scss';

const Checkbox = ( { text, isChecked, onChange }) => {
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
          {text}
        </label>
      );
}

export default Checkbox;