const { Blog } = require("../models /Blog");

const resolvers = {
    Query: {

        blogs: async () => Blog.find({}),
        blog: async (parent, args) => Blog.findOne({ title: args.title }),
    },

    Mutation: {
        createBlog: async (_, args) => {
            let post = new Blog(args);
            post.save();
            return post;
        },
        deleteBlog: async (_, args) => {
            const { title } = args;
            console.log(title);
            await Blog.findOneAndDelete({ title: title });
            return `'${title}' Deleted successfully`;
        },
        updateBlog: async (_parent, args, _context, _info) => {
            const { id } = args;
            const { title, body } = args.blog;
            let update = {};
            if (title !== undefined) {
                update.title = title;
            }

            if (body !== undefined) {
                update.body = body;
            }
            const post = await Blog.findByIdAndUpdate(id, update, { updated: true });
            return post;
        },
    },
};

module.exports = resolvers;