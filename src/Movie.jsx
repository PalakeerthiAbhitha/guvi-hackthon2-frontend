import React from 'react'
import './App.css'
// import './booking.js'
function Movie() {
  return (
    <div>
         <div className="movie-container">
      <label>Pick a movie:</label>
      <select id="movie">
        <option value="10">Avengers: Endgame ($10)</option>
        <option value="12">Joker ($12)</option>
        <option value="8">Toy Story 4 ($8)</option>
        <option value="9">The Lion King ($9)</option>
      </select>
    </div>

    <ul className="showcase">
      <li>
        <div className="seat"></div>
        <small>N/A</small>
      </li>
      <li>
        <div className="seat selected"></div>
        <small>Selected</small>
      </li>
      <li>
        <div className="seat occupied"></div>
        <small>Occupied</small>
      </li>
    </ul>

    <div className="container">
        <div className="screen"></div>
        <div className="row1">
            <div className="column">
                
                <div className="row">
                  <span className="letter">L</span><span className="inactive_className"></span
                      >
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat">4</div>
                  <div className="seat">5</div>
                  <div className="seat">6</div>
                  <div className="seat">7</div>
                  <div className="seat">8</div>
                </div>
                
                  <span className="letter">-</span><span className="inactive_className"></span
                      >
              
          
                <div className="row">
                  <span className="letter">K</span><span className="inactive_className"></span
                      >
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat">4</div>
                  <div className="seat">5</div>
                  <div className="seat">6</div>
                  <div className="seat">7</div>
                  <div className="seat">8</div>
                </div>
                <div className="row">
                  <span className="letter">J</span><span className="inactive_className"></span
                      >
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat occupied">4</div>
                  <div className="seat occupied">5</div>
                  <div className="seat">6</div>
                  <div className="seat">7</div>
                  <div className="seat">8</div>
                </div>
                <div className="row">
                  <span className="letter">H</span><span className="inactive_className"></span
                      >
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat">4</div>
                  <div className="seat">5</div>
                  <div className="seat">6</div>
                  <div className="seat occupied">7</div>
                  <div className="seat occupied">8</div>
                </div>
                <div className="row">
                  <span className="letter">G</span><span className="inactive_className"></span>
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat">4</div>
                  <div className="seat">5</div>
                  <div className="seat">6</div>
                  <div className="seat occupied">7</div>
                  <div className="seat occupied">8</div>
                </div>
                <div className="row">
                  <span className="letter">F</span><span className="inactive_className"></span>
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat">4</div>
                  <div className="seat">5</div>
                  <div className="seat">6</div>
                  <div className="seat occupied">7</div>
                  <div className="seat occupied">8</div>
                </div>
                <div className="row">
                  <span className="letter">H</span><span className="inactive_className"></span>
                  <div className="seat">1</div>
                  <div className="seat">2</div>
                  <div className="seat">3</div>
                  <div className="seat">4</div>
                  <div className="seat">5</div>
                  <div className="seat">6</div>
                  <div className="seat occupied">7</div>
                  <div className="seat occupied">8</div>
                </div>
            </div>
            
            <div className="column">
                <div className="row" >
                  
                  <div className="seat">9</div>
                  <div className="seat">10</div>
                  <div className="seat">11</div>
                  <div className="seat">12</div>
                  <div className="seat">13</div>
                  <div className="seat">14</div>
                  <div className="seat">15</div>
                  <div className="seat">16</div>
                </div>
                
                <div className="row">
                  
                    <div className="seat">9</div>
                    <div className="seat">10</div>
                    <div className="seat">11</div>
                    <div className="seat">12</div>
                    <div className="seat">13</div>
                    <div className="seat">14</div>
                    <div className="seat">15</div>
                    <div className="seat">16</div>
                </div>
                <div className="row">
                  
                    <div className="seat">9</div>
                    <div className="seat">10</div>
                    <div className="seat">11</div>
                    <div className="seat">12</div>
                    <div className="seat occupied">13</div>
                  <div className="seat occupied">14</div>
                    <div className="seat">15</div>
                    <div className="seat">16</div>
                </div>
                <div className="row">
                  
                    <div className="seat occupied">9</div>
                  <div className="seat occupied">10</div>
                    <div className="seat">11</div>
                    <div className="seat">12</div>
                    <div className="seat">13</div>
                    <div className="seat">14</div>
                    <div className="seat">15</div>
                    <div className="seat">16</div>
                </div>
                <div className="row">
                 
                    <div className="seat">9</div>
                  <div className="seat">10</div>
                  <div className="seat">11</div>
                  <div className="seat occupied">12</div>
                  <div className="seat occupied">13</div>
                  <div className="seat">14</div>
                  <div className="seat">15</div>
                  <div className="seat">16</div>
                </div>
                <div className="row">
               
                    <div className="seat">9</div>
                    <div className="seat">10</div>
                    <div className="seat">11</div>
                    <div className="seat">12</div>
                    <div className="seat">13</div>
                    <div className="seat">14</div>
                    <div className="seat occupied">15</div>
                  <div className="seat occupied">16</div>
                </div>
                <div className="row">
                
                    <div className="seat">9</div>
                    <div className="seat">10</div>
                    <div className="seat">11</div>
                    <div className="seat">12</div>
                    <div className="seat">13</div>
                    <div className="seat">14</div>
                    <div className="seat">15</div>
                    <div className="seat">16</div>
                </div>
            </div>
          </div>
          </div>
     
  

    <p className="text">
      You have selected <span id="count">0</span> seats for a price of $<span
        id="total"
        >0</span
      >
    </p>
    </div>
  )
}

export default Movie