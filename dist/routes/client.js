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
            router.get('/client', function (req, res) {
                res.send([]);
            });
            router.get('/client/:id', function (req, res) {
                res.send({});
            });
            router.post('/client', function (req, res) {
                res.send({});
            });
            router.put('/client/:id', function (req, res) {
                res.send({});
            });
            router["delete"]('/client/:id', function (req, res) {
                res.send();
            });
            exports_1("default", router);
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2xpZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcy9jbGllbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7WUFFTSxNQUFNLEdBQUcsZ0JBQU0sRUFBRSxDQUFDO1lBRXhCLE1BQU0sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7Z0JBQ2hELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7Z0JBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7Z0JBQ2pELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxHQUFHLENBQUMsYUFBYSxFQUFFLFVBQUMsR0FBWSxFQUFFLEdBQWE7Z0JBQ3BELEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsQ0FBQztZQUVILE1BQU0sQ0FBQyxRQUFNLENBQUEsQ0FBQyxhQUFhLEVBQUUsVUFBQyxHQUFZLEVBQUUsR0FBYTtnQkFDdkQsR0FBRyxDQUFDLElBQUksRUFBRSxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUM7aUNBR1ksTUFBTTtRQUNyQixDQUFDIn0=