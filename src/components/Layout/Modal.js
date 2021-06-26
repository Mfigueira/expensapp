import ReactDOM from 'react-dom';
import Card from './Card';
import Button from './Button';
import classes from './Modal.module.scss';

const Modal = ({ message, onConfirm }) =>
  ReactDOM.createPortal(
    <>
      <div className={classes.backdrop} onClick={onConfirm} />
      <Card className={classes.modal}>
        <h2>{message}</h2>
        <Button onClick={onConfirm}>Okay</Button>
      </Card>
    </>,
    document.getElementById('modals-root')
  );

export default Modal;
