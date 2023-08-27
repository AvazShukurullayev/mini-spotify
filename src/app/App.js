// Adding Components
import Song from "../components/song/Song";
import Player from "../components/player/Player";

// Adding Styles
import "../styles/app.scss"

// Adding Data
import data from "../"

const App = () => {
    return (
        <div className="app">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <Song/>
                        <hr/>
                        <Player/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default App
