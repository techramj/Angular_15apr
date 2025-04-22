# 1 install bootstrap
1. install bootstrap
```
cd 02_input_demo
npm install --save bootstrap
```
2. set the path in angular.json file
```
"styles": [
              "./node_modules/bootstrap/dist/css/bootstrap.min.css",
              "src/styles.css"
            ],
            "scripts": [
              "./node_modules/bootstrap/dist/js/bootstrap.min.js"
            ]
```


# 2 create the component
```
ng g c employees --skip-tests
ng g c emp --skip-tests

```

# 3. create dummy_employees file

