const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const Blog = require("./models /Blog");
const resolvers = require("./resolvers/blog");
const typeDefs = require("./type-Def/blog");
require("./config");
require("dotenv").config();

const app = express();


const apolloServer = async (typeDefs, resolvers) => {
    const server = new ApolloServer({
        typeDefs,
        resolvers,
        introspection: true,
        context: { Blog },
    });

    await server.start();
    server.applyMiddleware({ app });

    app.listen(5000, () => {
        console.log(
            `🚀 Server ready at http://localhost:5000${server.graphqlPath}`
        );
    });
};

apolloServer(typeDefs, resolvers);