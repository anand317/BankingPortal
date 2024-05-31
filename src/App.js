
import './App.css';
import Header from './components/Header/Header';
import { createBrowserRouter,RouterProvider,Outlet } from 'react-router-dom';

import Body from './components/Body/Body';
import AddBeneficiary from './components/AddBeneficiary/AddBeneficiary';
import EditBeneficiary from './components/EditBeneficiary/EditBeneficiary';
import RemoveBeneficiary from './components/RemoveBeneficiary/RemoveBeneficiary';
import { Provider } from 'react-redux';
import beneficiaryStore from './utils/BenificiaryStore';
import ViewaddBenificiary from './components/ViewaddBenificiary/ViewaddBenificiary';

function App() {
  return (
    <Provider store={beneficiaryStore}>
         <div className="App">
            <Header/>
            <Outlet/>
       </div>
    </Provider>
     

    
  );
}



export const appRoute = createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Body/>
      },
      {
        path:'/AddBeneficiary',
        element:<AddBeneficiary/>
      },
      {
        path:'/EditBeneficiary',
        element:<EditBeneficiary/>
      },
      {
        path:'/RemoveBeneficiary',
        element:<RemoveBeneficiary/>
      },
      {
        path:'/ViewaddBenificiary',
        element:<ViewaddBenificiary/>
      }
    ]
  }
])


export default App;
