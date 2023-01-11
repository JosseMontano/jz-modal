import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Modal, UseModal } from '../.';

const App = () => {
  const { isShown, toggle } = UseModal({});
  return (
    <>
      <Modal
        hide={toggle}
        isShown={isShown}
        modalContent={<p>HELLO WORLD</p>}
      />
    </>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
