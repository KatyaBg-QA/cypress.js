describe('Автотесты на покупку нового фото для своего тренера ', function () {
    
    it('Покупка нового фото', function () {
        cy.visit('https://pokemonbattle.me/login');
        cy.get(':nth-child(1) > .auth__input').type('mukatena@gmail.com');  // ищем импут ввода емейла и вводим логин
        cy.get('#password').type('Pokemons1');  // вводим пароль
        cy.get('.auth__button').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('.auth__button').click(); // клик по кнопке Войти
        cy.get('.header__btns > [href="/shop"]').click(); // клик по кнопке Магазин
        cy.get(':nth-child(2) > .shop__button').click(); // клик по кнопке Купить
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4111111111111111');  // ищем импут ввода номера карты и вводим номер
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1224');  // ищем импут ввода срока действия карты и вводим срок
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125');  // ищем импут ввода срока cvv и вводим cvv
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('KATYA B');  // ищем импут ввода имения и вводим имя
        cy.get('.pay-btn').should('be.enabled');  //проверяем, что кнопка доступна для нажатия
        cy.get('.pay-btn').click(); //клик по кнопке Оплатить
        cy.get('.payment__submit-button').should('be.disabled'); // проверяем, что кнопка задизейблена
        cy.get('#cardnumber').type('56456');  // ищем импут ввода кода из СМС и вводим код
        cy.get('.payment__submit-button').should('be.enabled'); // проверяем, что кнопка доступна для нажатия
        cy.get('.payment__submit-button').click(); //клик по кнопке Отправить
        cy.contains('Покупка прошла успешно').should('be.visible'); 
        })

})
