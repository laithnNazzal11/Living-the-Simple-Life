import React from 'react'
import './styles.css'

function ArticleRecent() {
  return (

    <div class="container flex">
        <main role="main">
            

            <article className="article-recent">
                <div class="article-recent-main">
                    <h2 class="article-title"> Keep cooking simple</h2>
                    <p class="article-body">Food is a very important part of everyone's life. If you want to be healthy, you have to eat healthy. One of the easiest ways to do that is to keep your cooking nice and simple.</p>
                    <a href="" class="article-read-more">CONTINUE READING</a>

                </div>
                <div className="article-recent-secondory">
                    <img src="food.jpg" alt="" class="article-image"/>
                    <p class="article-info">July 12, 2019 | 3 comments                    </p>
                </div>
            </article>
    </main>
    </div>

  )
}

export default ArticleRecent
