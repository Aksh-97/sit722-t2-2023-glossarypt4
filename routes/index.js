var express = require('express');
var router = express.Router();
const itemList= [
  { 'id':1, 'title': 'DevOps','description': 'An approach for software development that tries to reduce the gap between the development and operations teams to boost efficiency in the delivery and upkeep of software systems.',
  'reference':'[1]GitLab, “DevOps explained,” GitLab, May 23, 2022. https://about.gitlab.com/topics/devops/'},
  
  { 'id':2 , 'title': 'continous deployment','description': 'Continuous deployment is a strategy for software development and releases in which every code change is automatically run through a pipeline of tests and inspections before being pushed into production. ',
    'reference':'“What is continuous deployment? | Definition from TechTarget,” IT Operations. https://www.techtarget.com/searchitoperations/definition/continuous-deployment'},
  
  { 'id':3 , 'title': 'containerization ','description':' Containerization in DevOps refers to the practice of packaging an application and all its dependencies, libraries, and configurations together into a single container image.'
    ,'reference':'“What Are Containers and Containerization in DevOps?,” Papertrail. https://www.papertrail.com/solution/tips/what-are-containers-and-containerization-in-devops/'},

  { 'id':4 , 'title': 'Dockerfile ','description': 'A Dockerfile is a text file that contains a set of instructions for building a Docker container image. It specifies the base image, adds necessary dependencies, copies the application code, and sets up the configuration'
    ,'reference':'What is Docker in DevOps? How Does it Work? Tutorial Guide For Beginners – Gyansetu.” https://www.gyansetu.in/blogs/what-is-docker-in-devops-how-does-it-work/#:~:text=Using%20Docker%20with%20DevOps%20makes'},

  { 'id':5, 'title': 'kubernetes','description': ': An open-source container orchestration platform that automates the deployment, scaling, and management of containerized applications',
'reference':'“Kubernetes and DevOps | Role, Importrance & Impact in DevOps,” intellipaat.com. https://intellipaat.com/blog/kubernetes-and-devops/?US#:~:text=What%20is%20the%20use%20of (accessed Jul. 26, 2023).'},

  { 'id':6 , 'title': 'git ','description': 'A widely used distributed version control system that allows developers to collaborate on code and track changes to files.',
    'reference':'mijacobs, “What is Git? - Azure DevOps,” learn.microsoft.com. https://learn.microsoft.com/en-us/devops/develop/git/what-is-git'},

  { 'id':7, 'title': 'High Availability (HA):  ','description': 'The property of a system or application that ensures it remains operational and accessible even in the face of failures.',
    'reference':'L. Syhakhom, “DevOps and High Availability When Deploying with AWS,” Logicworks, Oct. 23, 2014. https://www.logicworks.com/blog/2014/10/devops-high-availability-deploying-aws/ (accessed Jul. 26, 2023).'},

  { 'id':8 , 'title': 'Continuous Integration (CI) ','description': 'The practice of frequently integrating code changes into a shared repository. CI aims to automate the process of building, testing, and validating code changes to detect integration issues early.',

  'reference':'I. Sacolick, “What is CI/CD? Continuous integration and continuous delivery explained,” InfoWorld, May 10, 2018. https://www.infoworld.com/article/3271126/what-is-cicd-continuous-integration-and-continuous-delivery-explained.html'},

  { 'id':9 , 'title': 'pipeline ','description': 'An automated series of steps that code changes go through, typically used in CI/CD to build, test, and deploy applications.',
  'reference':'“How to Build a DevOps Pipeline: A Beginner’s Guide,” PagerDuty. https://www.pagerduty.com/resources/learn/what-is-a-pipeline-in-devops-and-how-to-build/ (accessed Jul. 26, 2023)'},

  { 'id':10 , 'title': 'microservices ','description':  'An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently.',
   'reference':'cloud, “DevOps and Microservices: Impact on Enterprise Applications,” Successive Cloud, Nov. 15, 2021. https://successive.cloud/devops-microservices-impact-on-enterprise-applications/'},
  
   { 'id':11 , 'title': 'customer support team ','description':  'nteracts with customers and handles support requests. They could experience confusion if theres a lack of information about changes or if the software has frequent issues due to improper deployment or configuration.',
   'reference':'Atlassian, “How to run IT support the DevOps way,” Atlassian. https://www.atlassian.com/itsm/service-request-management/how-to-run-it-support-devops-way'},
   
   { 'id':12 , 'title': 'bussiness stakeholders ','description':  'hey might face confusion if the DevOps implementation does not deliver the expected value or if there are delays in delivering new features.',
   'reference':'G. link, Facebook, Twitter, Pinterest, Email, and O. Apps, “DevOps Stakeholders – Who Are They?,” Oct. 30, 2018. https://www.itsmprofessor.net/2018/10/devops-stakeholders-who-are-they.html'},
  
   { 'id':13 , 'title': 'end users ','description':  'The ultimate consumers of the software who may be affected by any issues arising from confusion or miscommunication during the DevOps process.',
   'reference':'ontributor, “3 Approaches to End-User Experience Monitoring,” DevOps.com, Jan. 18, 2017. https://devops.com/3-approaches-experience-monitoring/ (accessed Aug. 05, 2023).'},
  
   { 'id':14 , 'title': 'release management team ','description':  'Responsible for coordinating and planning software releases. They may encounter confusion if there are last-minute changes or if the deployment process is not well-defined',
   'reference':'“Importance of DevOps Team Structure,” BrowserStack. https://www.browserstack.com/guide/importance-of-devops-team-structure (accessed Aug. 05, 2023).'},
  
   { 'id':15 , 'title': 'IT management  ','description':  'Overseeing the entire IT department and responsible for making strategic decisions.',
   'reference':'“Importance of DevOps Team Structure,” BrowserStack. https://www.browserstack.com/guide/importance-of-devops-team-structure (accessed Aug. 05, 2023).'},
  
   { 'id':16 , 'title': 'product managers/teams ','description':  'An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently.',
   'reference':'A Product Manager’s best friend: DevOps,” www.linkedin.com. https://www.linkedin.com/pulse/product-managers-best-friend-devops-jared-franklin/ (accessed Aug. 05, 2023).'},
  

   { 'id':17 , 'title': 'security teams ','description':  'An architectural approach where applications are broken down into small, independent services that can be developed, deployed, and scaled independently.',
   'reference':'mijacobs, “Security in DevOps (DevSecOps) - Azure DevOps,” learn.microsoft.com, Nov. 28, 2022. https://learn.microsoft.com/en-us/devops/operate/security-in-devops (accessed Aug. 05, 2023).'},

   { 'id':18 , 'title': 'Test Driven Development (TDD) ','description':  'A development methodology where tests are written before the actual code to ensure that the code meets the desired requirements.',
   'reference':'S. Kawaguchi, “Revisiting Test-Driven Development for a DevOps World,” The Startup, Jun. 28, 2020. https://medium.com/swlh/revisiting-test-driven-development-for-a-devops-world-401f1f8d3275 (accessed Aug. 05, 2023).'},

   { 'id':19 , 'title': 'Application Performance Monitoring (APM) ','description':  'Monitoring and managing the performance and availability of software applications.',
   'reference':'“Application Performance Monitoring in DevOps,” www.softwaretestinghelp.com. https://www.softwaretestinghelp.com/application-performance-monitoring-in-devops/'},

   { 'id':20 , 'title': 'Version Control System (VCS) ','description':  'Software tools that help manage changes to source code over time, allowing teams to collaborate on code development and track its history.',
   'reference':'mijacobs, “What is version control? - Azure DevOps,” learn.microsoft.com. https://learn.microsoft.com/en-us/devops/develop/git/what-is-version-control'},
  

   {'id':21 , 'title': 'Blue-Green Deployment: ','description':  'Blue-Green Deployment is a software release strategy used in DevOps and continuous delivery practices. Its designed to minimize downtime and reduce the risk associated with deploying new versions of an application or making infrastructure changes. ',
   'reference':'“Blue/Green Deployments - Overview of Deployment Options on AWS,” docs.aws.amazon.com. https://docs.aws.amazon.com/whitepapers/latest/overview-deployment-options/bluegreen-deployments.html'},
  
{'id':22 , 'title': 'KPI (Key Performance Indicator) ','description':  'A Key Performance Indicator (KPI) is a quantifiable metric or measure used to evaluate the success or performance of an organization, a project, a process, or an individual in achieving specific objectives or goals. ',
   'reference':'Klipfolio, “What is a KPI? Definition, Best-Practices, and Examples,” Klipfolio.com, 2019. https://www.klipfolio.com/resources/articles/what-is-a-key-performance-indicator'},


{'id':23 , 'title': 'Canary Deployment ','description':  'A deployment strategy that releases a new version of an application to a small subset of users or servers to test its stability before a full rollout. ',
   'reference':'T. Fernandez, “What Is Canary Deployment?,” Semaphore, Sep. 01, 2020. https://semaphoreci.com/blog/what-is-canary-deployment'},



{'id':24 , 'title': 'ChatOps ','description':  'ntegrating chat platforms like Slack or Microsoft Teams into DevOps workflows to facilitate communication, collaboration, and automation. ',
   'reference':'What is ChatOps? - Definition from WhatIs.com,” SearchITOperations. https://www.techtarget.com/searchitoperations/definition/ChatOps'},


{'id':25 , 'title': 'GitOps ','description':  'A DevOps practice that uses Git repositories as the single source of truth for infrastructure and application configurations, enabling automation and version control.',
   'reference':'“What is GitOps? | GitLab,” about.gitlab.com. https://about.gitlab.com/topics/gitops/'},


{'id':26 , 'title': 'Infrastructure as a Service (IaaS) ','description':  'A cloud computing model where virtualized computing resources (servers, storage, networking) are provided as a service. ',
   'reference':'M. Boisvert, “What is IaaS? Infrastructure as a Service Definition,” SearchCloudComputing, Nov. 2022. https://www.techtarget.com/searchcloudcomputing/definition/Infrastructure-as-a-Service-IaaS'},

{'id':27 , 'title': 'Platform as a Service (PaaS) ','description':  'A cloud computing model that provides a platform and runtime environment for developers to build, deploy, and manage applications. ',
   'reference':'W. Chai, K. Brush, and S. Bigelow, “What is PaaS? Platform as a Service Definition [Examples Included],” SearchCloudComputing, Feb. 2022. https://www.techtarget.com/searchcloudcomputing/definition/Platform-as-a-Service-PaaS'},


{'id':28 , 'title': 'Application Performance Monitoring (APM) ','description':  'Monitoring the performance of applications and user experiences to identify and resolve bottlenecks.',
   'reference':'G. Inc, “Application Performance Monitoring and Observability Reviews 2022 | Gartner Peer Insights,” Gartner. https://www.gartner.com/reviews/market/application-performance-monitoring-and-observability'},


{'id':29 , 'title': 'Immutable Infrastructure ','description':  'The practice of never modifying existing servers or infrastructure components; instead, new instances are created and replaced when changes are needed. ',
   'reference':'HashiCorp, “Immutable Infrastructure: Benefits, Comparisons & More,” HashiCorp. https://www.hashicorp.com/resources/what-is-mutable-vs-immutable-infrastructure'},



{'id':30 ,'title': 'Artifact Repository ','description':  'A centralized storage location for software packages, libraries, and dependencies used in the development and deployment process, often managed with tools like Nexus or Artifactory. ',
   'reference':'“What is an Artifact Repository?,” JFrog, Jan. 23, 2019. https://jfrog.com/devops-tools/article/what-is-an-artifact-repository/ (accessed Sep. 02, 2023).'},
   {'id':31,'title': 'Time to Recovery (TTR): ','description':  ' The metric that measures how quickly a system or service can recover from failures and return to normal operation.Time to Recovery (TTR): The metric that measures how quickly a system or service can recover from failures and return to normal operation. ',
   'reference':'“Mean Time to Recovery (MTTR): A Key Metric in DevOps,” Mean Time to Recovery (MTTR): A Key Metric in DevOps. https://www.faros.ai/blog/mean-time-to-recovery-mttr-a-key-metric-in-devops'},






{'id':32 ,'title': 'Serverless Framework:','description':  'A centralized storage location for software packages, libraries, and dependencies used in the development and deployment process, often managed with tools like Nexus or Artifactory. ',
   'reference':'“Serverless Framework: Build Apps On AWS Lambda,” serverless.com. https://www.serverless.com/framework'},



{'id':33 ,'title': 'Helm ','description':  'A package manager for Kubernetes that simplifies the deployment and management of applications using Kubernetes manifests. ',
   'reference':'J. Adam, “The role of Helm in a Kubernetes architecture,” Jan. 08, 2021. https://kruschecompany.com/helm-kubernetes/#:~:text=Helm%20is%20a%20package%20manager (accessed Sep. 10, 2023).'},



{'id':34 ,'title': 'Artifact:','description':  'A deployable unit of code or binary, such as a compiled application, library, or container image ',
   'reference':'“What is Artifacts in DevOps? - Audvik Labs,” May 05, 2022. https://audviklabs.com/what-is-artifacts-in-devops/#:~:text=A%20DevOps%20artifact%20is%20a'},

{'id':35 ,'title': 'feature Toggle (Feature Flag)','description':  'A technique that allows developers to toggle specific features on or off in a live application without redeploying code, enabling gradual feature rollouts and A/B testing. ',
   'reference':'“What is a feature toggle?,” Optimizely. https://www.optimizely.com/optimization-glossary/feature-toggle/#:~:text=In%20software%20development%2C%20a%20feature (accessed Sep. 10, 2023).'},




{'id':36 ,'title': 'Shift-Left Testing','description':  'Moving the testing process earlier in the software development lifecycle to catch and address issues sooner.',
   'reference':'“DevOps: Shift Left to Reduce Failure,” DevOps.com, Jun. 02, 2016. https://devops.com/devops-shift-left-avoid-failure/'},

{'id':37 ,'title': 'DevSecOps ','description':  'Integrating security practices into the DevOps process to ensure that security considerations are addressed throughout the software development and deployment lifecycle. ',
   'reference':'“What is DevSecOps?,” www.redhat.com. https://www.redhat.com/en/topics/devops/what-is-devsecops#:~:text=DevSecOps%20stands%20for%20development%2C%20security'},


{'id':38 ,'title': 'Dark Launching','description':  'Deploying new features or code to production but keeping them hidden from users, allowing for testing and validation without user impact. ',
   'reference':'“Dark Launch,” Split. https://www.split.io/glossary/dark-launch/#:~:text=What%20is%20a%20Dark%20Deployment'},

{'id':39 ,'title': 'Change Management ','description':  'he process of planning, reviewing, and approving changes to software, infrastructure, or configurations to minimize disruptions and ensure stability. ',
   'reference':'“Configuring Azure DevOps as a change management system,” www.ibm.com. https://www.ibm.com/docs/en/rtas/10.5.3?topic=system-configuring-azure-devops-as-change-management (accessed Sep. 10, 2023).'},

{'id':40 ,'title': 'Serverless Computing ','description':  'A centralized storage location for software packages, libraries, and dependencies used in the development and deployment process, often managed with tools like Nexus or Artifactory. ',
   'reference':'“What is serverless computing? |  Serverless definition Cloudflare,” Cloudflare. Available https://www.cloudflare.com/learning/serverless/what-is-serverless'},
  

];

  //getting home page//

router.get('/', function(req, res, next) {
  res.render('index', { title: 'SIT-722', items: itemList });
});

module.exports = router;