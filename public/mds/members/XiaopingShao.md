## Shao Xiaoping
Male | Age: 40 | Phone: 13816756087 | Email: xaopng.shao@gmail.com ｜ Experience：16 years   
Edu: Master | Job: Architect/Technical Manager/Soution Architecture | Location: Shanghai

---

## Summary
- 8 years of experience in cloud computing, with a deep understanding of distributed computing. Skilled in cloud services. such as k8s, docker, storage, databases, messaging middleware and caching.  pratice experience in solutions like Flink, Kafka, Node.js, RocketMQ, Spring Boot, MySQL, HBase, Kubernetes, Docker, etc. Familiar with multiple cloud service providers including Azure, Alibaba Cloud, Huawei Cloud, and Google Cloud.
- 8 years of experience in computer graphics with extensive experience in CAD software development. Understands rendering scene graphs, shaders and OpenGL topics. Experienced in direct modeling systems, familiar with key concepts and topology of BREP. Also has about 2 years of experience in image processing, mainly working at the rendering layer framework, with practice experience in optimizing and improving performance in terms of management of memory or CPU/time optimization.
- Rich experience in building systems from scratch. Involved in architectural planning, database and frontend/backend technology selection, ci/cd setup, cost estimation and control etc. Experienced in leading small teams and seeking leadership positions in technology. Known for enjoying challenges and often viewed as a key member of the team.

---

## Work Experience 
### Oqton (Shanghai), Principle Software Engineer, 2022/04-Present
Primary Responsibilities:
- Participated in the R&D of the company's core SAAS product, the MOS (Manufacturing Operating System).
  - Mainly responsible for the IoT Pipeline and Alerts system. The IOT pipleline will collect the sensor datas from machines in factory, we will enrich the sensor data on cloud and produce value metrics accordingly.we could calcuate the Ulization,the Performance and OEE of machine and track the status of it and monitor the quality of building product and trigger alerts if possible.
  - Participated in the development of the MES (Manufacturing Execution System) and the company's new generation Configurable UI system (Page Builder). I decopled the alerts system from using IOT stack(e.g. kafka/flink) to use Temporal as the backend and refined the variable systems which is critical to the success of new Configurable system.
- As a full-stack engineer capable of working in frontend, backend, and DevOps, who is the most broader engineer in Shanghai.
- As a senior expert, involved in company recruitment, actively reviewed code, solutions and produce design plans to achieve agreement. i also actively worked to improve team efficiency.

Achievements:
- Responsible for the Cost Reduce project in the IoT, optimizing resource use, significantly saving costs. Approximately 50% reduction in a single cluster.
- Significantly improved and stabilized the IoT Pipeline, greatly reducing the fault rate.
- Timely completed important challenging features, such as the Sensor Formula in the IoT system and the universal data modification tracking feature in the MES system.

Technically:
- We use React/Redux with TypeScript as our frontend framework, most of our backend service is build with nodejs and go with gRPC + gRPC Gateway for restapi. we use Temporal as our async tasks engineing, we also use Kedar to schedule adhoc tool. at data layer, we mainly use MongoDB to store our data, our data schema is defined by application with Protobuf.
- On IOT side, we use MTConnect running in edge gateway to collect sensor data and sent to kafka, we used  Flink and  Apache Kafka Stream as our stream processing engine. some of enrich  for sensor data is processed by RxJx. the realtime data is exposed with websocket with  ActiveMQ to front end and stored in Elasticsearch for future analytics and statistics usage.

---
### Entrepreneurship, Partner, 2021/05-2022/04
Primary Responsibilities:
- Released an AI-based US stock analysis system. Daily, our website would publish system-calculated indicators and statistical data, and various robots would recommend stocks based on the previous day's market performance, targeting a next-day price increase of over 1%. Our robots achieved 80% success rate in backtests and actual outcomes.
- As the sole engineer, built everything from scratch, including the Flutter frontend, Rocket backend, subscription payments implementation (Stripe), DevOps deployment, and CI/CD construction.

Achievements:
- Deployed our stock analysis program on Google Cloud, gaining about 40 annual paying users.
- Also released a WeChat mini-program for book quotes, facilitating book annotations with voice input support.

Technically 
- we use Flutter as framework to build our App, firstly we released our Web application. the back end api is using Rust (Rocket). our data is stored in MySQL after processed by our daily scheduler job written by Python. our system is deployed in Google Cloud. we used Google Firebase to integrate Google account, and integrated with Stripe to support our subscription billing. we used the Google cloud's CI/CD support with github to automatically deploy after changes on release branch.

---
### Glodon Company Limited, Technical Expert, 2019.1-2021/5
Primary Responsibilities:
- Led the backend team (5 people) to build the collaborative design data platform from nothing to launch. The platform support collaborative on multi-disciplinary BIM data for design, structure, and MEP. the systems consistent frontend web application and sdk for desktop, our core multiple services that devployed in k8s, at the data layer, we use Mysql and Hbase to store our data. we also have async system which integrate with RabbitMQ. the system host about 20T design data.we will also integrate with other services of company and others also integrate with us, i works as the leader and contact point to external teams.
- Participated in the company's BIM data standards creation, which enabled the multi-disciplinary data collaboration.
- As a pioneer, participated in the construction of the desktop SDK for the collaborative data platform and successfully integrated it into the company's desktop design software.

Achievements:
- Launched the BIM data collaboration platform (https://gteam.glodon.com/) from scratch, finished the national project requirement of 1000 concurrent users.
- An invention patent: Structured management method, device, computer equipment, and storage medium for BIM data. (CN202110074818.8)

Technically:
- our Platform exposed public apis throught our API Gatway to our clients, it consistent serveral micro services that run in K8S, we integrated with company account and authentication/authorizaton service. our clients including 3 professional destkop applicatiosn and a web application to manage the BIM project data. our api services is written in SpringBoot, the data is feed into HBase/OTS for BIM element data and MySQL for project data and meta data. we used OSS to store our block data. we use Redis as cache to boost performance. also we use RabbitMQ as message broke to support our async save/write operation to database.in the frontend we used Three.js to render the model.we also provide C++ SDK to aid our desktop clients. the system is first deployed in Alibaba Cloud then switch to Huawei Cloud because of company level strategy.

---
### Microsoft (China), Senior Software Engineer, 2015.12-2019/1
Primary Responsibilities:
- Responsible for the data governance part of the Azure CDN service, including traffic billing data, log data, system monitoring data, and domain monitoring data. Managed the entire lifecycle of the data. which includes data collection, processing, store to usage by other systems. These data are crucial for the efficient operation of the CDN, such as intelligent route and peak bandwidth cutting.

Achievements:
- Processed approximately 2T of log data daily. 
- Peak bandwidth was about 1-2T, distributed to about 5 CDN providers. We invented and developed "Intelligent CDN."

Technically
- we use MVC.NET Web as our service and MVC.NET Worker as our async process for data transform. traffic and  monitor data is stored into Azure TableStore in v1 and migrated into Mysql in V2 and Migrated into ClickHouse in V3 to gain good performance for Groupby aggregation, Log data is saved into Elasticsearch. we integrated with Microsoft internal Geneva system for monitoring. we used Azure Blob to save our block data, and use Azure Message to aid our async data transform. for global load balancer for Azure China CDNk, we use coreDNS to server based on our rule for traffic manager for our domains. we also integrated with IPIP to enrich our data from ip and Tingyun to bring external monitor data.

---
### Autodesk (China) , (Senior) Software Engineer, 2008.1-2015/12
Primary Responsibilities:
- Participated from scratch in the release of Inventor Publisher software, which creates assembly documents from 3D design models, responsible for the development of Annotations. Also participated in keyframe animation development.
- Deeply involved in the development of Inventor Fusion, responsible for many important modeling features such as Mirror/Pattern, Primitives, Extend, Patch etc. Understands direct modeling and the core modeling engine.
- Participated in the company's new mobile project, SketchBook Android development, responsible for the rendering part, innovatively used Tile-based refresh to improve drawing performance, supporting large canvas.
- Participated in the development of multiple versions of Pixlr, including Android and cross-platform projects, mainly responsible for the rendering part. Used GL Rendering to handle real-time camera image effects and offline saving.

Achievements:
- Built and released Publisher and Fusion from scratch, going through TP, Alpha, Beta, and production cycles. My work was highly praised by American leadership.
- SketchBook gained the first 1 million users, and Pixlr gained the first 10 million users. My work significantly improved software performance.

Technically Keywords:
- I start to use C# and C++ to do real professional project. i like C++ and feel very confortable to use it. i understand Rendering Scene Graph, i built different geometry node and apply different trasform and different effects according to requiremnts. e.g. billboard attribute to let text always face client, let annotation keep static size when zoom, add hilight effect or manipulator to it. support HUD ui etc. i also master basics for direct modeling on BREP with ASM/ACIS, e.g. Extrude, Fillet, Revolve etc. i also unerstand enitty tracking for the modeling.
- i also works on Android for about 4 years, i used Surface as the main canvas to render image for sketchbook and support tile based refresh for it. i also support Image Processing and live cameral with GL shader and worked on Cross-platform Development layer with C++.

---

## Educational Background
- Master’s, Computer Science, Zhejiang University, Hangzhou, 2005-2007
- Bachelor’s, Computer Science, Hangzhou Dianzi University, Hangzhou, 2001-2005

---

## Certifications
- Computer and Software Technical Capability Certificate, 2004
- CET6: 550, Oral: C
