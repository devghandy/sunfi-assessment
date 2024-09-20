let data;
describe("last name search", () => {
  before(() => {
    cy.fixture("selectors").then((sel) => {
      data = sel;
    });
  });
  it("Positive test: Check that user can search by a valid last name ", () => {
    cy.typeAField(data.inputField, "Smith");
    cy.contains("Smith").should("exist").and("be.visible");
  });
  it("Negative test: Check that invalid last name search returns no charcaters ", () => {
    cy.typeAField(data.inputField, "Shola");
    cy.contains("Smith").should("not.exist");
  });

  it(" Check that user can filter by Location ", () => {
    cy.get('[data-test-id="locationList"]')
      .should("be.visible")
      .select("Citadel of Ricks");
    const citadelOfRicksFilterList = [
      "Rick Sanchez",
      "Morty Smith",
      "Adjudicator Rick",
      "Alien Morty",
      "Alien Rick",
      "Antenna Morty",
      "Aqua Morty",
      "Aqua Rick",
      "Artist Morty",
    ];
    const extractedList= []
    cy.contains('Rick Sanchez').should('be.visible') // check if at least a name is returned in order to verify that the list is not empty
    cy.get(".CharacterListItem_name__2IwyZ").should("not.be.empty").each(($el, index)=>{
      extractedList.push($el.text())
      cy.log(extractedList[index])
    }).then(()=>{
      expect(extractedList).to.deep.equal(citadelOfRicksFilterList)
    });
    
  });
});
