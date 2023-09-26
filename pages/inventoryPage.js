exports.InventoryPage = class InventoryPage{

    constructor(page){
        this.page = page;
        this.addToCart = page.locator('[data-test="add-to-cart-sauce-labs-backpack"]');
        this.inventoryList = page.locator('#inventory_container');

    }
    async viewInventory(){
        inventory = await this.inventoryList;
        return inventory
    }
}