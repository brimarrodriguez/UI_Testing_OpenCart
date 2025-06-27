class HomePage {
    get searchInput() { return $('input[name="search"]'); }
    get searchButton() { return $('button.btn.btn-default.btn-lg'); }

    async open() {
        await browser.url('/');
    }

    async searchProduct(productName) {
        await this.searchInput.setValue(productName);
        await this.searchButton.click();
    }
}

export default new HomePage();
