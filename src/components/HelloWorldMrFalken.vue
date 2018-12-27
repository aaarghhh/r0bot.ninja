<template>
  <pre ref="monitor" >
    <code>
      <div id="console" ref="console" v-bind:class="[!first ? 'toNext' : '', 'paragraph']" >
        <span  class="consoleline computerresponse writing" v-bind:key="index" v-for="(item, index) in myscanMap" >{{item}}</span>
         <transition name="fade">
            <span v-if="showinput" v-bind:class="[first ? 'toTop' : '', 'consoleline', 'hiddenconsole' ]"  id="input">guest@r0bot.ninja: {{typedText}}</span>
         </transition>
      </div>
    </code>
    <div>
      <input ref="myline"  class="myline" type="text" v-model="typedText" v-$model="typedText" @onchange="changedInput" v-focus autofocus />
    </div>
  </pre>

</template>

<script>
  /* eslint-disable */
  /* eslint-disable no-console */

  export default {
      name:"hello-world-mr-falken",
      data(){
          return {
              showinput:false,
              typedText: '',
              column:80,
              windowHeight: 0,
              lineHeight:22,
              first:true,
              lookingForResponse:null,
              myscanMap:new Array(),
          }
      },
      beforeCreate: function(){
          console.log("aaa");
      },

      computed: {
          numberOfLines: function(){
            return ((this.$refs.monitor.clientHeight)-120)/22
          },
          renderline: function(){
              var mytextRendered= ""
              for(let x=0;x<this.myscanMap.length; x++){
                  mytextRendered += this.myscanMap[x]+"\n"
              }
              mytextRendered += this.typedText
              return mytextRendered
          }
      },
      watch: {
          typedText: function (value) {
              console.log("pressed", value);
          }
      },
      methods:{
            changedInput:function(){
                console.log("changed")
            },
            checkCommand: function(command){
                console.log(this.myscanMap)
                if(command.length>0)
                    switch(command.trim().toLowerCase()){
                        case "forkme":case "5":
                            this.writeOnConsole(" Just opening a new tab with the github repo",100)
                            this.writeOnConsole(" Check if you ar blocking popups from this site.",400)
                            this.writeOnConsole(" ",800)
                            var self = this;
                            //setTimeout(function() { window.open("https://github.com/aaarghhh/r0bot.ninja", '_blank'); },2000);
                            setTimeout(function() { self.openNewTab("https://github.com/aaarghhh/r0bot.ninja"); },2000);
                            return true
                            break;

                        case "linkedin":case"1":
                            this.writeOnConsole(" Just opening a new tab for the Giacomo' profile",100)
                            this.writeOnConsole(" Check if you ar blocking popups from this site.",400)
                            this.writeOnConsole(" ",800)
                            var self = this;
                            setTimeout(function() { self.openNewTab ('https://www.linkedin.com/in/giacomogiallombardo/')  },2000);
                            return true
                            break;
                        case "info":case "2":
                            this.writeOnConsole("### INFO ####", 100)
                            this.writeOnConsole("I am a Software/Web Developer/Maker. My name is Giacomo Giallombardo and I live in Faenza. My previous experiences brought me to focus on IT security, Software Security Assesment and Penetration Testing. " +
                                "I developed a trusted solution for Android Devices Security called Cleanvir. " +
                                "I love programming in Python. " +
                                "During my career i developed some software using these languages:",200, true)
                            this.writeOnConsole(" ",3500)
                            this.writeOnConsole("- Python",3700)
                            this.writeOnConsole("- Javascript / jQuery / Vue",3800)
                            this.writeOnConsole("- Php",3900)
                            this.writeOnConsole("- C# , PowerShell / Aspx",4000)
                            this.writeOnConsole("- C, C (openGL)",4200)
                            this.writeOnConsole("- Java / Android SDK",4500)
                            this.writeOnConsole("- Perl",4800)
                            this.writeOnConsole("- Golang",4900)
                            this.writeOnConsole(" ",5000)
                            return true
                            break;

                        case "ls":
                            this.writeOnConsole(".", 100)
                            this.writeOnConsole("..", 200)
                            this.writeOnConsole(".history",300)
                            this.writeOnConsole(" ",400)
                            return true
                            break;

                        case "rm":
                            this.writeOnConsole("lol", 100)
                            this.writeOnConsole("Sr. Guest  you can't remove nothing",500)
                            this.writeOnConsole("..... this isn't DVWA",400)
                            this.writeOnConsole(" ",500)
                            return true
                            break;

                        case "whoami":
                            this.writeOnConsole("I don't know", 100)
                            this.writeOnConsole("WHO ARE YOU?", 300)
                            this.writeOnConsole(" ", 400)
                            this.lookingForResponse = "whoami"
                            return true
                            break;

                        case "contacts":case"4":
                            this.writeOnConsole("### CONTACTS ####", 100)
                            this.writeOnConsole("mail: giacomo@r0bot.ninja", 300)
                            this.writeOnConsole("tel: +39 347XXXXXXXX", 500)
                            this.writeOnConsole(" ", 700)
                            return true
                            break;

                        case "help":case"0":
                            this.writeOnConsole("0. Help ", 100)
                            this.writeOnConsole("1. Linkedin ", 200)
                            this.writeOnConsole("2. Info",400)
                            this.writeOnConsole("4. Contacts", 600)
                            this.writeOnConsole("5. Forkme", 800)
                            this.writeOnConsole(" ", 900)
                            return true
                            break;

                        default:
                            return false
                            break;
                    }

            },
            checkResponse: function(){
                switch(this.lookingForResponse){
                    case "whoami":
                        this.writeOnConsole("Hello "+this.typedText.trim(), 100)
                        this.writeOnConsole("Nice to meet you!", 200)
                        this.writeOnConsole("What can i do for you?", 300)
                        this.writeOnConsole(" ", 500)
                        this.writeOnConsole("Type help for commands.", 800)
                        this.writeOnConsole("Type help for commands.", 900)
                        this.lookingForResponse = null
                        return true
                        break;
                    default:
                        this.lookingForResponse = null
                        return false
                        break;
                }
            },
            openNewTab(url){
                let newTab = window.open("about:blank", 'newtab');
                newTab.location.href = url;
            },
            printBanner:function( mobile ){

                if(!mobile) {
                    this.first = false
                    this.writeOnConsole("_________________ ___.           __            .__            __        ", 100)
                    this.writeOnConsole("\\______   \\   _  \\\\_ |__   _____/  |_     ____ |__| ____     |__|____   ", 300)
                    this.writeOnConsole(" |       _/  /_\\  \\| __ \\ /  _ \\   __\\   /    \\|  |/    \\    |  \\__  \\  ", 500)
                    this.writeOnConsole(" |    |   \\  \\_/   \\ \\_\\ (  <_> )  |    |   |  \\  |   |  \\   |  |/ __ \\_", 700)
                    this.writeOnConsole(" |____|_  /\\_____  /___  /\\____/|__| /\\ |___|  /__|___|  /\\__|  (____  /", 900)
                    this.writeOnConsole("        \\/       \\/    \\/            \\/      \\/        \\/\\______|    \\/ ", 1100)
                    this.writeOnConsole(" ", 1300)
                    this.writeOnConsole(" ", 1400)
                    this.writeOnConsole("Welcome to Giacomo' site. ", 1600)
                    this.writeOnConsole("This is a simple website where you can't use the mouse in order to navigate it. Type \"help\" ( without quotes ) top get some available commands... Remember you are in 1982! ", 1800, true)
                    this.writeOnConsole(" ", 3500)
                    var self = this;
                    setTimeout(function () {
                        self.showinput = true
                    }, 5000)
                }else{
                    this.first = false
                    this.writeOnConsole("_________________ ___.           __   ", 100)
                    this.writeOnConsole("\\______   \\   _  \\\\_ |__   _____/  |_ ", 300)
                    this.writeOnConsole(" |       _/  /_\\  \\| __ \\ /  _ \\   __\\", 500)
                    this.writeOnConsole(" |    |   \\  \\_/   \\ \\_\\ (  <_> )  |  ", 700)
                    this.writeOnConsole(" |____|_  /\\_____  /___  /\\____/|__|  ", 900)
                    this.writeOnConsole("        \\/       \\/    \\/             ", 1100)
                    this.writeOnConsole("            .__            __         ", 1100)
                    this.writeOnConsole("       ____ |__| ____     |__|____    ", 1100)
                    this.writeOnConsole("      /    \\|  |/    \\    |  \\__  \\   ", 1100)
                    this.writeOnConsole("     |   |  \\  |   |  \\   |  |/ __ \\_ ", 1100)
                    this.writeOnConsole("  /\\ |___|  /__|___|  /\\__|  (____  / ", 1100)
                    this.writeOnConsole("  \\/      \\/        \\/\\______|    \\/  ", 1100)
                    this.writeOnConsole(" ", 1300)
                    this.writeOnConsole(" ", 1400)
                    this.writeOnConsole("Welcome to Giacomo' site. ", 1600)
                    this.writeOnConsole("This is a simple website where you can't use the mouse in order to navigate it. Due to the power of an UI designed in 1982 this site is really un-responsive so you will be redirected in Giacomo Linkedin profile in a few seconds. Come back using a real Personal Computer if you want to play with me....  ", 1800, true)
                    this.writeOnConsole(" ", 5500)
                    this.writeOnConsole(" ", 5800)
                    this.writeOnConsole(" ", 5900)
                    this.writeOnConsole("Bye Bye !!!!! ", 6500)
                    var self = this;
                    setTimeout(function() {  self.openNewTab ('https://www.linkedin.com/in/giacomogiallombardo/') },25000);
                    //var self = this;
                    //setTimeout(function () {
                    //    self.showinput = true
                    //}, 5000)

                }
            },
            writeOnConsole: function ( mytext , delay , trim=null ) {

                if (delay == null)
                    delay=0

                if(trim==null)
                    trim=false

                if(mytext.length >=this.column){
                  let mystring= mytext.substring(0, (this.column-1))
                  var self = this;
                  setTimeout(function(mystringx, trim) {

                      if(trim){
                          console.log("trimming")
                          mystringx = mystringx.trim()
                      }

                      self.myscanMap.push(mystringx)
                      console.log("linee",self.numberOfLines)
                      if(self.myscanMap.length>self.numberOfLines)
                          self.myscanMap.shift()
                  },delay, mystring, trim);
                  if(mytext.length>this.column){
                      if(mytext.substring(this.column-1).length>this.column) {
                          // sono nel caso che devo splittare la stringa
                          this.writeOnConsole(mytext.substring(this.column-1, mytext.length),delay+this.calculateDelay(mytext.substring(this.column-1, mytext.length)),trim)
                      }
                      else {
                          console.log("lunghezzaa",mytext.substring(this.column-1))
                          this.writeOnConsole(mytext.substring(this.column-1), delay+this.calculateDelay(mytext.substring(this.column-1)), trim)
                      }
                  }
                }
                else{

                  var self = this;
                  setTimeout(function(mystringx,trim) {

                      console.log("Qui",mystringx);

                      if(trim){
                          console.log("trimming")
                          mystringx = mystringx.trim()
                      }

                      self.myscanMap.push(mystringx)
                      if(self.myscanMap.length>self.numberOfLines)
                          self.myscanMap.shift()
                  },delay, mytext, trim);

                }
            },
            calculateDelay:function(inputString){

                return inputString.length*2
            }
      },

      mounted() {
          this.windowHeight = window.innerHeight
          this.$nextTick(() => {
              window.addEventListener('resize', () => {
                  //this.windowHeight = window.innerHeight
                  if(window.innerWidth <= 728)
                      this.lineHeight= 10
                  else
                      this.lineHeight= 22
              });
              window.addEventListener('keypress', (event) => {
                  if(this.typedText.length >= this.column) {
                      //impedisco di scrivere  più di 80 caratteri
                      event.preventDefault()
                  }
                  if(event.keyCode === 13)
                  {
                      if(this.lookingForResponse != null){
                          this.checkResponse()
                          this.typedText = ""
                      }
                      else {
                          if (this.typedText.trim() == "")
                              this.writeOnConsole("guest@r0bot.ninja: " + this.typedText)
                          else {
                              this.first = false
                              this.writeOnConsole("guest@r0bot.ninja: " + this.typedText)
                              this.writeOnConsole(" ")
                              if (!this.checkCommand(this.typedText)) {
                                  this.writeOnConsole("The command \"" + this.typedText + "\" doesn't exists !!!", 100)
                                  this.writeOnConsole(" ", 200)
                              }
                              console.log("cleared input")
                              this.typedText = ""
                              return true;
                          }// returning false will prevent the event from bubbling up.
                      }
                  }
                  else
                  {
                      return true;
                  }
              });
              /* forzare  il focus su l'hidden input */
              window.addEventListener("focus", (event) =>
              {
                  console.log(this.$refs["myline"])
              }, false);

              /* trappare tutti i click */
              window.addEventListener("click", (event) =>
              {
                  event.preventDefault()
              }, false);
              /* trappare tutti i click */
              window.addEventListener("mousedown", (event) =>
              {
                  event.preventDefault()
              }, false);
              /* trappare tutti i click */
              window.addEventListener("mouseup", (event) =>
              {
                  event.preventDefault()
              }, false);
              /* trappare il tasto destro e context menu */
              document.oncontextmenu = document.body.oncontextmenu = function() {return false;}
          })

          if( this.$currentViewport.label == "mobile" || this.$currentViewport.label == "tablet" ) {
              this.lineHeight= 18
              this.column = 40
              this.printBanner(true)

          }
          else {
              this.lineHeight= 22
              this.column = 80
              this.printBanner(false)
          }
      },
  }
</script>

<style>
  #myhiddentext{
    display:none;
  }
  .consoleline{
    display: block;
    width:100%;
  }
  #input{
    width:auto !important;
  }
  .myline{
    opacity:0;
    filter:alpha(opacity=0);
    width: 0;
    overflow: hidden;
    text-transform: uppercase;
  }
  #console p{
    margin:0px;
  }

  #input{
    margin-top: -45px;
  }

  .toTop{
    margin-top:40px !important;
  }

  #console {
    line-height: 22px;
    position: absolute;
    top: -90px;
  }

  .toNext{
    top: 0px !important;
  }

  .computerresponse{
     visibility: hidden;
     overflow: hidden;
  }

  .writing {
    visibility: visible;
    animation: reveal 2s steps(100, end);
  }

  @keyframes reveal {
    from {
      max-width: 0;
    }
    to {
      max-width: 100%;
    }
  }

  @media screen and (max-width:728px) {
    #wargames pre code{
      font-size: 18px !important;
    }
    #console {
      line-height: 18px !important;
    }
    #wargames pre code span:last-child:after{
      font-size:18px !important;
    }
    #input{
      margin-top: -30px;
    }
    #wargames pre{
      padding:1.5em 1.5em 1.5em 0.5em !important;
    }
  }

</style>
