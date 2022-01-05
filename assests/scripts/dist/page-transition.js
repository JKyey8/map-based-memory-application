var SwupScriptsPlugin = new SwupScriptsPlugin();
var SwupHeadPlugin = new SwupHeadPlugin({
    persistTags: true
});
//@ts-ignore
var swup = new Swup({
    plugins: [SwupScriptsPlugin, SwupHeadPlugin]
});
