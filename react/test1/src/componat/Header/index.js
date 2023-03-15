import React from 'react'
import './styles.css'

function index() {
  return (
    <header>
        <div class="container container-nav">
        <div class="site-title">
            <h1>Living the socail life</h1>
            <p class="subtitle">A blog exploring minmallas in life</p>
        </div>

        <nav>
            <ul class="nav-list">
                <li class="nav-list-items"><a href="index.html" class="nav-link">HOME</a></li>
                <li><a href="about-me.html">ABOUT ME</a></li>
                <li><a href="recent-posts.html">RECENT POST</a></li>

                
            </ul>
        </nav>
        </div>
    </header>

  )
}

export default index
