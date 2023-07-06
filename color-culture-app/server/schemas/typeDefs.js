const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): User
        removeUser(userId: ID!): User
    }
`;

module.exports = typeDefs;