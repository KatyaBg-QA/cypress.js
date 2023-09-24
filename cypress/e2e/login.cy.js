
describe('Автотесты на форму логина', function () {
    
    it('Верный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#mail').type('german@dolnikov.ru');  // ищем импут ввода емейла и вводим логин
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');  // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // клик по кнопке Войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 

        })

    it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#mail').type('german@dolnikov.ru');  // ищем импут ввода емейла и вводим логин
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('sndfsndnfl');  // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // клик по кнопке Войти
        cy.contains('Такого логина или пароля нет').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 

        })

    it('Проверка валидации логина', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#mail').type('erman@dolnikov.ru');  // ищем импут ввода емейла и вводим неправильный логин
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');  // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // клик по кнопке Войти
        cy.contains('Такого логина или пароля нет').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 

        })

    it('Восстановление пароля', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#forgotEmailButton').click(); // клик по кнопке Забыли пароль
        cy.get('#mailForgot').type('german@dolnikov.ru') // вводим емейл в новом окне
        cy.get('#restoreEmailButton').click(); // клик по кнопке Отправить код
        cy.contains('Успешно отправили пароль на e-mail').should('be.visible'); 
        cy.get('#exitMessageButton').should('be.visible');         

        })

    it('Проверка валидации логина без @', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#mail').type('germandolnikov.ru');  // ищем импут ввода емейла и вводим логин без @
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');  // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // клик по кнопке Войти
        cy.contains('Нужно исправить проблему валидации').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 

        })

    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/');
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#mail').type('GerMan@Dolnikov.ru');  // ищем импут ввода емейла и вводим логин
        cy.get('#loginButton').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#pass').type('iLoveqastudio1');  // вводим пароль
        cy.get('#loginButton').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('#loginButton').click(); // клик по кнопке Войти
        cy.contains('Авторизация прошла успешно').should('be.visible'); 
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); 


        })
})
