describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit ('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type ('german@dolnikov.ru'); // находим поле и вводим
        cy.get('#pass').type ('iLoveqastudio1'); //находим поле пароль и вводим
        cy.get('#loginButton').click (); // нажимаем залогиниться
        cy.get('#message').contains ('Авторизация прошла успешно'); // видим сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
    })
    it('Забыли пароль', function () {
        cy.visit ('https://login.qa.studio'); // идем на сайт
        cy.get('#forgotEmailButton').click (); // нажимаем забыли пароль
        cy.get('#exitRestoreButton > .exitIcon').should('be.visible') // видим крестик
        cy.get('#mailForgot').type ('german@dolnikov.ru');//вводим почту
        cy.get('#restoreEmailButton').click (); // нажимаем отправить код
        cy.get('#message').contains ('Успешно отправили пароль на e-mail');
    })

        it('Неверный пароль', function () {
            cy.visit ('https://login.qa.studio'); // переходим на сайт
            cy.get('#mail').type ('german@dolnikov.ru'); // находим поле и вводим
            cy.get('#pass').type ('1111'); //находим поле пароль и вводим невалидный
            cy.get('#loginButton').click (); // нажимаем залогиниться
            cy.get('#exitMessageButton').should('be.visible'); //видим крестик
            cy.get('#message').contains ('Такого логина или пароля нет');
            
        })

        it('Неверный логин', function () {
            cy.visit ('https://login.qa.studio'); // переходим на сайт
            cy.get('#mail').type ('german1@dolnikov.ru'); // находим поле и вводим невалидный логин
            cy.get('#pass').type ('iLoveqastudio1'); //находим поле пароль и вводим валидный
            cy.get('#loginButton').click (); // нажимаем залогиниться
            cy.get('#exitMessageButton').should('be.visible'); //видим крестик
            cy.get('#message').contains ('Такого логина или пароля нет');

        }) 

        it('Почта без @', function () {
            cy.visit ('https://login.qa.studio'); // переходим на сайт
            cy.get('#mail').type ('german1dolnikov.ru'); // находим поле и вводим почту без @
            cy.get('#pass').type ('iLoveqastudio1'); //находим поле пароль и вводим валидный
            cy.get('#loginButton').click (); // нажимаем залогиниться
            cy.get('#exitMessageButton').should('be.visible'); //видим крестик
            cy.get('#message').contains ('Нужно исправить проблему валидации');
    })  
    it('Строчные буквы', function () {
        cy.visit ('https://login.qa.studio'); // переходим на сайт
        cy.get('#mail').type ('GerMan@Dolnikov.ru'); // находим поле и вводим почту с большими буквами
        cy.get('#pass').type ('iLoveqastudio1'); //находим поле пароль и вводим валидный
        cy.get('#loginButton').click (); // нажимаем залогиниться
        cy.get('#message').contains ('Авторизация прошла успешно'); // видим сообщение
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); //видим крестик
})  
}) 
    
