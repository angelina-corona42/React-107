// PRODUCT IMAGES
import ceramicMug from "../assets/ceramic-mug.png";
import cozyThrowBlanket from "../assets/cozy-blanket.png";
import decorativePlant from "../assets/decorative-plant.png";
import blackHeadphones from "../assets/black-headphones.png";
import mountainWaterBottle from "../assets/mountain-water-bottle.png";
import canvasToteBag from "../assets/canvas-tote-bag.png";
import oliveSweatshirt from "../assets/olive-sweatshirt.png";
import mountainCap from "../assets/mountain-cap.png";
import woodlandPineCandle from "../assets/woodland-pine-candle.png";
import wirelessMouse from "../assets/wireless-mouse.png";
import mechanicalKeyboard from "../assets/mechanical-keyboard.png";
import mountainJournal from "../assets/mountain-journal.png";


// Mock catalog data.
// This is acting like our temporary database
// until we eventually use a real API/database.
const catalog = [

    {
        id: 1,
        title: "Ceramic Coffee Mug",
        category: "Home",
        price: 18.99,
        image: ceramicMug
    },

    {
        id: 2,
        title: "Cozy Throw Blanket",
        category: "Home",
        price: 34.99,
        image: cozyThrowBlanket
    },

    {
        id: 3,
        title: "Decorative Plant",
        category: "Home",
        price: 22.99,
        image: decorativePlant
    },

    {
        id: 4,
        title: "Black Headphones",
        category: "Electronics",
        price: 49.99,
        image: blackHeadphones
    },

    {
        id: 5,
        title: "Mountain Water Bottle",
        category: "Accessories",
        price: 24.99,
        image: mountainWaterBottle
    },

    {
        id: 6,
        title: "Canvas Tote Bag",
        category: "Accessories",
        price: 16.99,
        image: canvasToteBag
    },

    {
        id: 7,
        title: "Olive Sweatshirt",
        category: "Clothing",
        price: 39.99,
        image: oliveSweatshirt
    },

    {
        id: 8,
        title: "Mountain Cap",
        category: "Clothing",
        price: 21.99,
        image: mountainCap
    },

    {
        id: 9,
        title: "Woodland Pine Candle",
        category: "Home",
        price: 17.99,
        image: woodlandPineCandle
    },

    {
        id: 10,
        title: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        image: wirelessMouse
    },

    {
        id: 11,
        title: "Mechanical Keyboard",
        category: "Electronics",
        price: 69.99,
        image: mechanicalKeyboard
    },

    {
        id: 12,
        title: "Mountain Journal",
        category: "Accessories",
        price: 14.99,
        image: mountainJournal
    }

];


class DataService {

    // getProducts() returns the entire catalog array.
    getProducts() {

        return catalog;
    }
}


export default DataService;