'use strict';

// const apiKey = 'xjbEIaolcbFLDqlhBl7t9r7JZiZzbmGTvNtunPc9';

function getInfo() {
    const url = "https://developer.nps.gov/api/v1/parks";

    const options = {
        headers: new Headers({
            'X-Api-Key': 'xjbEIaolcbFLDqlhBl7t9r7JZiZzbmGTvNtunPc9'})
    };

    fetch(url, options)
        .then(response => response.json())
        .then(responseJson => console.log(responseJson));
}

$(getInfo);