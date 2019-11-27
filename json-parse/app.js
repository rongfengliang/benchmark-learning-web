const Benchmark = require('benchmark');
const suite = new Benchmark.Suite;
const userinfo = {
    name: "dalong", age: 333, items: [
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        },
        {
            name: "dalong",
            age: 333
        },
        {
            name: "dalong22",
            age: 33
        }
    ]
}
const userinfo_str = JSON.stringify(userinfo)
suite.add("ob", () => {
    JSON.parse(userinfo)
}).add("str", () => {
    JSON.parse(userinfo_str)
})
    .on('cycle', function (event) {
        console.log(String(event.target));
    })
    .on('complete', function () {
        console.log('Fastest is ' + this.filter('fastest').map('name'));
    })
    .run({ 'async': false });

