const {makeAutoObservable} = require("mobx");

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    current_page = 0
    cart = [
        {
            id: 1,
            title: 'Apple',
            price: 1.99,
            image_url: 'https://images.everydayhealth.com/images/apples-101-about-1440x810.jpg',
            quantity: 0
        },
        {
            id: 2,
            title: 'Orange',
            price: 2.50,
            image_url: 'https://img1.thelist.com/img/gallery/when-you-drink-orange-juice-every-day-this-is-what-happens-to-your-body/intro-1587046287.jpg',
            quantity: 0
        },
        {
            id: 2,
            title: 'Cherries',
            price: 4.50,
            image_url: 'https://images.immediate.co.uk/production/volatile/sites/30/2020/08/health-benefits-of-cherries-hub-image-200-200-a9a44fa.jpg?quality=90&resize=504,458?quality=90&webp=true&resize=504,458',
            quantity: 0
        },
        {
            id: 2,
            title: 'Banana',
            price: 1.50,
            image_url: 'https://cdn.mos.cms.futurecdn.net/42E9as7NaTaAi4A6JcuFwG-1200-80.jpg',
            quantity: 0
        }
    ]
}

export const main_store = window.main_store = new MainStore()