var SwupScriptsPlugin = new SwupScriptsPlugin();
//@ts-ignore
var SwupPreloadPlugin = new SwupPreloadPlugin();
var SwupHeadPlugin = new SwupHeadPlugin({
    persistTags: true
});
//@ts-ignore
var swup = new Swup({
    plugins: [SwupScriptsPlugin, SwupHeadPlugin, SwupPreloadPlugin]
});
