Feature: Buscar producto y agregarlo a carrito

        Scenario: Search iPhone
            Given I open the OpenCart website
             When I search for "iPhone"

        Scenario: Add to cart
              And I select the first product
              And I add the product to the cart

        Scenario: Validate cart
              And I go to the cart
              And I press "View Cart"
             Then I should see the product "iPhone" in the cart

        Scenario: Remove iPhone from cart
             When I remove the product from the cart

        Scenario: Validate removal
             Then I should not see the product "iPhone" in the cart
