const { buildSchema } = require('graphql');
module.exports = buildSchema(`

    type TestData {
        text: String!    
        viewCount: Int!
    }

    type RootQuery {
        hello: TestData!
    }
     
    schema {
        query: RootQuery    
    }
`);