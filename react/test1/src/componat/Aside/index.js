import React from 'react'
import './styles.css'
import Item from '../Item'

function Aside() {
  return (
    <div class="container flex">
    <main role="main">
    <aside class="aside">
    <div class="widget-recent-posts widget-flex widget-border">
    <h2 class="widget-title"> Recent posts</h2>
      <Item></Item>
      <Item></Item>
      <Item></Item>
        </div>
    </aside>
    </main>
    </div>

  )
}

export default Aside
