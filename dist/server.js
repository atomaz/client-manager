System.register(["express", "./routes/index", "./routes/client", "reflect-metadata"], function (exports_1, context_1) {
    "use strict";
    var express, index_1, client_1, app, PORT, SERVER_PATH;
    var __moduleName = context_1 && context_1.id;
    return {
        setters: [
            function (express_1) {
                express = express_1;
            },
            function (index_1_1) {
                index_1 = index_1_1;
            },
            function (client_1_1) {
                client_1 = client_1_1;
            },
            function (_1) {
            }
        ],
        execute: function () {
            app = express();
            PORT = 8000;
            SERVER_PATH = '/client-manager';
            app.use(SERVER_PATH, index_1["default"]);
            app.use(SERVER_PATH, client_1["default"]);
            app.listen(PORT, function () {
                console.log("\u26A1\uFE0F[server]: Server is running at http://localhost:" + PORT);
            });
        }
    };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic2VydmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vc3JjL3NlcnZlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O1lBS00sR0FBRyxHQUFHLE9BQU8sRUFBRSxDQUFDO1lBRWhCLElBQUksR0FBRyxJQUFJLENBQUM7WUFDWixXQUFXLEdBQUcsaUJBQWlCLENBQUE7WUFFckMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEVBQUUsa0JBQVcsQ0FBQyxDQUFDO1lBQ2xDLEdBQUcsQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLG1CQUFZLENBQUMsQ0FBQztZQUduQyxHQUFHLENBQUMsTUFBTSxDQUFDLElBQUksRUFBRTtnQkFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxpRUFBcUQsSUFBTSxDQUFDLENBQUM7WUFDMUUsQ0FBQyxDQUFDLENBQUE7UUFDRixDQUFDIn0=