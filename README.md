
# Ghost

![ghost options](https://i.ibb.co/brpPYYY/ghosttt.png)

![ghost result](https://i.ibb.co/ZGq6Cqz/ghostttt.png)
## _One click TestCase Maker_

[![N|Solid](https://cldup.com/dTxpPi9lDf.thumb.png)](https://nodesource.com/products/nsolid)

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger)

Ghost is a cli based testcase maker focusing on problem setters current fetures are as below.

- Randoom Number Array
- Multicase Number Array
- Randoom chars Array
- Randoom Alphabet Array

## Features

##### Randoom Number Array
* example input-->
```
12
13 8 14 7 7 13 16 12 11 9 10 13
```
useage -->
* you will get the value inside as an Array
```
[
13, 8, 14, 7, 7,
13, 16, 12, 11, 9,
10, 13
]
```
##### Randoom chars Array
* example input-->

```
14
= ; ; ; : ? ; ? < = = ; < ;
```
* useage -->
```
input.split(" ") //
*   op -> [
   '?', ':', ';', '=',
   '=', ':', '<', ';',
   '=', ':', ':', '>',
   '=', '=' 
]  

```

#### Multicase Number Array 
example input-->
```
4
15
14 8 10 12 13 8 8 11 10 7 9 13 7 7 14
12
10 7 8 8 8 12 13 9 11 14 9 15
15
13 9 10 12 7 13 14 8 8 9 7 9 10 9 14
15
10 14 8 15 8 8 13 8 8 12 11 9 13 11 12
```
useage -->
```
let newInput = input.split("\n");
for (let i = 1; i < newInput.length; i += 2) {
let n = +newInput[i];
let arr = newInput[i + 1].split(" ").map(Number);
console.log(n, arr);
}
```

#### Randoom Alphabet Array
example input-->
```
11
b m n r l m u e x w i
```
useage -->
```
input.split(" ")
op->
[
'h', 'g', 'h', 'x',
'c', 's', 'i', 'j',
'o', 'x', 's'
]
```
#### TwodArray Number (Randoom)
example input-->
```
5 4
0 3 7 0
1 3 7 1
8 2 3 2
7 3 6 0
0 1 2 2
```
useage -->
```
let newInput = input.split("\n");
    let hook = newInput[0].split(" ").map(Number);
    let [N, M] = [hook[0], hook[1]];
    let arr = [];
    for (let i = 1; i < N; i++) {
    arr.push(newInput[i].split(" "));
}
op->
[
  [ '0', '3', '7', '0' ],
  [ '1', '3', '7', '1' ],
  [ '8', '2', '3', '2' ],
  [ '7', '3', '6', '0' ]
]
```


## Installation

ghost requires [Node.js](https://nodejs.org/) v10+ to run.

Install the dependencies and devDependencies and run.

```sh
cd ghost
npm i
npm run ghost
```

```
▒▓▒▓▒▓▒▓▒▓▒▓─▄▀▀▀▄
─██▀████▀██──▀▄▀──█
O▀████████▀O─────█
───▀█▄▄█▀────────█
──▓▒▓▒▓▒▓▒───────█

under development 👨‍💻 

```
