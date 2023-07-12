const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID!
        username: String!
        email: String!
        password: String!
        artworks: [Art]
    }

    type Art {
        _id: ID!
        description: String!
        image: String!
        title: String!
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        users: [User]!
        user(userId: ID!): User
        artworks(username: String): [Art]
        artwork(artId: ID!): Art
        me: User
    }

    type Mutation {
        addUser(username: String!, email: String!, password: String!): Auth
        login(email: String!, password: String!): Auth
        removeUser(userId: ID!): User
    }
`;

module.exports = typeDefs;