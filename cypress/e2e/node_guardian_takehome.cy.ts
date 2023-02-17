import { QuestTiles } from '../../components/questsView/questTiles';

describe('QuestTiles', () => {
	it('Quest Tiles should be clickable', () => {
		cy.visit('http://localhost:3000');
		cy.contains('iPhone 9').click();
		cy.url().should('include', '/1');

		cy.visit('http://localhost:3000');
		cy.contains('iPhone X').click();
		cy.url().should('include', '/2');

		cy.visit('http://localhost:3000');
		cy.contains('Samsung Universe 9').click();
		cy.url().should('include', '/3');

		cy.visit('http://localhost:3000');
		cy.contains('OPPOF19').click();
		cy.url().should('include', '/4');

		cy.visit('http://localhost:3000');
		cy.contains('Huawei P30').click();
		cy.url().should('include', '/5');

		cy.visit('http://localhost:3000');
		cy.contains('MacBook Pro').click();
		cy.url().should('include', '/6');

		cy.visit('http://localhost:3000');
		cy.contains('Samsung Galaxy Book').click();
		cy.url().should('include', '/7');

		cy.visit('http://localhost:3000');
		cy.contains('Microsoft Surface Laptop 4').click();
		cy.url().should('include', '/8');

		cy.visit('http://localhost:3000');
		cy.contains('Infinix INBOOK').click();
		cy.url().should('include', '/9');

		cy.visit('http://localhost:3000');
		cy.contains('HP Pavilion 15-DK1056WM').click();
		cy.url().should('include', '/10');
	});
});

describe('Go Back Button', () => {
	it('Go Back Button Should return to homepage', () => {
		cy.visit('http://localhost:3000/1');
		cy.contains('Go Back').click();
		cy.url().should('equal', 'http://localhost:3000/');
	});
});

describe('X Button', () => {
	it('X Button Should return to homepage', () => {
		cy.visit('http://localhost:3000/1');
		cy.contains('.singleQuestBanner__ExitButton-sc-ccae8b4e-1 eVRjUQ').click();
		cy.url().should('equal', 'http://localhost:3000/');
	});
});

export {};
