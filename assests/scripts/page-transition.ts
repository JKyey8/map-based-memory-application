
var SwupScriptsPlugin =  new SwupScriptsPlugin()
var SwupHeadPlugin = new SwupHeadPlugin( {

 persistTags: true,




});

//@ts-ignore
const swup = new Swup({
  plugins: [ SwupScriptsPlugin, SwupHeadPlugin ]
});



