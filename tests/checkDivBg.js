describe('getDivBg', function() {
    var d = document.querySelector('.box');

    it('Should be teal', function() {
        expect(d.style.backgroundColor).toBe('teal');
    });
});

describe('getDivBg2', function() {
    var d = document.querySelector('.box');

    it('Should be teal2', function() {
        expect(d.style.backgroundColor).toBe('tealxxx');
    });
});