var fs = require("fs");
//-----------//
var json = "./databases/db.json";
var jsonDB = require(json);
//-----------//
const webcord = require("webcord");
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const rbxgamebuilder = require("./buildgame.js");

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", function(req, res) {
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/new", function(req, res) {
  var type = req.query.type;

  console.log(type);
  if (type == 1) {
    res.sendFile(__dirname + "/views/new.html");
  } else {
    res.send("Trello support coming soon!");
  }
});

app.get("/build", function(req, res) {
  console.log("Get /build");
  var apps = req.query.apps;
  //if (apps == 1) {
  var q1 = req.query.q1;
  var q2 = req.query.q2;
  var q3 = req.query.q3;
  var q4 = req.query.q4;
  var q5 = req.query.q5;
  var q6 = req.query.q6;
  var q7 = req.query.q7;
  var q8 = req.query.q8;
  var q9 = req.query.q9;
  var q10 = req.query.q10;

  var q1b = req.query.q1b;
  var q2b = req.query.q2b;
  var q3b = req.query.q3b;
  var q4b = req.query.q4b;
  var q5b = req.query.q5b;
  var q6b = req.query.q6b;
  var q7b = req.query.q7b;
  var q8b = req.query.q8b;
  var q9b = req.query.q9b;
  var q10b = req.query.q10b;

  var q1c = req.query.q1c;
  var q2c = req.query.q2c;
  var q3c = req.query.q3c;
  var q4c = req.query.q4c;
  var q5c = req.query.q5c;
  var q6c = req.query.q6c;
  var q7c = req.query.q7c;
  var q8c = req.query.q8c;
  var q9c = req.query.q9c;
  var q10c = req.query.q10c;

  var q1d = req.query.q1d;
  var q2d = req.query.q2d;
  var q3d = req.query.q3d;
  var q4d = req.query.q4d;
  var q5d = req.query.q5d;
  var q6d = req.query.q6d;
  var q7d = req.query.q7d;
  var q8d = req.query.q8d;
  var q9d = req.query.q9d;
  var q10d = req.query.q10d;

  var q1e = req.query.q1e;
  var q2e = req.query.q2e;
  var q3e = req.query.q3e;
  var q4e = req.query.q4e;
  var q5e = req.query.q5e;
  var q6e = req.query.q6e;
  var q7e = req.query.q7e;
  var q8e = req.query.q8e;
  var q9e = req.query.q9e;
  var q10e = req.query.q10e;

  var appName2 = req.query.appName2;
  var url2 = req.query.url2.replace("/", "//");

  var appName3 = req.query.appName3;
  var url3 = req.query.url3.replace("/", "//");

  var appName4 = req.query.appName4;
  var url4 = req.query.url4.replace("/", "//");

  var appName5 = req.query.appName5;
  var url5 = req.query.url5.replace("/", "//");

  var maincolor = req.query.maincolor;
  var secondcolor = req.query.seccolor;
  var name = req.query.name;
  var appName = req.query.appName;
  var url = req.query.hook;
  console.log(q1);
  function wait() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("resolved");
      }, 5000);
    });
  }
  //------//
  function check(urlinternal) {
    var newKey = Math.random()
      .toString(36)
      .substr(2, 5);

    if (jsonDB.hasOwnProperty(newKey)) {
      check(urlinternal);
    } else {
      jsonDB[newKey] = `${urlinternal}`;
      fs.writeFileSync(json, JSON.stringify(jsonDB));
      return "https://modernapp-canary.glitch.me/app?url=" + newKey;
    }
  }

  if (url !== "") {
    var newUrl = check(url);
  }
  if (url2 !== "") {
    var newUrl2 = check(url2);
  }
  if (url3 !== "") {
    var newUrl3 = check(url3);
  }
  if (url4 !== "") {
    var newUrl4 = check(url4);
  }
  if (url5 !== "") {
    var newUrl5 = check(url5);
  }
  var aa = "";
  async function call() {
    function apptrue(app) {
      if (app == 2) {
        if (q1b == "") {
          return "true";
        } else {
          return "false";
          newUrl2 = check(url2);
        }
      }
      if (app == 3) {
        if (q1c == "") {
          return "true";
        } else {
          return "false";
          newUrl3 = check(url3);
        }
      }
      if (app == 4) {
        if (q1d == "") {
          return "true";
        } else {
          return "false";
          newUrl4 = check(url4);
        }
      }
      if (app == 5) {
        if (q1e == "") {
          return "true";
        } else {
          return "false";
          newUrl5 = check(url5);
        }
      }
    }

    var app2true = apptrue(2);
    var app3true = apptrue(3);
    var app4true = apptrue(4);
    var app5true = apptrue(5);

    rbxgamebuilder.build(
      q1,
      q2,
      q3,
      q4,
      q5,
      q6,
      q7,
      q8,
      q9,
      q10,
      name,
      appName,
      maincolor,
      secondcolor,
      newUrl,
      app2true,
      q1b,
      q2b,
      q3b,
      q4b,
      q5b,
      q6b,
      q7b,
      q8b,
      q9b,
      q10b,
      appName2,
      newUrl2,
      app3true,
      q1c,
      q2c,
      q3c,
      q4c,
      q5c,
      q6c,
      q7c,
      q8c,
      q9c,
      q10c,
      appName3,
      newUrl3,
      app4true,
      q1d,
      q2d,
      q3d,
      q4d,
      q5d,
      q6d,
      q7d,
      q8d,
      q9d,
      q10d,
      appName4,
      newUrl4,
      app5true,
      q1e,
      q2e,
      q3e,
      q4e,
      q5e,
      q6e,
      q7e,
      q8e,
      q9e,
      q10e,
      appName5,
      newUrl5,
      function(callback) {
        aa = callback;
        console.log(aa);
      }
    );
    var result = await wait();
    res.download(`./applications/${aa}.rbxlx`);
    var result = await wait();
    fs.unlink(`./applications/${aa}.rbxlx`, function(err) {
      if (err) throw err;
      console.log("Files purged.");
    });
    //}
  }
  call();
});

app.post("/app", function(req, res) {
  if (jsonDB.hasOwnProperty(req.query.url)) {
    var url = req.query.url;
    var webhook = jsonDB[url];

    const body = req.body;
    console.log(body);
    res.set("Content-Type", "text/plain");

    //--Start Bot--//

    const webhookURL = webhook;
    console.log(webhook);
    const avatarURL = `http://www.roblox.com/Thumbs/Avatar.ashx?x=150&y=150&Format=Png&username=${body.user}`;

    function wait() {
      return new Promise(resolve => {
        setTimeout(() => {
          resolve("resolved");
        }, 1000);
      });
    }

    async function first(callback) {
      if (body.q2 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q3 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q4 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q5 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q6 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .addField(
            `${body.q5.replace("NONE", "​").replace("", "​")}`,
            body.a5.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q7 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .addField(
            `${body.q5.replace("NONE", "​").replace("", "​")}`,
            body.a5.replace("", "​")
          )
          .addField(
            `${body.q6.replace("NONE", "​").replace("", "​")}`,
            body.a6.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q8 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .addField(
            `${body.q5.replace("NONE", "​").replace("", "​")}`,
            body.a5.replace("", "​")
          )
          .addField(
            `${body.q6.replace("NONE", "​").replace("", "​")}`,
            body.a6.replace("", "​")
          )
          .addField(
            `${body.q7.replace("NONE", "​").replace("", "​")}`,
            body.a7.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q9 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .addField(
            `${body.q5.replace("NONE", "​").replace("", "​")}`,
            body.a5.replace("", "​")
          )
          .addField(
            `${body.q6.replace("NONE", "​").replace("", "​")}`,
            body.a6.replace("", "​")
          )
          .addField(
            `${body.q7.replace("NONE", "​").replace("", "​")}`,
            body.a7.replace("", "​")
          )
          .addField(
            `${body.q8.replace("NONE", "​").replace("", "​")}`,
            body.a8.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else if (body.q10 == "") {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .addField(
            `${body.q5.replace("NONE", "​").replace("", "​")}`,
            body.a5.replace("", "​")
          )
          .addField(
            `${body.q6.replace("NONE", "​").replace("", "​")}`,
            body.a6.replace("", "​")
          )
          .addField(
            `${body.q7.replace("NONE", "​").replace("", "​")}`,
            body.a7.replace("", "​")
          )
          .addField(
            `${body.q8.replace("NONE", "​").replace("", "​")}`,
            body.a8.replace("", "​")
          )
          .addField(
            `${body.q9.replace("NONE", "​").replace("", "​")}`,
            body.a9.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      } else {
        new webcord(webhook, `${body.user}`, avatarURL)
          .setTitle(`${body.application}`)
          .setDescription(`Submitted by: ${body.user}`)
          .addField(
            `${body.q1.replace("NONE", "​").replace("", "​")}`,
            body.a1.replace("", "​")
          )
          .addField(
            `${body.q2.replace("NONE", "​").replace("", "​")}`,
            body.a2.replace("", "​")
          )
          .addField(
            `${body.q3.replace("NONE", "​").replace("", "​")}`,
            body.a3.replace("", "​")
          )
          .addField(
            `${body.q4.replace("NONE", "​").replace("", "​")}`,
            body.a4.replace("", "​")
          )
          .addField(
            `${body.q5.replace("NONE", "​").replace("", "​")}`,
            body.a5.replace("", "​")
          )
          .addField(
            `${body.q6.replace("NONE", "​").replace("", "​")}`,
            body.a6.replace("", "​")
          )
          .addField(
            `${body.q7.replace("NONE", "​").replace("", "​")}`,
            body.a7.replace("", "​")
          )
          .addField(
            `${body.q8.replace("NONE", "​").replace("", "​")}`,
            body.a8.replace("", "​")
          )
          .addField(
            `${body.q9.replace("NONE", "​").replace("", "​")}`,
            body.a9.replace("", "​")
          )
          .addField(
            `${body.q10.replace("NONE", "​").replace("", "​")}`,
            body.a10.replace("", "​")
          )
          .setImage(avatarURL)
          .setColor("#ff4652")
          .setFooter(
            `Application submitted by: ${body.user} | modernApp Canary`
          )
          .setTimestamp()
          .send();
      }
      await wait();
    }

    first();

    //--End Bot--//

    res.send(`Submitted.`);
    res.end();
  }
});
const listener = app.listen(process.env.PORT, function() {});
