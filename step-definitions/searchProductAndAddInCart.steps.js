import { Given, When, Then } from '@wdio/cucumber-framework';
import HomePage from '../pageobjects/home.page.js';
import ProductPage from '../pageobjects/product.page.js';
import CartPage from '../pageobjects/cart.page.js';
import assert from 'assert';

Given('I open the OpenCart website', async () => {
    await HomePage.open();
});

When('I search for {string}', async (productName) => {
    await HomePage.searchProduct(productName);
});

When('I select the first product', async () => {
    await ProductPage.selectFirstProduct();
});

When('I add the product to the cart', async () => {
    await ProductPage.addToCart();
});

When('I go to the cart', async () => {
    await ProductPage.openCart();
});

When('I press {string}', async (buttonText) => {
    await CartPage.pressButton(buttonText);
});

Then('I should see the product {string} in the cart', async (productName) => {
    await CartPage.openCartFromIcon();
    await browser.pause(1000);
    await browser.saveScreenshot(`./screenshots/cart_before_assert_${Date.now()}.png`);
    const isPresent = await CartPage.isProductInCart(productName);
    assert.strictEqual(isPresent, true);
});

When('I remove the product from the cart', async () => {
    await CartPage.removeProduct();
});

Then('I should not see the product {string} in the cart', async (productName) => {
    await browser.pause(1000);
    const isEmpty = await CartPage.isCartEmpty();
    assert.strictEqual(isEmpty, true);
});
