class ProductPage {
    get firstProduct() { return $('div.product-layout:first-of-type h4 > a'); }
    get addToCartButton() { return $('#button-cart'); }
    get cartButton() { return $('#cart'); }

    async selectFirstProduct() {
        await this.firstProduct.waitForExist({ timeout: 5000 });
        await this.firstProduct.waitForDisplayed({ timeout: 5000 });
        await this.firstProduct.waitForClickable({ timeout: 5000 });
        await this.firstProduct.click();
    }

    async addToCart() {
        await this.addToCartButton.click();
    }

    async openCart() {
        await this.cartButton.click();
    }
}

export default new ProductPage();
