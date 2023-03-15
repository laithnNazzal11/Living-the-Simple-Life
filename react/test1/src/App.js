import logo from './logo.svg';
import './App.css';
import Header from './componat/Header'
import Footer from './componat/Footer';
import MainArticle from './componat/Body/MainArticle';
import ArticleRecent from './componat/ArticleRecent';
import Aside from './componat/Aside'
import Recentposts from './componat/Recentposts'



function App() {
  const l = [1,2,3]
  return (
    <>
    
    <div>
      <Header/>
  
    
    </div>
    
    <div className="all">
      <div className="container">
      <div className='left'>
      <MainArticle/>
      {
      l.map(()=>(
      <ArticleRecent/>

      )
      
      )
    }
      

      </div>
      <div className="rigth">
      <Recentposts/>
      <Aside/>
      </div>




    </div>  
    </div>

    <div className="footer">
      
     <Footer/>
    
    </div>

    </>
  );
}

export default App;
