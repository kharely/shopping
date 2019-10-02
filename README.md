# shopping

## Download
`npm install` you will install dependences

### Frontend repository
--

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

#### For insert data, run `node create_items.js`
