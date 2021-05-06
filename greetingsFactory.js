function tools(existingNames) {



    var nameList = existingNames || [];

    function storeNames(name) {
        nameList.push(name)
    }

    function greet(selectL, name) {

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

    function getNames(){
        return nameList
    }

    return {
        greet,
        counter,
        storeNames,
        getNames
    }

}
