import './App.css';
import Conversations from './component/Conversations';
import Chat from './component/Chat';
import { createContext, useEffect, useState } from 'react';
import NoChat from './component/NoChat';
const DataContext = createContext();

function App() {
  const [data, setData] = useState(require('./common/data.json'));
  const [phone, setPhone] = useState(null);
  const [isNewConversation, setIsNewConversation] = useState(false);
  useEffect(()=>{
  },[phone]);

  return (
    <DataContext.Provider value={{data,setData,phone,setPhone, isNewConversation, setIsNewConversation}} >
      <div className='app container fluid p-3'>
        <div className=' container border'>
          <div className="app-content d-flex flex-row row justify-content-between">
            <div className='app-conversation col col-12 col-xl-4 col-lg-4 col-md-12 col-sm-12 p-0'>
              <Conversations/>
            </div>
            <div className='col col-12 col-xl-8 col-lg-8 col-md-12 col-sm-12 p-0'>
              {phone && <Chat/>}
              {!phone && <NoChat/>}
            </div>
          </div>
        </div>
      </div>
    </DataContext.Provider>
  );
}

export default App;
export {DataContext} ;