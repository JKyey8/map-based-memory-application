
var SwupScriptsPlugin =  new SwupScriptsPlugin();
//@ts-ignore
var SwupPreloadPlugin = new SwupPreloadPlugin();
var SwupHeadPlugin = new SwupHeadPlugin( {

 persistTags: true,




});

//@ts-ignore
const swup = new Swup({
  plugins: [ SwupScriptsPlugin, SwupHeadPlugin, SwupPreloadPlugin ]
});



