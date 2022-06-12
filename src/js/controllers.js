// All the page's functions will be here
App.controllers = {
    createHeader() {
        // "elm" accesses objects from the script "elements"
        // "header" accesses objects in "header" from the script "elements"
        const elm = App.elements
        const header = elm.header

        header.container.style.display = "flex"
        header.container.style.justifyContent = "space-between"
        header.container.style.alignItems = "center"
        header.container.style.position = "fixed"
        header.container.style.top = "0"
        header.container.style.width = "100%"
        header.container.style.background = "greenYellow"
        header.container.style.border = "2px solid black"

        header.logo.src = "./assets/logo.png"
        header.logo.style.margin = "35px 0 35px 50px"
        header.logo.style.cursor = "pointer"
        header.logo.style.width = "35px"
        // header.logo.onClick = () => {
        //     console.log("logo clicked")
        // }
        
        header.cartIcon.src = "./assets/cartIcon.png"
        header.cartIcon.style.cursor = "pointer"
        header.cartIcon.style.width = "30px"
        header.cartIcon.style.marginRight = "50px"
        // header.cartIcon.onClick = () => {
        //     console.log("cartIcon clicked")
        // }
        
        header.container.appendChild(header.logo)
        header.container.appendChild(header.cartIcon)
        elm.root.appendChild(header.container)
    },

    createBody() {
        const elm = App.elements
        const main = elm.body.main

        main.bg.src = "./assets/bg.jpeg"
        main.bg.style.width = "100%"
        main.bg.style.height = "85vh"

        main.container.appendChild(main.bg)
        elm.body.container.appendChild(main.container)
        elm.root.appendChild(elm.body.container)
    },

    createFooter() {
        const elm = App.elements
        const footer = elm.footer

        footer.container.style.display = "flex"
        footer.container.style.justifyContent = "center"
        footer.container.style.alignItems = "center"
        footer.container.style.background = "#000000"
        footer.container.style.padding = "50px"

        footer.logo.src = "./assets/logo.png"
        footer.logo.style.width = "35px"

        footer.container.appendChild(footer.logo)
        elm.root.appendChild(footer.container)
    },

    createLayout() {
        this.createHeader()
        this.createBody()
        this.createFooter()
    },
}
