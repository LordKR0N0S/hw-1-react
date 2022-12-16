import Logo from './components/Logo/Logo';
import Headerstyles from './Header.module.css';
import Button from '../../common/Button/Button';

const btnOnChange = () => {
  console.log(333);
};

const Header = () => {
  return (
    <header className={Headerstyles.block}>
      <div className={Headerstyles.body}>
        <div className={Headerstyles.logo}>
          <Logo />
        </div>
        <div className={Headerstyles.info}>
          <p>My name</p>
          <div>
            <Button btnOnChange={btnOnChange} btnColor='rgb(182, 36, 250)' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
