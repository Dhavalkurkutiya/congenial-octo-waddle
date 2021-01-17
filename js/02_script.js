     console.log("02_ConsoleLogesErrorsWarning");
     // Start
     console.time('Run this code time');
     console.log(5 + 7);
     console.log([1, 2, 3, 5, 6, 6]); // Atray
     console.log({
       harry: 'this',
       dhaval: 'hii',
       poonam: 'hii dhaval'
     }); // Atray
     console.table({
       harry: 'this',
       dhaval: 'hii',
       poonam: 'hii dhaval'
     });
     // table from print objects
     console.warn("This is Warning");
     //console.clear();
     onsole.timeEnd('Run this code time');
     console.assert(556 > 189, 'This is Not posible');
     console.error('This is error');
     //End