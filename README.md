# Hello K8S

## Task description
Please create a Kubernetes deployment of a backend web server.
The deployment should comply with the following requirements 
- The web service should use Node.js, you are free to choose between JavaScript and TypeScript
- The web service should use the Koajs package, and make available a static (simple) website
- There should be 3 pods in the deployment
- There should be a service that follows the round robin rule to connect to the pods, and makes the 
html page available from the outside
- The web service should write a log to a persistent volume that is shared between all the available 
pods


