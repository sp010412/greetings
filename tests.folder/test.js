describe('Greeing Exersice', function () {
    it('it should get names set', function () {
        let tests = tools()
        tests.storeNames("saneliswa")


        assert.equal(tests.getNames(), "Saneliswa");
    });

    it('it should prevent duplication of names from being counted ', function () {
        let tests = tools()
        tests.storeNames("saneliswa")
        tests.storeNames("saneliswa")
        tests.storeNames("patience")
        tests.storeNames("nande")

        assert.equal(tests.counter(), 3);
    });

    it('it should greet in English', function () {
        let tests = tools()
        assert.equal(tests.greet("English", "Saneliswa"), "Hi, Saneliswa");
    });
    it('it should greet in Afrikaans ', function () {
        let tests = tools()
        assert.equal(tests.greet("Afrikaans", "Saneliswa"), "Hallo, Saneliswa");
    });
    it('it should greet in Isixhosa', function () {
        let tests = tools()
        assert.equal(tests.greet("Isixhosa", "Saneliswa"), "Molo, Saneliswa");
    });

    it('it should not accept numbers', function () {
        let tests = tools()
        
        assert.equal(tests.conditions("552"), 'Only enter letters eg.John');

    });
    it('it should not accept empty spaces', function () {
        let tests = tools()
        
        assert.equal(tests.conditions(""), 'Enter your name!');

    });

});