import React, {Component} from 'react'
import Link from './Link'

class LinkList extends Component{
    render(){
        const linksToRender =[
            {
              id: '1',
              description: 'Prisma turns you database into a graphQL API',
              url: 'www.prismagraphql.com',  
            },
            {
              id: '2',
              description: 'The best GraphQL client ',
              url: 'www.apollographql.com'  
            },
        ]

        return (
            <div>
                {linksToRender.map(link => <Link key={link.id} link={link}/>)}
            </div>
        )
    }

    

    
}

export default LinkList