import './ProductivityPage.scss';
import Pommodoro from '../../components/Pommodoro/Pommodoro.js';
import Weather from '../../components/Weather/Weather.js';
import CurrentTime from '../../components/CurrentTime/CurrentTime.js';
import NotesApp from '../../components/NotesApp/NotesApp.js';
import Quotes from '../../components/Quotes/Quotes.js';


export default function ProductivityPage() {
    return(
        <div className = "wholething">
        <h1 className = "bigHello">Hello, Jared.</h1>    
        <Quotes/>
        <Weather/>
        <div className = "thisthing">
        <Pommodoro/>
        <CurrentTime/>
        </div>
        <NotesApp/>
        
        </div>
    )
}