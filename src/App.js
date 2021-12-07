import HomePage from './pages/guest/homepage';
import { ParallaxProvider } from 'react-scroll-parallax';

function App() {
    return (
        <ParallaxProvider>
            <HomePage />
        </ParallaxProvider>
    );
}

export default App;