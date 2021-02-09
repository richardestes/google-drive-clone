import {useState} from 'react'
import './App.css';
import Header from './components/header'
import Sidebar from './components/sidebar'
import FilesView from './components/filesView/FilesView'
import SideIcons from './components/sideIcons'
import GoogleDriveIcon from './media/016-drive.svg';
import {auth,provider} from './firebase';

function App() {
  const [user,setUser] = useState();
  
  const handleLogin = () => {
    if(!user){
      auth.signInWithPopup(provider).then((result)=>{
        setUser(result.user);
      })
    }
  }
  
  return (
    <div className="app">
      { /* if user is authenticated */
        user ? (
          <>
            <Header userPhoto={user.photoURL}/>
            
            <div className="app__main">
              <Sidebar />
              <FilesView />
              <SideIcons />
            </div>  
          </>
        ) : (
          <div className='app__login'>
            <img src={GoogleDriveIcon} alt="Google Drive"/>
            <button onClick={handleLogin}>Log in to Google Drive</button>
          </div>
        )
      }
      
      {/* No Auth: Log In */}
    </div>
  );
}

export default App;
