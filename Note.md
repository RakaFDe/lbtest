struktur

lbtest/
├── app/
│   ├── server.js
│   ├── package.json
│   └── Dockerfile
│
├── docker-compose.yml
│
├── nginx/
│   └── nginx.conf
│
├── k8s/
│   ├── deployment.yml
│   ├── service.yml
│   ├── ingress.yml
│   └── namespace.yml
│
├── ansible/
│   ├── inventory.ini
│   ├── playbook.yml
│   └── roles/
│
├── .github/
│   └── workflows/
│       └── ci.yml
│
└── README.md

==================

cara jalankan ke folder app lalu 

docker compose up --build
atau tambahkan -d untuk background