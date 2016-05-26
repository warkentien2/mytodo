'use strict';

describe('Controller: MainCtrl', function () {

  // load the controller's module
  beforeEach(
    module('mytodoApp')
  );

  var MainCtrl,
    scope, localStorage, store;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainCtrl = $controller('MainCtrl', {
      $scope: scope
    });

    // mock the localStorageService
    store = {};

    localStorage = {
      set: function(key, value) {
        store[key] = value;
      },
      get: function(key) {
        return store[key];
      }
    };

  }));

  it('should have no items to start', function () {
    expect(scope.todos.length).toBe(0);
  });

  it('should add items to the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    expect(scope.todos.length).toBe(1);
  });

  it('should add then remove an item from the list', function () {
    scope.todo = 'Test 1';
    scope.addTodo();
    scope.removeTodo(0);
    expect(scope.todos.length).toBe(0);
  });

  it('should check that the localstorage is undefined before being set', function() {
    var a = localStorage.get('todos');
    expect(a).toBeUndefined();
  });

  it('should set and get the localstorage', function() {
    localStorage.set('todos', ['Test 3']);
    var a = localStorage.get('todos');
    expect(a).toEqual(['Test 3']);

    localStorage.set('todos', ['Test 4']);
    var b = localStorage.get('todos');
    expect(b).toEqual(['Test 4']);
  });
});
