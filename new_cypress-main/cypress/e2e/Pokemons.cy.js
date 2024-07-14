describe('Проверка авторизации', function () {

    it('Покупка аватара', function () {
        cy.visit ('https://pokemonbattle.ru/'); // переходим на сайт
        cy.get(':nth-child(1) > .auth__input').type ('USER_LOGIN'); //вводим логин
        cy.get('#password').type ('USER_PASSWORD'); // вводим пароль
        cy.get('.auth__button').click (); // нажимаем войти
        cy.get('.header__btns > :nth-child(4)').click ()// нажимаем кнопку магазин
        cy.get('.available > button').first().click(); // нажимаем купить кнопку с классом awailable
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type ('4111 1111 1111 1111'); // Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type ('1224'); // вводим дату
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type ('125');// вводим CVV
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type ('Ilya Testerov'); // вводим имя
        cy.get('.pay-btn').click (); // нажимаем оплатить
        cy.get('#cardnumber').type ('56456'); // вводим код из смс
        cy.get('.payment__submit-button').click () // нажимаем отправить
        cy.get('.payment__field-defolt-for-success').contains ('Покупка прошла успешно');
    })
})