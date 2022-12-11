import ClientRoutes from "./components/ClientRoutes";
import SharedLayout from "./components/SharedLayout";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {
  return (
    <div className="App">
      <SharedLayout>
        <ClientRoutes />
      </SharedLayout>
      <ToastContainer />
    </div>
  );
}

export default App;
