var eslint = require("eslint");

var fileToLint = "ts.ts";

for (var i = 0; i < 100; i++) {
    console.log('attempt ' + i)
    var lintResult = lintFile(fileToLint);
    if (lintResult.fatal.length > 0) {
        lintResult.fatal.forEach(function (err) {
            console.log("fatal error: " + JSON.stringify(err));
        });
        return;
    } else {
        console.log("errors and warnings: ");
        lintResult.errorsAndWarnings.forEach(function (msg) {
            console.log(msg.message)
        });
    }
}

function lintFile(relativeFilePath) {
    var engine = new eslint.CLIEngine({});
    var result = engine.executeOnFiles([relativeFilePath]);
    return result.results.map(function (result) {
        var fatals = [];
        var errorsAndWarnings = [];
        result.messages.forEach(function (msg) {
            ((msg.fatal) ? fatals : errorsAndWarnings).push(msg);
        });
        return {
            fatal: fatals,
            errorsAndWarnings: errorsAndWarnings
        };
    })[0];
}

console.log("done");


