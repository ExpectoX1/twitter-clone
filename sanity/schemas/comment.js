import { title } from "process";

export default {
  name: 'comment',
  title: 'Comment',
  type: 'document',
  fields: [
    {
      name: 'comment',
      title: 'Comment',
      type: 'string',
    },
    {
      name: 'username',
      title: 'Username',
      type: 'string',
    
    },
    {
      name: 'profileImg',
      title: 'Profile Image',
      type: 'string',
    
    },
    {
      name: 'tweet',
      title:'Tweet',
      description:'Tweet that this comment is associated for',
      type: 'reference',
      to:{
        type: 'tweet',
      },
    }
   
  ]
}
