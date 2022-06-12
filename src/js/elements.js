// All the page's elements will be created here
// elements is an object inside App (also object)
App.elements = {
    // a origem de "elements" é o div "app" do index.html
    root: document.getElementById("app"),

    header: {
        container: document.createElement("div"),
        logo: document.createElement("img"),
        cartIcon: document.createElement("img"),
    },

    body: {
        // Only the body of the page will change
        // according to the bellow functions called
        container: document.createElement("div"),

        // this is the main page
        main: {
            container: document.createElement("div"),
            bg: document.createElement("img"),
            h1: document.createElement("h1"),
            p: document.createElement("p"),
        },

        // this is the checkout page    
        // checkout: {
        //     container: document.createElement("div"),
        // },
    },

    footer: {
        container: document.createElement("div"),
        logo: document.createElement("img"),
    },
}
