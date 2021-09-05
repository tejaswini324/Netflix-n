import React from 'react';
import '../Style/home.css';

class Home extends React.Component{
    render(){
        return(
            <div className="container" >
            <div className="header">
                <img src="logo1.jpg" alt="logo" className="img" />
                <span className="navbar">Home</span>
                <span className="navbar1">Series</span>
                <span className="navbar2">Movies</span>
                <span className="navbar3">Originals</span>
                <span className="navbar4">Recently Added</span>
                <span className="navbar5">My List</span>
                
                {/* svg for icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bibi-search" viewBox="0 0 16 16">
                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg>

                <span className="navbar6">KIDS</span>
                <span className="navbar7">DVD</span>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bibi-bell" viewBox="0 0 16 16">
                    <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zM8 1.918l-.797.161A4.002 4.002 0 0 0 4 6c0 .628-.134 2.197-.459 3.742-.16.767-.376 1.566-.663 2.258h10.244c-.287-.692-.502-1.49-.663-2.258C12.134 8.197 12 6.628 12 6a4.002 4.002 0 0 0-3.203-3.92L8 1.917zM14.22 12c.223.447.481.801.78 1H1c.299-.199.557-.553.78-1C2.68 10.2 3 6.88 3 6c0-2.42 1.72-4.44 4.005-4.901a1 1 0 1 1 1.99 0A5.002 5.002 0 0 1 13 6c0 .88.32 4.2 1.22 6z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bibi-caret-down-fill" viewBox="0 0 16 16">
                    <path d="M7.247 11.14 2.451 5.658C1.885 5.013 2.345 4 3.204 4h9.592a1 1 0 0 1 .753 1.659l-4.796 5.48a1 1 0 0 1-1.506 0z"/>
                </svg>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bibi-emoji-smile" viewBox="0 0 16 16">
                    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                    <path d="M4.285 9.567a.5.5 0 0 1 .683.183A3.498 3.498 0 0 0 8 11.5a3.498 3.498 0 0 0 3.032-1.75.5.5 0 1 1 .866.5A4.498 4.498 0 0 1 8 12.5a4.498 4.498 0 0 1-3.898-2.25.5.5 0 0 1 .183-.683zM7 6.5C7 7.328 6.552 8 6 8s-1-.672-1-1.5S5.448 5 6 5s1 .672 1 1.5zm4 0c0 .828-.448 1.5-1 1.5s-1-.672-1-1.5S9.448 5 10 5s1 .672 1 1.5z"/>
                </svg>

            </div>
        <div className="container">  
        <div class="container cont">
            <div className="row">
            <h4 className="h40">Trending Now</h4>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c1.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c2.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c3.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c7.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c5.jpg" alt="pics" className="post1"  />
            </div>
            </div>
        </div>

        <div class="container cont">
            <div className="row">
            <h4 className="h40">Watch It Again</h4>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c7.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c8.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c9.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c10.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c11.jpg" alt="pics" className="post1" />
            </div>
            </div>
        </div>

        <div class="container cont">
            <div className="row">
            <h4 className="h40">Popular on NetFlix</h4>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c10.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c14.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c5.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c8.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c9.jpg" alt="pics" className="post1"  />
            </div>
            </div>
        </div>

        <div class="container cont">
            <div className="row">
            <h4 className="h40">Continue Watching for Robert</h4>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c13.jpg" alt="pics" className="post1" />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c12.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c11.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c1.jpg" alt="pics" className="post1"  />
            </div>
            <div class="col-sm-12 col-md-4 col-lg-2 post">
                <img src="c2.jpg" alt="pics" className="post1"  />
            </div>
            </div>
        </div>
            </div>
            

            </div>
            
        )
    }
}

export default Home;