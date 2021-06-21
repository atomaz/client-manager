System.register(["express"], function (exports_1, context_1) {
    "use strict";
    var express_1, router;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1_1) {
                express_1 = express_1_1;
            }
        ],
        execute: function () {
            router = express_1.Router();
            router.get('/', function (req, res) {
                res.send({
                    message: "Hello World!"
                });
            });
            router.get('/healthCheck', function (req, res) {
                res.send('Ok');
            });
            exports_1("default", router);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcm91dGVzL2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O1lBRU0sTUFBTSxHQUFHLGdCQUFNLEVBQUUsQ0FBQztZQUV4QixNQUFNLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxVQUFDLEdBQVksRUFBRSxHQUFhO2dCQUUzQyxHQUFHLENBQUMsSUFBSSxDQUFDO29CQUNSLE9BQU8sRUFBRSxjQUFjO2lCQUN2QixDQUFDLENBQUM7WUFDSixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsY0FBYyxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7Z0JBRXRELEdBQUcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEIsQ0FBQyxDQUFDLENBQUM7aUNBRVksTUFBTTtRQUNyQixDQUFDIn0=