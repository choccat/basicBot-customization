(function () {
    //Link location of your fork so you don't have to modify so many things.
    var fork = "Choccat";
		
    //Define our function responsible for extending the bot.
    function extend() {
        //If the bot hasn't been loaded properly, try again in 1 second(s).
        if (!window.bot) {
            return setTimeout(extend, 1 * 1000);
        }

        //Precaution to make sure it is assigned properly.
        var bot = window.bot;

        //Load custom settings set below
        bot.retrieveSettings();

        /*
         Extend the bot here, either by calling another function or here directly.
         Model code for a bot command:
         bot.commands.commandCommand = {
         command: 'cmd',
         rank: 'user/bouncer/mod/manager',
         type: 'startsWith/exact',
         functionality: function(chat, cmd){
         if(this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
         if( !bot.commands.executable(this.rank, chat) ) return void (0);
         else{
         //Commands functionality goes here.
         }
         }
         }
         */

        bot.commands.baconCommand = {
            command: 'bacon',  //The command to be called. With the standard command literal this would be: !bacon
            rank: 'user', //Minimum user permission to use the command
            type: 'exact', //Specify if it can accept variables or not (if so, these have to be handled yourself through the chat.message
            functionality: function (chat, cmd) {
                if (this.type === 'exact' && chat.message.length !== cmd.length) return void (0);
                if (!bot.commands.executable(this.rank, chat)) return void (0);
                else {
                    API.sendChat("/me Bacon!!!");
                }
            }
        };

        //Load the chat package again to account for any changes
        bot.loadChat();

    }

    //Change the bots default settings and make sure they are loaded on launch

    localStorage.setItem("basicBotsettings", JSON.stringify({
        botName: "SmashBot",
        language: "english",
        startupCap: 1, // 1-200
        startupVolume: 0, // 0-100
        startupEmoji: true, // true or false
        cmdDeletion: false,
        chatLink: "https://rawgit.com/" + fork + "/basicBot/master/lang/en.json",
        maximumAfk: 1200,
        afkRemoval: false,
        maximumDc: 60,
        bouncerPlus: false,
        blacklistEnabled: true,
        lockdownEnabled: false,
        lockGuard: false,
        maximumLocktime: 10,
        cycleGuard: true,
        maximumCycletime: 10,
        voteSkip: true,
        voteSkipLimit: 2,
        timeGuard: true,
        maximumSongLength: 8,
        autodisable: false,
        commandCooldown: 2,
        usercommandsEnabled: true,
        lockskipPosition: 2,
        lockskipReasons: [
            ["theme", "This song does not fit the room theme. Skipping. "],
            ["op", "This song is on the OP list. Skipping. "],
            ["history", "This song is in the history. Skipping. "],
            ["sound", "The song you played had bad sound quality or no sound. Skipping. "],
            ["nsfw", "The song you contained was NSFW (image or sound). Skipping. "],
            ["unavailable", "The song you played was not available for some users. Skipping. "],
            ["1", "This song is out of theme! Try another one please. Skipping. "],
            ["2", "This song is OverPlayed (OP). Skipping. "],
            ["3", "This song is in the room history, Skipping. "],
            ["4", "The song played has bad sound. Skipping. "],
            ["5", "The song you played has NSFW (Not Safe For Work) images. Skipping. "],
            ["6", "This song you played is not available for some users. Skipping. "]
        ],
        afkpositionCheck: 15,
        afkRankCheck: "ambassador",
        motdEnabled: false,
        motdInterval: 5,
        motd: "Hello!",
        filterChat: true,
        etaRestriction: false,
        welcome: true,
        opLink: null,
        rulesLink: "http://smashroyale.com/forums/index.php?threads/plugdj-rules.499",
        themeLink: "EDM",
        fbLink: null,
        youtubeLink: null,
        website: "http://smashroyale.com",
        intervalMessages: [],
        messageInterval: 5,
        songstats: false,
        commandLiteral: "!",
        blacklists: {
            NSFW: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleNSFWlist.json",
            OP: "https://rawgit.com/" + fork + "/basicBot-customization/master/blacklists/ExampleOPlist.json"
        }
    }));

    //Start the bot and extend it when it has loaded.
    $.getScript("https://rawgit.com/Choccat/basicBot/master/basicBot.js", extend);

}).call(this);
