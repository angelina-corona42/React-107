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
        name: "Ceramic Coffee Mug",
        category: "Home",
        price: 18.99,
        quantity: 10,
        image: ceramicMug, 
        desdescription: "A simple ceramic mug perfect for coffee or tea."
    },

    {
        id: 2,
        name: "Cozy Throw Blanket",
        category: "Home",
        price: 34.99,
        quantity: 6,
        image: cozyThrowBlanket, 
        description: "A warm and cozy throw blanket for your living room."
    },

    {
        id: 3,
        name: "Decorative Plant",
        category: "Home",
        price: 22.99,
        quantity: 8,
        image: decorativePlant, 
        description: "A small decorative plant to brighten up your space."
    },

    {
        id: 4,
        name: "Black Headphones",
        category: "Electronics",
        price: 49.99,
        quantity: 12,
        image: blackHeadphones, 
        description: "High-quality black headphones for an immersive audio experience."
    },

    {
        id: 5,
        name: "Mountain Water Bottle",
        category: "Accessories",
        price: 24.99,
        quantity: 15,
        image: mountainWaterBottle,
        description: "A durable water bottle perfect for outdoor adventures."
    },

    {
        id: 6,
        name: "Canvas Tote Bag",
        category: "Accessories",
        price: 16.99,
        quantity: 14,
        image: canvasToteBag,
        description: "A versatile canvas tote bag for everyday use."
    },

    {
        id: 7,
        name: "Olive Sweatshirt",
        category: "Clothing",
        price: 39.99,
        quantity: 7,
        image: oliveSweatshirt,
        description: "A comfortable olive green sweatshirt for casual wear."
    },

    {
        id: 8,
        name: "Mountain Cap",
        category: "Clothing",
        price: 21.99,
        quantity: 9,
        image: mountainCap,
        description: "A durable mountain cap for outdoor activities."
    },

    {
        id: 9,
        name: "Woodland Pine Candle",
        category: "Home",
        price: 17.99,
        quantity: 11,
        image: woodlandPineCandle,
        description: "A fragrant candle that captures the essence of the woodland pine."
    },

    {
        id: 10,
        name: "Wireless Mouse",
        category: "Electronics",
        price: 29.99,
        quantity: 13,
        image: wirelessMouse,
        description: "A sleek wireless mouse for seamless navigation."
    },

    {
        id: 11,
        name: "Mechanical Keyboard",
        category: "Electronics",
        price: 69.99,
        quantity: 5,
        image: mechanicalKeyboard,
        description: "A high-performance mechanical keyboard for gaming and productivity."
    },

    {
        id: 12,
        name: "Mountain Journal",
        category: "Accessories",
        price: 14.99,
        quantity: 20,
        image: mountainJournal,
        description: "A durable journal for recording your mountain adventures."
    }

];


class DataService {

    // getProducts() returns the entire catalog array.
    getProducts() {

        return catalog;
    }
}


export default DataService;