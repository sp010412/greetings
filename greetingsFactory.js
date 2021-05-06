function tools() {

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
    return {
        greet,
    }

}
