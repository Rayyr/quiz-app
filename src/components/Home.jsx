import {useState} from 'react';
import App from './App.jsx';
import Admin from './Admin.jsx';

function Home(){

    const [view,setView]=useState('home');

    const viewHandler=(type)=>{

        setView(type);
    }

    const goHome = () => viewHandler('home');

    if(view==='user'){
        return  <App onGoHome={goHome}/>;
    }
    else if(view==='admin'){

        return  <Admin onGoHome={goHome}/>;
    }
    
    else if(view==='home') {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center vh-100 text-center">
             <h1 className="h3 text-white mb-4 text-center me-4">Home</h1>
        <div className="  d-flex align-items-center vh-100  justify-content-center">

        <button   type="button" className="btn btn-primary me-4"  onClick={()=>viewHandler('user')}>Log in as user</button>
        <button   type="button" className="btn btn-primary me-4" onClick={()=>viewHandler('admin')}>Log in as admin</button>
        </div>
        </div>

    );

    }
}

export default Home;