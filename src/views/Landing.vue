<template>
  <div class="landing">
    <h1 class="welcome-design fade-header"> Welcome to the Brewery Library</h1>
    <div class="margin">
        <router-link class="welcome-design fade-button" to="/home">Continue</router-link>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Landing extends Vue {
}
</script>

<style lang="css">

.landing {
    background-image: url('../assets/welcome.jpg');
    background-size: cover;
    background-attachment: fixed;   
    position:fixed;
    top:0px;
    bottom:0px;
    left:0px;
    right:0px;
}

.welcome-design {
    text-align: center;
    color: white;
    text-shadow: 2px 2px rgb(0, 0, 0);
}

.fade-header {
  margin-top: 220px;
  font-size: 30px;


  -webkit-animation: fadein 5s;
  -moz-animation: fadein 5s;
  -ms-animation: fadein 5s;
  -o-animation: fadein 5s;
  animation: fadein 5s;
}

.fade-button:hover {
  text-shadow: rgb(241, 217, 119) 1px 0 15px;
}

.margin {
    margin-top: 350px;
}

.fade-button {
  margin-top: 350px;
  font-size: 25px;
  text-decoration: none;


  -webkit-animation: fadein 12s;
  -moz-animation: fadein 12s;
  -ms-animation: fadein 12s;
  -o-animation: fadein 12s;
  animation: fadein 12s;
}

@keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Firefox < 16 */
@-moz-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Safari, Chrome and Opera > 12.1 */
@-webkit-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Internet Explorer */
@-ms-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}

/* Opera < 12.1 */
@-o-keyframes fadein {
    from { opacity: 0; }
    to { opacity: 1; }
}

</style>