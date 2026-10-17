const catalog = [

    {
        id: 1,
        title: "Coffee",
        category: "Beverages",
        price: 10,
        image: "coffe.png"
    },

    {
        id: 2,
        title: "Chocolate",
        category: "Food",
        price: 15,
        image: "choco.png"
    },

    {
        id: 3,
        title: "Milk",
        category: "Beverages",
        price: 20,
        image: "milk.png"
    }

];


class DataService{

    getProducts(){

        return catalog;
    }
}


export default DataService;