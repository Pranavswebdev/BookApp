import './App.css';
import SideBar from './Components/Sidebar/SideBar';
import Footer from './Components/Footer/Footer';
import BookContent from './Components/BookContent/BookContent';

function App() {
  return (
    <div className="App">

      <SideBar />
      <BookContent />
      <Footer />

    </div>
  );
}

export default App;
