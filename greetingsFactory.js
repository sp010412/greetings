function tools(existingNames) {



    var nameList = existingNames || [];

    function storeNames(name) {
        name = name.charAt(0).toUpperCase() + name.slice(1)
        if (!nameList.includes(name)) {
            return nameList.push(name)
        } else {
            return
        }
    }

    function greet(selectL, name) {
        name = name.charAt(0).toUpperCase() + name.slice(1)
        if (selectL === "English") {
            return "Hi, " + name;
        }
        else if (selectL === "Afrikaans") {
            return "Hallo, " + name;
        }
        else if (selectL === "Isixhosa") {
            return "Molo, " + name;
        }

    }

    function counter() {
        return nameList.length
    }

    function getNames() {
        return nameList
    }
    function backZero(name) {
        if (nameList[name] === undefined) {
            greetingsCounter++;
            //add an entry for the user that was greeted in the Object Map
            namesGreeted[userName] = 0;
            //update the DOM to display the counter
            greetingsElem.innerHTML = greetingsCounter;
        }
    }


    return {
        greet,
        counter,
        storeNames,
        getNames,

    }

}
