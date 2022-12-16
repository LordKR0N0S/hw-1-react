import ButtonStyles from './Button.module.css';

const Button = ({ btnOnChange, btnColor }) => {
  return (
    <button
      className={ButtonStyles.btn}
      onClick={() => btnOnChange()}
      style={{ border: `1px solid ${btnColor}` }}
    >
      Button
    </button>
  );
};

export default Button;
