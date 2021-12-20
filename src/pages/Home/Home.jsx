import React from 'react';
import './Home.css';

const Home = () => {

    return(
        <div>
                <center><img src="https://www.cuny.edu/wp-content/uploads/sites/4/media-assets/skyline-1200x627_CUNY_Logo.jpg"/></center><br></br>

                <center><h1>Welcome to CUNY!</h1></center>

                <hr></hr>


            <div class="row">

                <div class = "column">
                <center>
                    <img src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/global/Student_Awards_891x891.jpg" width="600" height="500"></img>
                </center>
                    <hr class="goldDec"></hr>
                <div class= "columnAdj">
                
                </div>



                </div>

                <div class="column">

                <div class="columnAdj2">

                </div>

                <hr class="goldDec2"></hr>

                    <img src="https://www.cuny.edu/wp-content/uploads/sites/4/page-assets/global/25-Campuses_891x891.jpg" width="600" height="500"></img>

               </div>
            </div>
        </div>
     );
}

export default Home;
