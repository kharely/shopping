# shopping

## Download
`npm install` you will install dependences

### Create a client with vue
> `vue create client`
> #### Features
> - Router
> - Linter/Formatter
> #### Linkter and Formatter config
> - ESLint + Airbnb config
> #### Pink Additional lint features
> - Lint to save
> - Lint and fix on commit
> #### Where the placing of config for Babel, etc...
> - Package.json
> #### Save this as a preset fot futures projects
> - N
> ### When this is finished run
> `cd client & npm run serve`

### Mongo installation on ubuntu
`wget -qO - https://www.mongodb.org/static/pgp/server-4.2.asc | sudo apt-key add -`

this should return 'ok'

Create file /etc/apt/sources.list.d/mongodb-org-4.2.list

`echo "deb [ arch=amd64 ] https://repo.mongodb.org/apt/ubuntu bionic/mongodb-org/4.2 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-4.2.list`

Update your computer

`sudo apt-get update`

Install mongo

`sudo apt-get install -y mongodb-org`

Start Mongo server or stop

`sudo service mongod start` or `sudo service mongod stop`

#### For insert data, run a 'get' method.
