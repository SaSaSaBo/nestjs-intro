export class Product {

    /* this is a long way of doing it. 
    id: string;
    title: string;
    description: string;
    price: number;

    constructor(id: string, title: string, desc: string, price: number) {
        this.id = id;
        this.title = title;
        this.description = desc;
        this.price = price;
    } 
    there is an easier way of doing it: 
    */    
    constructor(
        public id: string,
        public title: string, 
        public description: string, 
        public price: number) {}

}