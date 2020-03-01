.
├── config # 앱 구성 파일
│ ├── sequalize.json # 구성 자격 부여
│ ├── serviceOne.json # ServiceOne config
│ └── ... # Other configurations
├── routes  
│ ├── controllers # Request managers
│ ├── middlewares # Request middlewares
│ └── routes.js # 여기서 경로 및 중간값 정의
├── services # 외부 서비스 구현
│ ├── serviceOne
│ └── serviceTwo
│ └── ... # Other services
├── db # Data access stuff (Sequalize mostly)
│ ├── models # Models
│ ├── migrations # Migrations
│ ├── seeds # Seeds
│ └── index.js # Sequalize instantiation
├── core # 비즈니스 로직 구현
│ ├── accounts.js  
│ ├── sales.js  
│ ├── comments.js  
│ └── ... # Other business logic implementations
├── utils # Util libs (formats, validation, etc)
├── tests # Testing
├── scripts # Standalone scripts for dev uses
├── pm2.js # pm2 init
├── shipitfile.js # deployment automation file
├── package.json  
├── README.md  
└── app.js # App starting point
