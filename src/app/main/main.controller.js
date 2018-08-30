(function() {
  'use strict';

  angular
    .module('frontFastcrm')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($timeout, toastr, $localStorage, $state) {
    var vm = this;

    vm.awesomeThings = [];
    vm.cart = [];
    vm.amount = 1;
    vm.$storage = $localStorage;
    vm.cart = $localStorage.cart;


    vm.items = [{
        Id: "1",
        Name: "ADBL APC",
        Price: "20",
        Quantity: "10",
        Image: "apc.jpeg"
      },
      {
        Id: "2",
        Name: "ADBL AIO",
        Price: "65",
        Quantity: "15",
        Image: "aio.jpeg"
      },
      {
        Id: "3",
        Name: "ADBL APC PRO",
        Price: "28",
        Quantity: "13",
        Image: "apc-pro.jpeg"
      },
      {
        Id: "4",
        Name: "ADBL BEETLE JUICER",
        Price: "15",
        Quantity: "10",
        Image: "beetle.jpeg"
      },
      {
        Id: "5",
        Name: "ADBL BLACK WATER",
        Price: "23",
        Quantity: "15",
        Image: "black.jpeg"
      },
      {
        Id: "6",
        Name: "ADBL BONNET",
        Price: "34",
        Quantity: "13",
        Image: "bonnet.jpeg"
      },
      {
        Id: "7",
        Name: "ADBL FROST EATER",
        Price: "22",
        Quantity: "10",
        Image: "frost.jpeg"
      },
      {
        Id: "8",
        Name: "ADBL CLAY GLIDE",
        Price: "12",
        Quantity: "15",
        Image: "clay-glide.jpeg"
      },
      {
        Id: "9",
        Name: "ADBL BUBBLE MAKER",
        Price: "10",
        Quantity: "13",
        Image: "frost.jpeg"
      }
    ];

    vm.addToCart = function(product) {
      var add = false;

      for (var i = 0; i < vm.cart.length; i++) {
        if (product.Id == vm.cart[i].Id) {
          vm.cart[i].Amount = vm.cart[i].Amount + vm.amount;
          add = true;
        }
      }

      if (!add) {
        // vm.cart.push(product);
        vm.cart.push({
          Id: product.Id,
          Name: product.Name,
          Price: product.Price,
          Amount: vm.amount,
          Image: product.Image
        });
      }
      toastr.success('Dodano do koszyka');
      $localStorage.cart = vm.cart;
    }

    vm.remove = function(product) {
      var index = vm.cart.indexOf(product);
      vm.cart.splice(index, 1);
    }

    vm.minus = function(product) {
      if (product.Amount == 1) {
        return
      } else {
        product.Amount--
      }
    }

    vm.plus = function(product) {
      product.Amount++;
    }

    vm.getTotal = function() {
      var total = 0;
      for (var i = 0; i < vm.cart.length; i++) {
        total += vm.cart[i].Amount * vm.cart[i].Price;
      }
      return total;
    }
    vm.order = function() {
      $state.go('extended.thanks');
      $localStorage.cart = [];
      vm.cart = [];
    }

  }
})();
