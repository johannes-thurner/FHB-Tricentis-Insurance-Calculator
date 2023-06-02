export default class PrimaryNavigation {
    #browser;
    automobileNavButton;
    truckNavButton;
    motorcycleNavButton;
    camperNavButton;

    constructor(browser) {
        this.#browser = browser;
    }

    async init () {
        this.automobileNavButton = await this.#browser.$("#nav_automobile");
        this.truckNavButton = await this.#browser.$("#nav_truck");
        this.motorcycleNavButton = await this.#browser.$("#nav_motorcycle");
        this.camperNavButton = await this.#browser.$("#nav_camper");
    }
}