/* This is the spec file that Jasmine will read and
 *contains all of the tests that are used to run against the application.*/

/*The tests are written within the $() function, since some of these tests
 * may require DOM elements and need to ensure they don't run until the DOM is ready.*/
$(function() {
  /* This is the first test suite named "RSS Feeds".
   * This suite is  about the RSS feeds definitions
   * i.e, the allFeeds variable in the application.*/
  describe('RSS Feeds', function() {

    /* This is the first test in RSS Feeds- it tests to make sure that the
     * allFeeds variable has been defined and  it is not empty. */
    it('are defined', function() {
      expect(allFeeds).toBeDefined();
      expect(allFeeds.length).not.toBe(0);
    });

    /* This is the second test in RSS Feeds - it tests to make sure that
     *it loops through each feed in the allFeeds object and ensures
     * it has a URL defined and that the URL is not empty.*/
    it('url is defined', function() {
      for (var k = 0; k < allFeeds.length; k++) {
        expect(allFeeds[k].url).toBeDefined();
        expect(allFeeds[k].url).not.toBe(0);
      }
    });

    /* This is the third test in RSS Feeds- it tests to make sure that
     * it loops through each feed in the allFeeds object and ensures
     * it has a name defined and that the name is not empty.*/
    it('name is defined', function() {
      for (var k = 0; k < allFeeds.length; k++) {
        expect(allFeeds[k].name).toBeDefined();
        expect(allFeeds[k].name).not.toBe(0);
      }
    })
  });


  /* This is the second test suite named "The menu".
   * This test is about the menu i.e,menu visiblity in the application.*/
  describe('The menu', function() {

    /* This is the first test in The menu-
     * it tests to make sure that the menu element is hidden by default.*/
    it('menu is hidden', function() {
      expect($("body").hasClass("menu-hidden")).toBeTruthy();
    });

    /* This is the second test in The menu-
     * it tests to make sure that the menu changes visibility when the menu icon is clicked.
     * This test have two expectations: does the menu display when
     clicked and does it hide when clicked again.*/
    it('menu visibility', function() {
      $('.menu-icon-link').trigger('click');
      expect($("body").hasClass("menu-hidden")).toBeFalsy();
      $('.menu-icon-link').trigger('click');
      expect($("body").hasClass("menu-hidden")).toBeTruthy();
    });
  })

  /* This is the third test suite named "Initial Entries".
   * This test is about the initial Entries.*/
  describe('Initial Entries', function() {
    /*This is the first test in the Initial Entries-it tests to make sure that
     * the LoadFeed function is called and completes its work,
     *then makes sure that there is at least a single .entry element within the .feed container.
     * LoadFeed() is asynchronous so beforeEach and asynchronous done() function are used for this test*/
    beforeEach(function(done) {
      loadFeed(0, done);
      done();
    });

    it('a single entry element in the feed container', function() {
      expect($(".feed").length).not.toBe(0);
    })
  })

  /* This is the fourth test suite named "New Feed Selection".
   * This test is about the New Feed Selection.*/
  describe('New Feed Selection', function() {
    /*This is the first test in the New Feed Selection-it tests to make sure that
     * when a new feed is loaded by the loadFeed function then the content  changes.
     LoadFeed() is asynchronous so beforeEach and asynchronous done() function are used for this test.*/
    var newfeed;
    var oldfeed;
    beforeEach(function(done) {
      loadFeed(1, function() {
        oldfeed = $(".feed").html();
        done();
      });
      loadFeed(2, function() {
        newfeed = $(".feed").html();
        done();
      });
    });

    it('to load a new feed', function() {
      expect(newfeed).not.toBe(oldfeed);
      console.log(newfeed);
      console.log(oldfeed);
    })
  })

}());
