const users = [
  {
    id: 1,
    firstName: "Kuldeep",
    lastName: "Vyas",
    email: 'vyaskuldeep20@gmail.com',
    createdAt:'1993-09-26',
    password:'password',
    isAdmin:true
  },
  {
    id: 2,
    firstName: "Mohit",
    lastName: "Sharma",
    email: 'mohit@outlook.com',
    createdAt:'2018-09-19',
    password:'password',
    isAdmin:false
  },
  {
    id: 3,
    firstName: "Rohit",
    lastName: "Sharma",
    email: 'rohitsharma@yahoo.com',
    createdAt:'2020-12-27',
    password:'password',
    isAdmin:false
  },
  {
    id: 4,
    firstName: "Human",
    lastName: "Being",
    email: 'humanbeing@redflix.com',
    createdAt:'2020-08-14',
    password:'password',
    isAdmin:false
  },
  {
    id: 5,
    firstName: "Bhavya",
    lastName: "Varshney",
    email: 'bvgupta@gmail.com',
    createdAt:'2021-02-18',
    password:'password',
    isAdmin:false
  },
  {
    id: 6,
    firstName: "khushboo",
    lastName: "Bhati",
    email: "khushi@gmail.com",
    createdAt:'2021-03-26',
    password:'password',
    isAdmin:false
  },
  {
    id: 7,
    firstName: "Agilan",
    lastName: "Ajax",
    email: "ajaxAgilan@gmail.com",
    createdAt:'2021-03-28',
    password:'password',
    isAdmin:false
  }
];

const projects = [
  {id:1,name:'Tomcat',detail:'Socgen Monitoring App',createdAt:'2021-03-28'},
  {id:2,name:'BVT',detail:'Branch Manager Visit Management Tool',createdAt:'2021-03-27'},
  {id:3,name:'Mobile Health',detail:'Software patch info tool',createdAt:'2021-03-26'},
  {id:4,name:'XL-Catlin',detail:'Insurance Tool to create transaction',createdAt:'2021-03-25'},
  {id:5,name:'JTransfer',detail:'Tool to apply for transfer to jaipur',createdAt:'2019-06-25'},
  {id:6,name:'CabManagementTool',detail:'Cab management Tool',createdAt:'2021-02-21'}
];

const tasks=[
    {id:1,name:'Task 1',detail:'This is test Task 1',projectId:2,userId:7,status:4,createdAt:'2021-03-28'},
    {id:2,name:'Task 2',detail:'This is test Task 2',projectId:4,userId:2,status:4,createdAt:'2021-03-27'},
    {id:3,name:'Task 3',detail:'This is test Task 3',projectId:6,userId:3,status:3,createdAt:'2021-03-26'},
    {id:4,name:'Task 4',detail:'This is test Task 14',projectId:1,userId:5,status:2,createdAt:'2021-03-25'},
    {id:5,name:'Task 5',detail:'This is test Task 7',projectId:3,userId:2,status:5,createdAt:'2021-03-25'},
    {id:6,name:'Task 6',detail:'This is test Task 8',projectId:5,userId:4,status:6,createdAt:'2021-03-25'}
];

const statuses=[
  { id :1 , status: 'Pending'},
  { id :2 , status: 'In Business Specification'},
  { id :3 , status: 'Approved'},
  { id :4 , status: 'Dev Implementation'},
  { id :5 , status: 'Testing'},
  { id :6 , status: 'Done'},
]

const newUser = {
  id: null,
  firstName: "",
  lastName: "",
  email: ""
};
const newProject ={ 
  id: null,
  Name: "",
  Detail: "",
  createdAt: ""
};
const newTask = {
  id: null,
  Name: "",
  Detail: "",
  User:"",
  Status:"",
  createdAt: ""
};

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  newUser,
  newProject,
  newTask,
  users,
  projects,
  tasks,
  statuses
};
