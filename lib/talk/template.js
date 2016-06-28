import yo from 'yo-yo'

var template = yo`<section class="Talk row">
  <h1 class="Main-title hide-on-small-only">Classiccars.nyc</h1>
  <h5 class="Main-title hide-on-med-and-up">Classiccars.nyc</h5>
  <div class="Talk-map col s12 m12 l6">
    <div id="map"></div>
  </div>
  <div class="Talk-form col s12 m12 l6 right">
    <form class="col s12 m12 l12">
      <div class="row">
        <div class="input-field col s12 m12 l12">
          <input class="validate" type="text" placeholder="Name" id="name">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m12 l12">
          <input class="validate" type="email" placeholder="Email" id="email">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m12 l12">
          <input class="validate" type="text" placeholder="Subject" id="subject">
        </div>
      </div>
      <div class="row">
        <div class="input-field col s12 m12 l12">
          <textarea class="materialize-textarea" placeholder="Message" id="message"></textarea>
        </div>
      </div>
      <div class="row">
        <button class="btn waves-effect waves-light" type="submit" name="action">Send</button>
      </div>
    </form>
  </div>
  <p class="row s12 m12 l12 center-align">909 3RD AVE UNIT 6334 NEW YORK NY 10150 US<br>+1.3474182603<br>CHARLESINVESTMENTS@CLASSICCARS.NYC</p>
</section>`

export default template
