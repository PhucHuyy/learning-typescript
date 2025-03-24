import { ToastContainer } from 'react-toastify';
import './App.css';
import CRUDStudentPage from './page/CRUDStudentPage';

import { PrimeReactProvider } from 'primereact/api';
import 'primereact/resources/themes/lara-light-cyan/theme.css';

function App() {
  return (
    <>
      <PrimeReactProvider>
        {/* <Test /> */}
        {/* <ShowListStudent /> */}
        <CRUDStudentPage />
        <ToastContainer />
      </PrimeReactProvider>
    </>
  );
}

export default App;
