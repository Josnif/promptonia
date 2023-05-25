import Prompt from "@models/prompt";
import User from "@models/user";
import { connectToDB } from "@utils/database";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();

        const prompts = await Prompt.find({
            creator: params.id
        }).populate('creator');

        const user = await User.findById(params.id);

        const data = {
            prompts: prompts,
            user: user
        };

        return new Response(JSON.stringify(data), { status: 200 })
    } catch (error) {
        return new Response("Internal server error", {status: 500})
    }
}