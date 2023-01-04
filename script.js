const banner_help = `
██╗  ██╗███████╗██╗     ██████╗ 
██║  ██║██╔════╝██║     ██╔══██╗
███████║█████╗  ██║     ██████╔╝
██╔══██║██╔══╝  ██║     ██╔═══╝ 
██║  ██║███████╗███████╗██║     
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝                                                    
`;
const date_started = 1672791453512
let millis=Date.now()-date_started;
let seconds = Math.floor( millis/ 1000)
let minutes = Math.floor(seconds/60)
let hours=Math.floor(minutes/60)
let days=Math.floor(hours/24)
hours-=days*24
minutes-=hours*60
seconds-=minutes*60
const links_banner=`
██╗     ██╗███╗   ██╗██╗  ██╗███████╗
██║     ██║████╗  ██║██║ ██╔╝██╔════╝
██║     ██║██╔██╗ ██║█████╔╝ ███████╗
██║     ██║██║╚██╗██║██╔═██╗ ╚════██║
███████╗██║██║ ╚████║██║  ██╗███████║
╚══════╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝`
const about_banner = `
 ██████╗██╗  ██╗ █████╗  ██████╗ ████████╗██╗ ██████╗
██╔════╝██║  ██║██╔══██╗██╔═══██╗╚══██╔══╝██║██╔════╝
██║     ███████║███████║██║   ██║   ██║   ██║██║     
██║     ██╔══██║██╔══██║██║   ██║   ██║   ██║██║     
╚██████╗██║  ██║██║  ██║╚██████╔╝   ██║   ██║╚██████╗
 ╚═════╝╚═╝  ╚═╝╚═╝  ╚═╝ ╚═════╝    ╚═╝   ╚═╝ ╚═════╝                           
`;
const usr_banner = `
██╗   ██╗███████╗██████╗ 
██║   ██║██╔════╝██╔══██╗
██║   ██║███████╗██████╔╝
██║   ██║╚════██║██╔══██╗
╚██████╔╝███████║██║  ██║
 ╚═════╝ ╚══════╝╚═╝  ╚═╝
`;
const joke_banner = `
     ██╗ ██████╗ ██╗  ██╗███████╗
     ██║██╔═══██╗██║ ██╔╝██╔════╝
     ██║██║   ██║█████╔╝ █████╗  
██   ██║██║   ██║██╔═██╗ ██╔══╝  
╚█████╔╝╚██████╔╝██║  ██╗███████╗
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝
                        
`;
const date_banner = `
██████╗  █████╗ ████████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║  ██║███████║   ██║   █████╗  
██║  ██║██╔══██║   ██║   ██╔══╝  
██████╔╝██║  ██║   ██║   ███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                               
`;

const go_url = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = `_blank`;
  a.click();
};

const color = (clr, str) => {
  const colors = {
    blue: "#55f",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

const windowx = (url, windowName) => {
  newwindow = window.open(
    url,
    windowName,
    "left=700,top=10,height=400,width=600"
  );
  if (window.focus) {
    newwindow.focus();
  }
  return false;
};

async function typeSentence(sentence, eleRef, delay = 100) {
  const letters = sentence.split("");
  let i = 0;
  while(i < letters.length) {
    await waitForMs(delay);
    $(eleRef).append(letters[i]);
    i++
  }
  return (letters.length*100);
}


function waitForMs(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

// terminal
$("body").terminal(
  {
    // help
    help: function () {
      const help = $(`
        <span class="cmd">about</span> => my info
        <br>
        <span class="cmd">go [name]</span> => use to open url (try:<span style="color:aqua;" >go list</span>)
        <br>
        <span class="cmd">joke</span> => use to get random joke :)
        <br>
        <span class="cmd">ping</span> => use to check your internet connection...
        <br> 
        <span class="cmd">pwd</span> => use to check your path
        <br> 
        <span class="cmd">date</span> => use to know current date-time
        <br>
        <span class="cmd">cls</span> => clear or <span style="color:aqua;">(CTRL + C)</span>
        <br>
        `);
      const banner = `${color("green", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    // am
    about: async function () {
      let value1 = Math.floor(Math.random()*1000);
      const about = $(`
        <span>IGN : <span id="IGN${value1}"></span><span style="color:aqua;" id="Name${value1}"></span>)
        <br>
        Age : <span id="Age${value1}"></span>
        <br>
        Status : <span id="Status${value1}" style="color:aqua"></span>
        <br>
        Job: <span id="Job${value1}"></span>
        <br>
        Description : <span id="Description${value1}"></span><span style="color:aqua;" id="Description2${value1}"></span>.
        <br>
        Mail : <span style="color:aqua;" id="Mail${value1}"></span>
        <br>
        Reddit :<span style="color:aqua;" id="Reddit${value1}">  </span>(<span class="cmd">try:</span> go reddit)
        <br>
        Github : <span style="color:aqua;" id="Github${value1}">  </span>(<span class="cmd">try:</span> go github)</span>
        `,value1);
      typeSentence("Chaotic(","#IGN"+value1.toString());
      setTimeout(()=>{typeSentence("ryan", "#Name"+value1.toString());},900)
      setTimeout(()=>{typeSentence("13 years","#Age"+value1.toString());},1400);
      setTimeout(()=>{typeSentence("Alive","#Status"+value1.toString());},2300);
      setTimeout(()=>{typeSentence("Student","#Job"+value1.toString());},3100);
      setTimeout(()=>{typeSentence("I'm interested in ","#Description"+value1.toString());},3900);
      setTimeout(()=>{typeSentence("data science & machine learning","#Description2"+value1.toString());},5800);
      setTimeout(()=>{typeSentence("ryan.ryanabraham@gmail.com","#Mail"+value1.toString());},9000);
      setTimeout(()=>{typeSentence("ChaoticChaosTheGreat","#Reddit"+value1.toString());},11600);
      setTimeout(()=>{typeSentence("ChaoticChaosTheGreat","#Github"+value1.toString());},13700);
      
      const banner = `${color("gray", about_banner)}`;
      this.echo(banner);
      this.echo(about);
    },
    //cls
    cls: function () {
      location.reload();
    },
    //go
    go: function (web) {
      if (web == "github") {
        const github = `https://github.com/ChaoticChaosTheGreat`;
        go_url(github);
      } else if (web == "reddit") {
        const reddit = `https://www.reddit.com/user/ChaoticChaosTheGreat`;
        go_url(reddit);
      } else if (web=="replit") {
        const replit = `https://replit.com/@ChAoTiCChAoSThEGrEaT`
        go_url(replit)
      } else if (web=="list") {
        const list = $(`
        <span>
        <a href="https://github.com/ChaoticChaosTheGreat" target="_blank" style="color:darkred;text-decoration:none">[Github]</a> : ChaoticChaosTheGreat (<span style="color:aqua;">go github</span>)
        <br>
        <a href="https://www.reddit.com/user/ChaoticChaosTheGreat" target="_blank" style="color:darkred;text-decoration:none">[Reddit]</a> : ChaoticChaosTheGreat (<span style="color:aqua;">go reddit</span>)
        <br>
        <a href="https://replit.com/@ChAoTiCChAoSThEGrEaT" target="_blank" style="color:darkred;text-decoration:none">[Replit]</a> : ChAoTiCChAoSThEGrEaT (<span style="color:aqua;">go replit</span>)
        <br>
        <a href="https://stackoverflow.com/users/20816793/chaotic" target="_blank" style="color:darkred;text-decoration:none">[Stackoverflow]</a> : ChAoTiC (<span style="color:aqua;">go stack</span>) 
        </span>
        `);
        const banner = `${color("gray", links_banner)}`;
        this.echo(banner);
        this.echo(list);
      } else {
        this.echo(color("red", "err! try: go list"));
      }
    },
    //joke
    joke: function () {
      url = `https://icanhazdadjoke.com/slack`;
      this.echo(joke_banner);
      fetch(url)
        .then((response) => response.json())
        .then((key) => {
          const data = key;
          const joke = data.attachments[0].text;
          const ret = $(`<p><b><i>` + joke + `</i></b></p>`);
          this.echo(ret);
        });
    },
    // date
    date: function () {
      const date = new Date();
      const ret = $(`<p>` + date + `</p>`);
      this.echo(date_banner);
      this.echo(ret);
    },
    //ping
    ping: function () {
      const inet = navigator.onLine;
      if (inet == true) {
        const istat = `${color("green", "Connected to the internet...")}`;
        this.echo(istat);
      } else {
        const istato = `${color("red", "Disconnected?")}`;
        this.echo(istato);
      }
    },
    //pwd
    pwd: function () {
      const loc = location.href;
      const pwd = $(`<p>` + loc + `</p>`);
      this.echo(pwd);
    },
    // src
  },
  {
    greetings: `
██╗    ██╗███████╗██╗      ██████╗ ██████╗ ███╗   ███╗███████╗    OS: Ubuntu Linux x86_64
██║    ██║██╔════╝██║     ██╔════╝██╔═══██╗████╗ ████║██╔════╝    Host: System Product Name System Version
██║ █╗ ██║█████╗  ██║     ██║     ██║   ██║██╔████╔██║█████╗      Kernel: 7.12.1-108-tkg-bmq
██║███╗██║██╔══╝  ██║     ██║     ██║   ██║██║╚██╔╝██║██╔══╝      Uptime: ${days} days, ${hours} hours, ${minutes} minutes
╚███╔███╔╝███████╗███████╗╚██████╗╚██████╔╝██║ ╚═╝ ██║███████╗    Packages: 1501 (pacman)
 ╚══╝╚══╝ ╚══════╝╚══════╝ ╚═════╝ ╚═════╝ ╚═╝     ╚═╝╚══════╝    Shell: zsh
                    Hello! I am Ryan                              CPU: Intel i9-11900K (8) @ 4.1GHz
                Use help command to get help                      Memory: 6800MiB / 15944MiB (42%)
    `,
    prompt() {
      return `┌──(${color("blue", "chaotic")}${color("white", "@info")})-[${color(
        "blue",
        "~/"
      )}]
└─\$ `;
    },
    keymap: {
      "CTRL+C": function (e, original) {
        location.reload();
      },
    },
  }
);
