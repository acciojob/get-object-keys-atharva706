let myObj = {
    name: "John",

    getKeys() {
        return Object.keys(this);
    }
};

console.log(myObj.getKeys());