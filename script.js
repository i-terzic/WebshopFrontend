"use strict";

window.addEventListener("load", () => {
    const page = {
        categories: [
            { id: "jackets", name: "Jackets", imgUrl: "images/jackets01.jpg" },
            { id: "shirts", name: "Shirts", imgUrl: "images/shirts01.jpg" },
            {
                id: "trousers",
                name: "Trousers",
                imgUrl: "images/trousers01.jpg",
            },
            { id: "shoes", name: "Shoes", imgUrl: "images/shoes01.jpg" },
            { id: "hats", name: "Hats", imgUrl: "images/hats01.jpg" },
        ],
        jackets: [
            {
                id: "jackets01",
                name: "Green Jacket",
                imgUrl: "images/jackets01.jpg",
                description: "A green jacket woven from the finest yarns",
                price: 199,
            },
            {
                id: "jackets02",
                name: "Black Jacket",
                imgUrl: "images/jackets02.jpg",
                description: "A black jacket woven from the finest yarns",
                price: 199,
            },
            {
                id: "jackets03",
                name: "Red Jacket",
                imgUrl: "images/jackets03.jpg",
                description: "A red jacket woven from the finest yarns",
                price: 199,
            },
            {
                id: "jackets04",
                name: "Mountain Jacket",
                imgUrl: "images/jackets04.jpg",
                description: "A mountain jacket woven from the finest yarns",
                price: 199,
            },
            {
                id: "jackets05",
                name: "Forest Jacket",
                imgUrl: "images/jackets05.jpg",
                description: "A forest jacket woven from the finest yarns",
                price: 199,
            },
            {
                id: "jackets06",
                name: "Stone Jacket",
                imgUrl: "images/jackets06.jpg",
                description: "A stone jacket woven from the finest yarns",
                price: 199,
            },
        ],
        shirts: [
            {
                id: "shirts01",
                name: "Black Shirt",
                imgUrl: "images/shirts01.jpg",
                description: "A black shirt woven from the finest yarns",
                price: 49,
            },
            {
                id: "shirts02",
                name: "Grey Shirt",
                imgUrl: "images/shirts02.jpg",
                description: "A grey shirt woven from the finest yarns",
                price: 49,
            },
            {
                id: "shirts03",
                name: "Dark Blue Shirt",
                imgUrl: "images/shirts03.jpg",
                description: "A darkblue shirt woven from the finest yarns",
                price: 49,
            },
            {
                id: "shirts04",
                name: "White Shirt",
                imgUrl: "images/shirts04.jpg",
                description: "A white shirt woven from the finest yarns",
                price: 49,
            },
            {
                id: "shirts05",
                name: "Dark Blue Shirt",
                imgUrl: "images/shirts05.jpg",
                description: "A dark blue shirt woven from the finest yarns",
                price: 49,
            },
            {
                id: "shirts06",
                name: "Yellow Shirt",
                imgUrl: "images/shirts06.jpg",
                description: "A yellow shirt woven from the finest yarns",
                price: 49,
            },
        ],
        hats: [
            {
                id: "hats01",
                name: "Darkblue Hat",
                imgUrl: "images/hats01.jpg",
                description: "A cool lookin' darkblue cap",
                price: 19,
            },
            {
                id: "hats02",
                name: "Red & White Hat",
                imgUrl: "images/hats02.jpg",
                description: "A cool lookin' red & white cap",
                price: 19,
            },
            {
                id: "hats03",
                name: "Purple & White Hat",
                imgUrl: "images/hats03.jpg",
                description: "A cool lookin' purple & white cap",
                price: 19,
            },
            {
                id: "hats04",
                name: "Camouflage Hat",
                imgUrl: "images/hats04.jpg",
                description: "A cool lookin' camouflage cap",
                price: 19,
            },
            {
                id: "hats05",
                name: "Black Hat",
                imgUrl: "images/hats05.jpg",
                description: "A cool lookin' black cap",
                price: 19,
            },
            {
                id: "hats06",
                name: "Alternative Black Hat",
                imgUrl: "images/hats06.jpg",
                description: "A cool lookin' alternative black cap",
                price: 19,
            },
        ],

        trousers: [
            {
                id: "trousers01",
                name: "Black Trousers",
                imgUrl: "images/trousers01.jpg",
                description: "Comfortable black jogging-trousers",
                price: 99,
            },
            {
                id: "trousers02",
                name: "Beige Trousers",
                imgUrl: "images/trousers02.jpg",
                description: "Comfortable beige jogging-trousers",
                price: 99,
            },
            {
                id: "trousers03",
                name: "Brown Trousers",
                imgUrl: "images/trousers03.jpg",
                description: "Comfortable brown jogging-trousers",
                price: 99,
            },
            {
                id: "trousers04",
                name: "Red Trousers",
                imgUrl: "images/trousers04.jpg",
                description: "Comfortable red jogging-trousers",
                price: 99,
            },
            {
                id: "trousers05",
                name: "Black Trousers",
                imgUrl: "images/trousers05.jpg",
                description: "Comfortable black jogging-trousers",
                price: 99,
            },
            {
                id: "trousers06",
                name: "Alternative Black Trousers",
                imgUrl: "images/trousers06.jpg",
                description: "Comfortable alternative black jogging-trousers",
                price: 99,
            },
        ],
        shoes: [
            {
                id: "shoes01",
                name: "Black & White sneakers",
                imgUrl: "images/shoes01.jpg",
                description: "Comfortable black & white sneakers",
                price: 149,
            },
            {
                id: "shoes02",
                name: "Red & Grey sneakers",
                imgUrl: "images/shoes02.jpg",
                description: "Comfortable red & grey sneakers",
                price: 149,
            },
            {
                id: "shoes03",
                name: "Blue & Black sneakers",
                imgUrl: "images/shoes03.jpg",
                description: "Comfortable blue & black sneakers",
                price: 149,
            },
            {
                id: "shoes04",
                name: "Brown & White sneakers",
                imgUrl: "images/shoes03.jpg",
                description: "Comfortable brown & white sneakers",
                price: 149,
            },
            {
                id: "shoes05",
                name: "Olive & Grey sneakers",
                imgUrl: "images/shoes05.jpg",
                description: "Comfortable olive & grey sneakers",
                price: 149,
            },
            {
                id: "shoes06",
                name: "Olive sneakers",
                imgUrl: "images/shoes06.jpg",
                description: "Comfortable olive sneakers",
                price: 149,
            },
        ],

        init() {
            const body = document.querySelector("body");

            body.appendChild(this.generateHeader());
            body.appendChild(this.generateOverview());
            body.appendChild(this.generateFooter());
        },

        generateHeader() {
            const header = document.createElement("header");
            const limiter = this.createLimiter();
            const nav = this.createNav(this.categories);

            header.appendChild(limiter);
            limiter.appendChild(
                this.imageDiv("header-img", "images/logo.svg", "logo")
            );
            limiter.appendChild(this.createH1("Trouserfy"));
            limiter.appendChild(nav);

            return header;
        },

        generateOverview() {
            const main = document.createElement("main");
            // const limiter = page.createLimiter();
            // const h1 = page.createH1("Products");
            // const categoriesDiv = page.renderProducts(page.categories);
            // main.appendChild(limiter);
            // limiter.appendChild(h1);
            // limiter.appendChild(categoriesDiv);
            const main2 = this.generateProducts(main);
            return main2;
        },

        generateFooter() {
            const limiter = this.createLimiter();
            const footer = document.createElement("footer");
            const p = document.createElement("p");

            footer.appendChild(limiter);
            p.innerHTML = "&copy; 2021 by <span> Ivan Filip Terzic </span>";
            limiter.appendChild(p);

            return footer;
        },

        createLimiter() {
            const div = document.createElement("div");
            div.classList.add("limiter");
            return div;
        },

        imageDiv(divClass, src, alt) {
            const image = document.createElement("img");
            const div = document.createElement("div");

            div.classList.add(divClass);
            image.setAttribute("src", src);
            image.setAttribute("alt", alt);
            div.appendChild(image);

            return div;
        },

        createH1(text) {
            const h1 = document.createElement("h1");
            h1.innerText = text;
            return h1;
        },

        createNav(elementList) {
            const nav = document.createElement("nav");
            const ul = document.createElement("ul");
            ul.appendChild(this.createListElement("home", "Home"));
            ul.appendChild(this.createListElement("contact", "Contact"));
            for (let el of elementList) {
                ul.appendChild(this.createListElement(el.id, el.name));
            }
            nav.appendChild(ul);

            return nav;
        },

        createListElement(link, name) {
            const li = document.createElement("li");
            li.setAttribute("data-link", link);
            li.innerText = name;
            li.addEventListener("click", page.navHandler);
            return li;
        },

        navHandler(event) {
            const target = event.srcElement.dataset.link;
            const main = document.querySelector("main");
            main.textContent = "";

            switch (target) {
                case "home":
                    page.generateProducts(main);
                    break;
                case "contact":
                    page.generateContact(main);
                    break;
                default:
                    page.generateProductPage(main, target);
                    break;
            }
            return false;
        },

        renderProducts(categories) {
            const div = document.createElement("div");
            div.classList.add("product-holder");
            for (let cat of categories) {
                const divElement = this.createDivElement(
                    cat.id,
                    cat.name,
                    cat.imgUrl
                );
                div.appendChild(divElement);
            }

            return div;
        },

        createDivElement(id, name, imgUrl) {
            const outerDiv = document.createElement("div");
            const img = document.createElement("img");
            const innerDiv = document.createElement("div");
            const header = this.createH1(name);
            const span = this.createSpan();

            header.setAttribute("data-link", id);
            span.setAttribute("data-link", id);

            outerDiv.classList.add("product-teaser");
            outerDiv.addEventListener("click", page.navHandler);
            outerDiv.setAttribute("data-link", id);

            img.setAttribute("src", imgUrl);
            img.setAttribute("alt", name);
            img.setAttribute("data-link", id);

            innerDiv.appendChild(header);
            innerDiv.appendChild(span);
            innerDiv.setAttribute("data-link", id);

            outerDiv.appendChild(img);
            outerDiv.appendChild(innerDiv);

            return outerDiv;
        },

        createSpan(text = "Click here to buy!") {
            const span = document.createElement("span");
            span.innerText = text;
            return span;
        },

        generateProducts(m) {
            const main = m;
            const limiter = this.createLimiter();
            const h1 = this.createH1("Products");
            const categoriesDiv = this.renderProducts(page.categories);

            main.appendChild(limiter);
            limiter.appendChild(h1);
            limiter.appendChild(categoriesDiv);

            return main;
        },

        generateContact(main) {
            main.innerHTML =
                '<div class="limiter"> <h1>Contact</h1><div class="contact-data"><p><strong>Ivan Filip Terzic</strong> <br> Internettechnologien <br> Esslingen University of Applied Science <br> 72732 Esslingen </p></div></div> ';
            return main;
        },
        generateProductPage(main, categorieId) {
            const categorie = this.listElementById(
                this.categories,
                categorieId
            );
            if (categorie) {
                main.appendChild(
                    this.generateProductCategorie(categorieId, categorie.name)
                );
            }
        },

        generateProductCategorie(categorieId, categorie) {
            const limiter = this.createLimiter();
            const heading = this.createH1(categorie);
            const div = document.createElement("div");
            const cat = categorie;
            div.classList.add("product-holder");

            for (let item of this[categorieId]) {
                div.appendChild(this.generateSingleProduct(item, cat));
            }

            limiter.appendChild(heading);
            limiter.append(div);

            return limiter;
        },
        listElementById(list, id) {
            return list.find((item) => {
                if (item.id == id) {
                    return item;
                }
                return undefined;
            });
        },

        productHandler(item, id) {
            const main = document.querySelector("main");
            main.innerHTML = "";

            main.appendChild(this.generateSingleProductPage(item));
        },
        generateSingleProductPage(item) {
            const limiter = this.createLimiter();
            const h1 = this.createH1(item.name);
            const h2 = document.createElement("h2");
            const singleImg = document.createElement("div");
            const img = document.createElement("img");
            const priceLine = document.createElement("div");
            const p = document.createElement("p");

            limiter.classList.add("single-product-limiter");
            limiter.appendChild(h1);
            limiter.appendChild(h2);
            limiter.appendChild(singleImg);
            limiter.appendChild(priceLine);

            singleImg.appendChild(img);
            singleImg.classList.add("single-img");

            img.setAttribute("src", item.imgUrl);
            img.setAttribute("alt", item.name);

            h2.innerText = item.description;

            priceLine.classList.add("price-line");
            priceLine.appendChild(p);

            p.innerText = item.name + ": " + item.price + " €";

            return limiter;
        },

        generateSingleProduct(item, id) {
            const outerDiv = document.createElement("div");
            const img = document.createElement("img");
            const innerDiv = document.createElement("div");
            const pDisc = document.createElement("p");
            const h1 = page.createH1(item.name);
            const p = document.createElement("p");
            const pPrice = document.createElement("p");

            outerDiv.setAttribute("data-link", item.id);
            outerDiv.classList.add("product-single");
            outerDiv.appendChild(img);
            outerDiv.appendChild(innerDiv);

            outerDiv.addEventListener(
                "click",
                page.productHandler.bind(this, item, id)
            );

            img.setAttribute("src", item.imgUrl);
            img.setAttribute("alt", "item");
            img.setAttribute("data-link", item.id);

            pDisc.append(p);
            pDisc.setAttribute("data-link", item.id);

            pPrice.innerText = "Price " + item.price + " €";

            p.innerText = item.description;
            p.setAttribute("data-link", item.id);

            h1.setAttribute("data-link", item.id);

            innerDiv.appendChild(h1);
            innerDiv.appendChild(pDisc);
            innerDiv.appendChild(pPrice);

            return outerDiv;
        },
    };

    page.init();
});
