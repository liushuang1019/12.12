
import Index from '../views/Index/Index';
import Detial from '../views/Detial/Detial';


const routes=[
    {
        path:'/index',
        component:Index,
        children:[
            {
                path:'/index/my',
                component:My,
            },
            {
                path:'/index/order',
                component:Order,
            }
        ]
    },
    {
        path:'/detial',
        component:Detial
    }
]

export default routes;