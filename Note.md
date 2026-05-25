struktur

loadbalancer-demo/
│
├── docker-compose.yml
│
├── nginx/
│   └── nginx.conf
│
├── app/
│   ├── Dockerfile
│   ├── package.json
│   └── server.js
│
└── k8s/
    ├── deployment.yaml
    ├── service.yaml
    └── ingress.yaml