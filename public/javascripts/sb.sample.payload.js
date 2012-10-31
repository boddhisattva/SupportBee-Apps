var SamplePayload = []
      
SamplePayload['ticket.created'] = JSON.parse('{"payload":{"action_type":"ticket.created","company":{"subdomain":"company1","name":"Company, 1"}, "ticket":{"id":1,"subject":"A Ticket","replies_count":0,"comments_count":0,"last_activity_at":"2012-03-01T17:02:51Z","created_at":"2012-03-01T17:02:51Z","unanswered":true,"archived":false,"spam":false,"trash":false,"summary":"Ticket Content","cc":[],"labels":[],"requester":{"id":1,"email":"person2@example.com","name":null,"agent":false,"picture":{"thumb20":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=128"}},"content":{"text":"Ticket Content","html":"<p>Ticket Content</p>","attachments":[{"id":1,"created_at":"2012-03-01T17:05:50Z","filename":"todo2.txt","content_type":"text/plain; charset=US-ASCII; name=todo2.txt","url":{"original":"http://company.example.com/attachments/1","thumb":"http://company.example.com/attachments/1?version=thumb"}}]}}}}');


SamplePayload['agent.reply.created'] = JSON.parse('{"payload":{"action_type":"agent.reply.created","company":{"subdomain":"company1","name":"Company, 1"}, "ticket":{"id":1,"subject":"A Ticket","replies_count":0,"comments_count":0,"last_activity_at":"2012-03-01T17:05:50Z","created_at":"2012-03-01T17:05:50Z","unanswered":true,"archived":false,"spam":false,"trash":false,"summary":"Ticket Content","cc":[],"labels":[],"requester":{"id":1,"email":"person2@example.com","name":null,"agent":false,"picture":{"thumb20":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=128"}},"content":{"text":"Ticket Content","html":"Ticket Content","attachments":[{"id":1,"created_at":"2012-03-01T17:05:50Z","filename":"todo2.txt","content_type":"text/plain; charset=US-ASCII; name=todo2.txt","url":{"original":"http://company.example.com/attachments/1","thumb":"http://company.example.com/attachments/1?version=thumb"}}]}},"reply":{"id":1,"created_at":"2012-03-01T17:05:50Z","summary":"Reply Content","cc":[],"replier":{"id":2,"email":"person3@example.com","name":"Agent,1","agent":true,"picture":{"thumb20":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=128"}},"content":{"text":"Reply Content","html":"Reply Content","attachments":[]}}}}');


SamplePayload['customer.reply.created'] = JSON.parse('{"payload":{"action_type":"customer.reply.created","company":{"subdomain":"company1","name":"Company, 1"}, "ticket":{"id":1,"subject":"A Ticket","replies_count":0,"comments_count":0,"last_activity_at":"2012-03-01T17:05:50Z","created_at":"2012-03-01T17:05:50Z","unanswered":true,"archived":false,"spam":false,"trash":false,"summary":"Ticket Content","cc":[],"labels":[],"requester":{"id":1,"email":"person2@example.com","name":null,"agent":false,"picture":{"thumb20":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=128"}},"content":{"text":"Ticket Content","html":"Ticket Content","attachments":[{"id":1,"created_at":"2012-03-01T17:05:50Z","filename":"todo2.txt","content_type":"text/plain; charset=US-ASCII; name=todo2.txt","url":{"original":"http://company.example.com/attachments/1","thumb":"http://company.example.com/attachments/1?version=thumb"}}]}},"reply":{"id":1,"created_at":"2012-03-01T17:05:50Z","summary":"Reply Content","cc":[],"replier":{"id":2,"email":"person3@example.com","name":"Agent,1","agent":true,"picture":{"thumb20":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=128"}},"content":{"text":"Reply Content","html":"Reply Content","attachments":[]}}}}');


SamplePayload['comment.created'] = JSON.parse('{"payload":{"action_type":"comment.created", "company":{"subdomain":"company1","name":"Company, 1"}, "ticket":{"id":1,"subject":"A Ticket","replies_count":0,"comments_count":0,"last_activity_at":"2012-03-01T17:22:53Z","created_at":"2012-03-01T17:22:53Z","unanswered":true,"archived":false,"spam":false,"trash":false,"summary":"Ticket Content","cc":[],"labels":[],"requester":{"id":1,"email":"person2@example.com","name":null,"agent":false,"picture":{"thumb20":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/be27d979489e5ff5f6f503442c9d349b.png?r=PG&s=128"}},"content":{"text":"Ticket Content","html":"Ticket Content","attachments":[{"id":1,"created_at":"2012-03-01T17:05:50Z","filename":"todo2.txt","content_type":"text/plain; charset=US-ASCII; name=todo2.txt","url":{"original":"http://company.example.com/attachments/1","thumb":"http://company.example.com/attachments/1?version=thumb"}}]}},"comment":{"id":1,"created_at":"2012-03-01T17:22:55Z","commenter":{"id":2,"email":"person3@example.com","name":"Agent,1","agent":true,"picture":{"thumb20":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=20","thumb24":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=24","thumb32":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=32","thumb48":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=48","thumb64":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=64","thumb128":"https://secure.gravatar.com/avatar/efd59671aafc2cec38941a0bb9606943.png?r=PG&s=128"}},"content":{"text":"Comment Content","html":"Comment Content","attachments":[]}}}}');
