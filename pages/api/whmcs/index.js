
const axios = require('axios')
var baseurl = "https://manage.amrio.nl/includes/api.php";

async function check_domain(input) {
  var check_result = await axios.post(baseurl, null, {
    params: {
      action: "DomainWhois",
      responsetype: "json",
      username: "fsCr89FHc2jIlPLLOc9stnUBqTo5pUwd",
      password: "nntEfqGsCHOUUEBsVsQ5ZVGVS6na892Y",
      domain: input,
      //   user_id: "1",
      //   email: "john@gmail.com",
    },
  });
  
  console.log(check_result.data.status)
}

check_domain('amrio.nl')
