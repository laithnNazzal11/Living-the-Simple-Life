import React from 'react'
import './styles.css'



function MainArticle() {
  return (
<div class="container flex">
        <main role="main">
            <article class="article-fratured">
                <h2 class="article-title">Finding simplicity in life</h2>
                <img src="life.jpg" alt="" class="article-image"></img>
                <p class="article-info">July 23, 2019 | 3 comments</p>
                <p class="article-body"><span>Life can get complicated really quickly</span>, but it doesn't have to be! There are many ways to simplify your life, <a href=""> a few of which we've explored in the past</a>. This week we're taking a bit of a approach though, in how you can find simplicity in the life you already living.</p>
                <a href="" class="article-read-more">CONTINUE READING</a>

            </article>

            </main>

            </div>
  )
}

export default MainArticle
