"use strict";

window.addEventListener("load", () => {
    const page = {
        url: "https://www2.hs-esslingen.de/~melcher/internet-technologien/webshop/",

        products: {},
        categories: null,
        async init() {
            const body = document.querySelector("body");

            body.appendChild(this.generateHeader());
            body.appendChild(this.generateOverview());
            body.appendChild(this.generateFooter());
            this.generatePlaceHolder();
            await this.loadCategories();

            this.replaceNav(this.categories);
            this.replaceOverview(this.categories);
        },

        generateHeader() {
            const header = document.createElement("header");
            const limiter = this.createLimiter();
            const nav = this.createNav(); // null

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
            if (elementList != null) {
                for (let el of elementList) {
                    ul.appendChild(this.createListElement(el.id, el.name));
                }
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
                    page.generateProducts(main, this.categories);
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
            if (categories != null) {
                for (let cat of categories) {
                    const divElement = this.createDivElement(
                        cat.id,
                        cat.name,
                        cat.imgId
                    );
                    div.appendChild(divElement);
                }
            }
            return div;
        },

        createDivElement(id, name, imgId) {
            const outerDiv = document.createElement("div");
            const img = document.createElement("img");
            const innerDiv = document.createElement("div");
            const header = this.createH1(name);
            const span = this.createSpan();
            const imgUrl = this.url + `?request=getimage&imageid=${imgId}`;
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

        generateProducts(m, categories) {
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

        generateProductCategorie(id, categorie) {
            const limiter = this.createLimiter();
            const heading = this.createH1(categorie);
            const div = document.createElement("div");
            const cat = categorie;
            div.classList.add("product-holder");

            if (this.products[id] != null) {
                this.renderSingleProducs(id, div);
            } else {
                this.loadCategory(id).then((products) => {
                    this.products[id] = products;
                    this.renderSingleProducs(id, div);
                });
            }

            limiter.appendChild(heading);
            limiter.append(div);

            return limiter;
        },

        renderSingleProducs(id, div) {
            for (let item of this.products[id]) {
                div.appendChild(page.generateSingleProduct(item, id));
            }
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

            img.setAttribute(
                "src",
                this.url + "?request=getimage&imageid=" + item.imgId
            );
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

            img.setAttribute(
                "src",
                this.url + "?request=getimage&imageid=" + item.imgId
            );
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
        async loadCategories() {
            const response = await fetch(this.url + "?request=getcategories");
            const { categories } = await response.json();
            this.categories = categories;
        },

        replaceNav(categories) {
            const header = document.querySelector("header>div");
            const nav = document.querySelector("nav");
            header.replaceChild(this.createNav(this.categories), nav);
        },
        replaceOverview(categories) {
            const m = document.querySelector("main");

            const div = document.querySelector("main>div");
            m.removeChild(div);
            this.generateProducts(m, this.categories);
        },
        generatePlaceHolder() {
            const div = document.querySelector("main>.limiter");
            const h1 = document.createElement("h1");

            div.innerHTML = "";
            h1.classList.add("place-holder");
            h1.textContent = "Waiting for products";

            div.appendChild(h1);
        },
        async loadCategory(id) {
            return fetch(this.url + "?request=getcategory&categoryid=" + id)
                .then((res) => {
                    return res.json();
                })
                .then((json) => {
                    return json[id];
                });
        },
    };
    page.init();
});
