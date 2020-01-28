
let http = require('http')
http.createServer((req, res) => {
    const phones = [
        {
            name: 'iphone7',
            price: 14000,
            color: 'black'
        },
        {
            name: 'iphone8',
            price: 18000,
            color: 'white'
        },
        {
            name: 'iphone10',
            price: 24000,
            color: 'pink'
        },
        {
            name: 'iphone11',
            price: 28000,
            color: 'black'
        },
        {
            name: 'samsung',
            price: 14000,
            color: 'black'
        },
        {
            name: 'xiaomi',
            price: 10000,
            color: 'black'
        },
        {
            name: 'meizu',
            price: 8000,
            color: 'green'
        },
        {
            name: 'huawei',
            price: 11000,
            color: 'black'
        },
    ];
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', '*');
    res.setHeader('Access-Control-Allow-Methods', '*');
    res.setHeader('Content-Type', 'application/json');
    let url = new URL(req.url, 'http://localhost:3000/');
    if(url.pathname == '/phones') {
        let SearchBySPrice = url.searchParams.get('PriceS')
        let SearchByFPrice = url.searchParams.get('PriceF')
        let SearchByColor = url.searchParams.get('color')
        let PhoneFilter = phones.filter(params => {
            if(params.price <= SearchBySPrice && params.price >= SearchByFPrice && params.color == SearchByColor) {
                return params;
            }
            else {
                console.log("Sorry, no phones by this filter.")
            }
        })
        let result = JSON.stringify(PhoneFilter)
        res.end(result)
    }

}).listen(2000, '127.0.0.1', () => console.log('Server is listening on port:' + 2000));