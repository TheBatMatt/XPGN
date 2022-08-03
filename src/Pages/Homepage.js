import React from 'react';
import Kotor from '../assets/images/kotor.jpg'

const Home = () => {
    return (

        <section id="homepage">

            <div id="featuredSection">
            <img className="featuredIMG"
                            src={Kotor}
                            alt="Kotor Feature"
                        />
            </div>

            <div id="genreSearch">
                <h2>Search By Genre</h2>
                <button>Horror</button>
                <button>Action</button>
                <button>Adventure</button>
                <button>RPG</button>
                <button>Open World</button>
                <button>FPS</button>
                <button>Simulation</button>
                <button>RTS</button>
                <button>Puzzle</button>
                <button>Sports</button>
                <button>Survival</button>
            </div>

    </section>
    )
}

export default Home;