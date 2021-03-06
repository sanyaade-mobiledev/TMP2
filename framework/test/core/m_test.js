test('M. Namespace', function () {
    ok(M, 'M is defined');
    ok(typeof M === 'object', 'M is an object');

    ok(M.Version && M.hasOwnProperty('Version'), 'M.Version is defined');
    ok(typeof M.Version === 'string', 'M.Version is a string');
    ok(parseInt(M.Version.split('.')[0]) >= 2, 'old TMP version ');

    ok(m_require, 'm_require is defined');
    ok(typeof m_require === 'function', 'm_require is a function');

    ok(!NO, 'NO is defined');
    ok(typeof NO === 'boolean', 'NO is a boolean');
    ok(NO === false, 'NO equals false');

    ok(YES, 'YES is defined');
    ok(typeof YES === 'boolean', 'YES is a boolean');
    ok(YES === true, 'YES equals true');

    if( true ) {

    } else {

    }

    ok(M.hasOwnProperty('META_CREATED_AT') && '_createdAt');
    M.META_UPDATED_AT = '_updatedAt';
    M.META_M_ID = '_m_id';

    ok(M.LOCAL_STORAGE_PREFIX && M.hasOwnProperty('LOCAL_STORAGE_PREFIX'), 'M.LOCAL_STORAGE_PREFIX is defined');
    ok(typeof M.LOCAL_STORAGE_PREFIX === 'string', 'M.LOCAL_STORAGE_PREFIX is a string');
    ok(M.LOCAL_STORAGE_PREFIX === '#m#', 'M.LOCAL_STORAGE_PREFIX equals #m#');

    ok(M.LOCAL_STORAGE_SUFFIX && M.hasOwnProperty('LOCAL_STORAGE_SUFFIX'), 'M.LOCAL_STORAGE_SUFFIX is defined');
    ok(typeof M.LOCAL_STORAGE_SUFFIX === 'string', 'M.LOCAL_STORAGE_SUFFIX is a string');
    ok(M.LOCAL_STORAGE_SUFFIX === '_', 'M.LOCAL_STORAGE_SUFFIX equals _');
});

test('locale storage', function () {

    var putSomethingToTheLocaleStorage = function () {
        M.Application = {};
        M.Application.name = 'test';
        localStorage.setItem('test0', 'test0');
        localStorage.setItem('test1', 'test1');
        localStorage.setItem(M.LOCAL_STORAGE_PREFIX + M.Application.name + M.LOCAL_STORAGE_SUFFIX + 'test0', M.LOCAL_STORAGE_PREFIX + M.Application.name + M.LOCAL_STORAGE_SUFFIX + 'test0');
        localStorage.setItem(M.LOCAL_STORAGE_PREFIX + M.Application.name + M.LOCAL_STORAGE_SUFFIX + 'test1', M.LOCAL_STORAGE_PREFIX + M.Application.name + M.LOCAL_STORAGE_SUFFIX + 'test1');
    };

    ok(window && window.localStorage, 'localStorage available');
    putSomethingToTheLocaleStorage();
    localStorage.clear('f');
    equal(localStorage.length, 0, 'localStorage is available and the clear function works with the parameter "f"');

    putSomethingToTheLocaleStorage();
    localStorage.clear();
    equal(localStorage.length, 0, 'localStorage.clear() is implemented as anticipated in the spec');

});