//Select materials
const agar = document.querySelector(".agar")
const rock = document.querySelector(".rock")

if (agar) {
    agar.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('agar-list').style.display = "block";
        let itemElements = document.querySelectorAll('.list-item');

        for (let i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display = "block";
        }

        let rockItemElements = document.querySelectorAll('.rock-list-item');

        for (let i = 0; i < rockItemElements.length; i++) {
            rockItemElements[i].style.display = "none";
        }

        let luItemList = document.querySelectorAll('.lu-list-item');

        for (let i = 0; i < luItemList.length; i++) {
            luItemList[i].style.display = "none";
        }

        let hoaItemList = document.querySelectorAll('.hoa-list-item');

        for (let i = 0; i < hoaItemList.length; i++) {
            hoaItemList[i].style.display = "none";
        }

        let coItemList = document.querySelectorAll('.co-list-item');

        for (let i = 0; i < coItemList.length; i++) {
            coItemList[i].style.display = "none";
        }
        document.getElementById('img-size').style.display = "none"
    })
}

if (rock) {
    rock.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('rock-list').style.display = "block";
        let rockItemElements = document.querySelectorAll('.rock-list-item');

        for (let i = 0; i < rockItemElements.length; i++) {
            rockItemElements[i].style.display = "block";
        }

        let itemElements = document.querySelectorAll('.list-item');

        for (let i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display = "none";
        }

        let luItemList = document.querySelectorAll('.lu-list-item');

        for (let i = 0; i < luItemList.length; i++) {
            luItemList[i].style.display = "none";
        }

        let hoaItemList = document.querySelectorAll('.hoa-list-item');

        for (let i = 0; i < hoaItemList.length; i++) {
            hoaItemList[i].style.display = "none";
        }

        let coItemList = document.querySelectorAll('.co-list-item');

        for (let i = 0; i < coItemList.length; i++) {
            coItemList[i].style.display = "none";
        }

        document.getElementById('agar-list').style.display = "none";
        document.getElementById('img-size').style.display = "none"
    })
}

//Select mix
const lu = document.querySelector(".lu-thong")
const co = document.querySelector(".co")
const hoa = document.querySelector(".hoa")

if (lu) {
    lu.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('lu-list').style.display = "block";
        let itemElements = document.querySelectorAll('.lu-list-item');

        for (let i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display = "block";
        }

        let rockItemElements = document.querySelectorAll('.rock-list-item');

        for (let i = 0; i < rockItemElements.length; i++) {
            rockItemElements[i].style.display = "none";
        }

        let agarItemElements = document.querySelectorAll('.list-item');

        for (let i = 0; i < agarItemElements.length; i++) {
            agarItemElements[i].style.display = "none";
        }

        let coItemList = document.querySelectorAll('.co-list-item');

        for (let i = 0; i < coItemList.length; i++) {
            coItemList[i].style.display = "none";
        }

        let hoaItemList = document.querySelectorAll('.hoa-list-item');

        for (let i = 0; i < hoaItemList.length; i++) {
            hoaItemList[i].style.display = "none";
        }

        document.getElementById('rock-list').style.display = "none";
        document.getElementById('agar-list').style.display = "none";
        document.getElementById('img-size').style.display = "none"
    })
}

if (co) {
    co.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('co-list').style.display = "block";
        let itemElements = document.querySelectorAll('.co-list-item');

        for (let i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display = "block";
        }

        let rockItemElements = document.querySelectorAll('.rock-list-item');

        for (let i = 0; i < rockItemElements.length; i++) {
            rockItemElements[i].style.display = "none";
        }

        let agarItemElements = document.querySelectorAll('.list-item');

        for (let i = 0; i < agarItemElements.length; i++) {
            agarItemElements[i].style.display = "none";
        }

        let luItemList = document.querySelectorAll('.lu-list-item');

        for (let i = 0; i < luItemList.length; i++) {
            luItemList[i].style.display = "none";
        }

        let hoaItemList = document.querySelectorAll('.hoa-list-item');

        for (let i = 0; i < hoaItemList.length; i++) {
            hoaItemList[i].style.display = "none";
        }

        document.getElementById('rock-list').style.display = "none";
        document.getElementById('agar-list').style.display = "none";
        document.getElementById('lu-list').style.display = "none";
        document.getElementById('img-size').style.display = "none"
    })
}

if (hoa) {
    hoa.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('hoa-list').style.display = "block";
        let itemElements = document.querySelectorAll('.hoa-list-item');

        for (let i = 0; i < itemElements.length; i++) {
            itemElements[i].style.display = "block";
        }

        let rockItemElements = document.querySelectorAll('.rock-list-item');

        for (let i = 0; i < rockItemElements.length; i++) {
            rockItemElements[i].style.display = "none";
        }

        let agarItemElements = document.querySelectorAll('.list-item');

        for (let i = 0; i < agarItemElements.length; i++) {
            agarItemElements[i].style.display = "none";
        }

        let luItemList = document.querySelectorAll('.lu-list-item');

        for (let i = 0; i < luItemList.length; i++) {
            luItemList[i].style.display = "none";
        }

        let coItemList = document.querySelectorAll('.co-list-item');

        for (let i = 0; i < coItemList.length; i++) {
            coItemList[i].style.display = "none";
        }

        document.getElementById('rock-list').style.display = "none";
        document.getElementById('agar-list').style.display = "none";
        document.getElementById('lu-list').style.display = "none";
        document.getElementById('co-list').style.display = "none";
        document.getElementById('img-size').style.display = "none"
    })
}

//Size
const male = document.querySelector(".male")
const female = document.querySelector(".female")

if (male) {
    male.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('img-size').style.display = "block"
        document.getElementById('rock-list').style.display = "none";
        document.getElementById('agar-list').style.display = "none";
        document.getElementById('lu-list').style.display = "none";
        document.getElementById('co-list').style.display = "none";
        document.getElementById('hoa-list').style.display = "none";
    })
}

if (female) {
    female.addEventListener("click", function () {
        document.getElementById('content').style.removeProperty("background-image");
        document.getElementById('img-size').style.display = "block"
        document.getElementById('rock-list').style.display = "none";
        document.getElementById('agar-list').style.display = "none";
        document.getElementById('lu-list').style.display = "none";
        document.getElementById('co-list').style.display = "none";
        document.getElementById('hoa-list').style.display = "none";
    })
}


console.log(document.forms['test'].gender)