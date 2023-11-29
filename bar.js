'use strict';


let txt = ":roflcopter loool und :bar";

txt.replace(/:.*\s+/g, match => {
    match = match.trim();
    console.log(match.slice(1));
});
