# galatolo.me

Repository with the source code of my Angular 7 + Boostrap 4 personal website [galatolo.me](https://galatolo.me).

## Run it locally

Clone this repository

```
git clone https://github.com/galatolofederico/galatolo.me.git && cd galatolo.me
```

Install the dependencies 

```
npm install
```

Be sure to have angular-cli

```
npm install -g @angular/cli
```

Serve it!
```
ng serve
```

The website should be live at http://localhost:4200/

## Make it yours

This website uses a [me.json](https://github.com/galatolofederico/me.json) file to retrieve all the contents so you just have to follow this simple steps in order to build your own version of this website

1) [fork this repository](https://github.com/galatolofederico/galatolo.me/fork)
2) [fork the me.json repository](https://github.com/galatolofederico/me.json)
3) Customize your me.json
4) Point the variable `mejson` in the file `data.service.ts` to your me.json file
5) Customize the website as you want

And if you have made cool modifications don't forget the most important point

6) Open a pull request!