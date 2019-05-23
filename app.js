const express = require('express'),
      app = express(),
  cors = require('cors'),
  faker = require('faker');

app.set('port', process.env.PORT || 9000);

//Ask - Do I need to use cors?
app.use(cors());
app.use(express.static("public"));

app.get('/data', (req, res) => {
  res.json(fakeData())
});

fakeData = () => {
  return {
    "name": faker.name.findName(),
    "address": {
      "street": faker.address.streetName(true),
      "suite": faker.address.secondaryAddress(),
      "city": faker.address.city(),
      "zipcode": faker.address.zipCode(),
      "geo": {
        "lat": faker.address.latitude(),
        "lng": faker.address.longitude()
      }
    },
    "dob": faker.date.past(50, new Date("Sat Sep 20 1992 21:35:02 GMT+0200 (CEST)")),
    "motherMaiden": faker.name.lastName(),
    "username": faker.internet.userName(),
    "email": faker.internet.email(),
    "phone": faker.phone.phoneNumber(),
    "website": faker.internet.domainName(),
    "company": {
      "name": faker.company.companyName(),
      "catchPhrase": faker.company.catchPhrase(),
      "bs": faker.company.bs()
    },
    "avatar": faker.internet.avatar()
  };
};


app.listen(app.get('port'), () => console.log('Server up: http://localhost:' + app.get('port')));