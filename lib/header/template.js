import yo from 'yo-yo'

var template = yo`<header class="Header">
  <nav class="Header-menu nav-wrapper">
    <div class="Header-left"><a class="Header-title brand-logo left" href="http://" target="_blank">Classiccars</a></div>
    <div class="Header-right">
      <ul class="Menu-list right">
        <li class="Menu-tiem"><a href="/">Home</a></li>
        <li class="Menu-tiem"><a href="/about-us">About us</a></li>
        <li class="Menu-tiem"><a href="/talk-to-us">Talk to us</a></li>
      </ul>
    </div>
  </nav>
</header>`

export default template
