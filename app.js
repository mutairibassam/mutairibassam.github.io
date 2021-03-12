const myAPIKey = 'NDmfRW5IS3rKPb8hvmkIAGsyRDTGLHCC';
const BASE_URL = 'https://api.wathq.sa/v4/commercialregistration/info/';

document.getElementById('btn').addEventListener('click', performAction);

function performAction(e) {
    const user_input = document.getElementById('display_record').value;
    console.log(user_input);

    fetch(BASE_URL+user_input, {
      method: 'GET',
      headers: {
        'accept': 'application/json',
        'apiKey': 'NDmfRW5IS3rKPb8hvmkIAGsyRDTGLHCC'
      }
    })
    .then(res => res.json())
    .then(data => updateUINew(data));
    }

function updateUINew(data) {
  console.log(data);
  document.getElementById('display_record1').innerHTML = data.crName
  document.getElementById('display_record2').innerHTML = data.crEntityNumber
  document.getElementById('display_record3').innerHTML = data.crNumber
  document.getElementById('display_record4').innerHTML = data.expiryDate
  document.getElementById('display_record5').innerHTML = data.issueDate

}
