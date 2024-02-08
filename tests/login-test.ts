describe('Practice Login Tests', function() {
    // This will be run before each test suite is started
  
    beforeEach(function(done){
        browser.navigateTo('https://practicetestautomation.com/practice-test-login/');
    });

    it('Perform a Successful Login', function(browser) {
        var username: String = "student";
        var password: String = "Password123";

        browser
        .waitForElementVisible({
            selector: '#username',
            timeout: 10000,
            retryInterval: 200
            })
            .sendKeys('#username', [username])
            .waitForElementVisible({
                selector: '#password',
                timeout: 10000,
                retryInterval: 200
                })
            .sendKeys('#password', [password])
            .waitForElementVisible({
                selector: '#submit',
                timeout: 10000,
                retryInterval: 200
                })
            .click('#submit')
            .assert.urlContains('logged-in-successfully')
    }); 

  it('Failed Login based on username', function(browser) {
      var wrongUsername: String = "wrongStudent";
      var correctPassword: String = "Password123";

      browser
          .waitForElementVisible({
          selector: '#username',
          timeout: 10000,
          retryInterval: 200
          })
          .sendKeys('#username', [wrongUsername])
          .waitForElementVisible({
              selector: '#password',
              timeout: 10000,
              retryInterval: 200
              })
          .sendKeys('#password', [correctPassword])
          .waitForElementVisible({
              selector: '#submit',
              timeout: 10000,
              retryInterval: 200
              })
          .click('#submit')
          .assert.textContains('#error', 'Your username is invalid!')
  }); 

  it('Failed Login based on password', function(browser) {
      var correctUsername: String = "student";
      var wrongPassword: String = "Password321";

      browser
          .waitForElementVisible({
          selector: '#username',
          timeout: 10000,
          retryInterval: 200
          })
          .sendKeys('#username', [correctUsername])
          .waitForElementVisible({
              selector: '#password',
              timeout: 10000,
              retryInterval: 200
              })
          .sendKeys('#password', [wrongPassword])
          .waitForElementVisible({
              selector: '#submit',
              timeout: 10000,
              retryInterval: 200
              })
          .click('#submit')
          .assert.textContains('#error', 'Your password is invalid!')
  }); 
});

