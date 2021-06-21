System.register(["typeorm", "./address"], function (exports_1, context_1) {
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
    var typeorm_1, address_1, Client;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (typeorm_1_1) {
                typeorm_1 = typeorm_1_1;
            },
            function (address_1_1) {
                address_1 = address_1_1;
            }
        ],
        execute: function () {
            Client = (function () {
                function Client() {
                }
                __decorate([
                    typeorm_1.PrimaryGeneratedColumn(),
                    __metadata("design:type", String)
                ], Client.prototype, "uuid");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Client.prototype, "firstName");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Client.prototype, "lastName");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", String)
                ], Client.prototype, "email");
                __decorate([
                    typeorm_1.Column(),
                    __metadata("design:type", Date)
                ], Client.prototype, "birthday");
                __decorate([
                    typeorm_1.OneToMany(function () { return address_1.Address; }, function (address) { return address.client; }),
                    __metadata("design:type", Array)
                ], Client.prototype, "addresses");
                Client = __decorate([
                    typeorm_1.Entity()
                ], Client);
                return Client;
            }());
            exports_1("Client", Client);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O2dCQVVBO2dCQW1CQSxDQUFDO2dCQWhCQztvQkFEQyxnQ0FBc0IsRUFBRTs7NENBQ1o7Z0JBR2I7b0JBREMsZ0JBQU0sRUFBRTs7aURBQ1M7Z0JBR2xCO29CQURDLGdCQUFNLEVBQUU7O2dEQUNRO2dCQUdqQjtvQkFEQyxnQkFBTSxFQUFFOzs2Q0FDSztnQkFHZDtvQkFEQyxnQkFBTSxFQUFFOzhDQUNDLElBQUk7Z0RBQUM7Z0JBR2Y7b0JBREMsbUJBQVMsQ0FBQyxjQUFNLE9BQUEsaUJBQU8sRUFBUCxDQUFPLEVBQUUsVUFBQSxPQUFPLElBQUksT0FBQSxPQUFPLENBQUMsTUFBTSxFQUFkLENBQWMsQ0FBQzs7aURBQy9CO2dCQWxCVixNQUFNO29CQURsQixnQkFBTSxFQUFFO21CQUNJLE1BQU0sQ0FtQmxCO2dCQUFELGFBQUM7YUFBQSxBQW5CRDs7UUFvQkEsQ0FBQyJ9