System.register(["typeorm", "./client"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var typeorm_1, client_1, Address;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (typeorm_1_1) {
                typeorm_1 = typeorm_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            }
        ],
        execute: function () {
            Address = (function () {
                function Address() {
                }
                __decorate([
                    typeorm_1.PrimaryGeneratedColumn(),
                    __metadata("design:type", String)
                ], Address.prototype, "uuid");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Address.prototype, "country");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Address.prototype, "state");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Address.prototype, "city");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Address.prototype, "addressLine");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Address.prototype, "zipcode");
                __decorate([
                    typeorm_1.ManyToOne(function (type) { return client_1.Client; }, function (client) { return client.addresses; }),
                    __metadata("design:type", client_1.Client)
                ], Address.prototype, "client");
                Address = __decorate([
                    typeorm_1.Entity()
                ], Address);
                return Address;
            }());
            exports_1("Address", Address);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYWRkcmVzcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9tb2RlbHMvYWRkcmVzcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Z0JBVUE7Z0JBc0JBLENBQUM7Z0JBbkJDO29CQURDLGdDQUFzQixFQUFFOzs2Q0FDWjtnQkFHYjtvQkFEQyxnQkFBTSxFQUFFOztnREFDTztnQkFHaEI7b0JBREMsZ0JBQU0sRUFBRTs7OENBQ0s7Z0JBR2Q7b0JBREMsZ0JBQU0sRUFBRTs7NkNBQ0k7Z0JBR2I7b0JBREMsZ0JBQU0sRUFBRTs7b0RBQ1c7Z0JBR3BCO29CQURDLGdCQUFNLEVBQUU7O2dEQUNPO2dCQUdoQjtvQkFEQyxtQkFBUyxDQUFDLFVBQUEsSUFBSSxJQUFJLE9BQUEsZUFBTSxFQUFOLENBQU0sRUFBRSxVQUFBLE1BQU0sSUFBSSxPQUFBLE1BQU0sQ0FBQyxTQUFTLEVBQWhCLENBQWdCLENBQUM7OENBQzlDLGVBQU07K0NBQUM7Z0JBckJKLE9BQU87b0JBRG5CLGdCQUFNLEVBQUU7bUJBQ0ksT0FBTyxDQXNCbkI7Z0JBQUQsY0FBQzthQUFBLEFBdEJEOztRQXVCQSxDQUFDIn0=