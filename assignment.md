# 01.
```
create new project =>ng new 01_assignment

create five component
Header (manually)
Three component => one, two, three (command)
Users(comment)
User (command)  Users/user
 display Name, Age, Nationality
ng g c <conponent name> --skip-tests

in app coomponnet
call one using element selector
call two using class selector
call three using property selector

pass the value of app component to users component and from users component to user component f

app.component ---- uesrs----> Users.component ---> user.component
```

```
   ng g c one --skip-tests


   ng g c users --skip-tests
   ng g c users/user --skip-tests
```


# 02
```
create component 
1. BannerButton
2. Banner
3. Button

call BannerButton component in app.component

BannerButton
<app-banner />
<app-button />


Button
 Button click: {{count}} time(s).
 button. on click, increment the count. display the counter value in Button component


 Banner
   display the below message based on coditon.
   if count= 10 then
      you are eligible for silver button 
   if count = 20 
      you are eligible for golden button 
   
   if count >30
      you are eligible for platinum button

```


# 03:
```
app-componenet
  servers = [
   {id:1, name:'Db-Server', staus='UP', temp:'42', tempUnit:'c'},
   {id:1, name:'Db-Server', staus='UP', temp:'42', tempUnit:'c'},
  ]

Servers component
  <app-server> call in a loop

server Componenent
  Name: 'Db-Server'
  status: UP (upper case)
  temp: 42 C    {{temp}} {{tempUnit}}
  temp: 107.2 Fbb  {{temp | temp:'C':'F' }}

     status up, backgrond color= green
     status down:background colder = red

     display warning alert message, when temp > 58 C
```