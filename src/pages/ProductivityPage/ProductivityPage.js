import './ProductivityPage.scss'
import Pommodoro from '../../components/Pommodoro/Pommodoro.js'
import Weather from '../../components/Weather/Weather.js'
import CurrentTime from '../../components/CurrentTime/CurrentTime.js'


export default function ProductivityPage() {
    return(
        <>
        <Weather/>
        <Pommodoro/>
        <CurrentTime/>
        </>
    )
}