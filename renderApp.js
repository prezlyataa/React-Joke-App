module.exports = function renderApp() {
   return `
     <!doctype html>
     <html lang="en">
     <head>
         <meta charset="UTF-8">
         <meta name="viewport"
               content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
         <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Jokes App</title>
         <link rel="stylesheet" type="text/css" href="../build/main.css">
     </head>
     <body>
         <div id="app"></div>
         <script src="../build/main.js"></script>
     </body>
     </html>
 `;
};
