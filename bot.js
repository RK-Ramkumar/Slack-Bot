var Slack = require('slack-node');
apiToken = "xxxx-xxxx-xxxx-xxx";
 
slack = new Slack(apiToken);
 
slack.api("users.list", function(err, response) {
  console.log(response);
});
 
slack.api('chat.postMessage', {
  text:'hello from nodejs',
  channel:'#slackautomation'
}, function(err, response){
  console.log(response);
});