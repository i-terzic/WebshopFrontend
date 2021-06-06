"use strict";

async function getData() {
    const response = await fetch(
        "https://www2.hs-esslingen.de/~melcher/internet-technologien/webshop/?request=getcategories"
    );
    const { categories } = await response.json();
    for (let ele of categories) {
        const imgResponse = await fetch(
            `https://www2.hs-esslingen.de/~melcher/internet-technologien/webshop/?request=getimage&imageid=${ele.imgId}`
        );
        console.dir(imgResponse);
    }
}

async function tryData() {
    const response = await fetch(
        "https://www2.hs-esslingen.de/~melcher/internet-technologien/webshop/?request=getimage&imageid=shirt01"
    );
    console.dir(response);
}
