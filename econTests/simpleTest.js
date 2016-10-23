module.exports = {
  demoTest : function (client) {
    client.url('https://www.e-conomic.com/login')
      .waitForElementVisible('body', 1000)
      .setValue('#edit-aftalenr', '332302')
      .setValue('#edit-brugernavn', 'jvl')
      .setValue('#edit-password', 'Henter11')
      .waitForElementVisible('#edit-submit', 1000)
      .click('#edit-submit')
      .pause(1000)
      .assert.elementPresent('#topnav-frame')
      .end();
  }
};