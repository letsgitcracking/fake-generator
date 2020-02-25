const generate = async () => {
    const response = await fetch('http://localhost:9000/data');
    const data = await response.json(); //extract JSON from the http response
    document.getElementById('name').innerHTML = data.name;
    document.getElementById('address1').innerHTML = data.address.suite + " " + data.address.street;
    document.getElementById('address2').innerHTML = data.address.city + " " + data.address.zipcode;
    document.getElementById('dob').innerHTML = data.dob.slice(0,10);
    // document.getElementById('maidenName').innerHTML = data.motherMaiden;
    document.getElementById('email').innerHTML = data.email;
    document.getElementById('phone').innerHTML = data.phone;
    document.getElementById('avatar').src = data.avatar;

  }