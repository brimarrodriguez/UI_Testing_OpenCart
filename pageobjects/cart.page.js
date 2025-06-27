class CartPage {
    get cartIcon() { return $('i.fa.fa-shopping-cart'); }
    get productLinks() { return $$('.table.table-bordered tbody tr td:nth-child(2) a'); }
    get cartTable() { return $('.table.table-bordered'); }
    get removeButton() { return $('.table.table-bordered tbody tr td .btn-danger'); }
    get emptyCartMessage() { return $('div#content p'); }

    async pressButton(buttonText) {
        const button = await $(`=${buttonText}`);
        await button.waitForClickable({ timeout: 5000 });
        await button.click();
    }

    async openCartFromIcon() {
        const parentButton = await this.cartIcon.parentElement();
        await parentButton.waitForClickable({ timeout: 5000 });
        await parentButton.click();
    }

    async getProductNamesInCart() {
        const productLinks = await this.productLinks;
        const names = [];
        for (let link of productLinks) {
            const name = await link.getText();
            names.push(name);
        }
        return names;
    }

    async isProductInCart(productName) {
        await this.cartTable.waitForExist({ timeout: 10000 });
        const names = await this.getProductNamesInCart();
        console.log('Nombres de productos en el carrito:', names);
        return names.some(name => name.toLowerCase().includes(productName.toLowerCase()));
    }

    async removeProduct() {
        await this.removeButton.waitForExist({ timeout: 5000 });
        await this.removeButton.waitForDisplayed({ timeout: 5000 });
        await this.removeButton.waitForClickable({ timeout: 5000 });
        await this.removeButton.click();
    }

    async isCartEmpty() {
        await this.emptyCartMessage.waitForExist({ timeout: 5000 });
        const text = await this.emptyCartMessage.getText();
        console.log('Texto de carrito vacío:', text);
        return text.includes('Your shopping cart is empty!');
    }
}

export default new CartPage();
